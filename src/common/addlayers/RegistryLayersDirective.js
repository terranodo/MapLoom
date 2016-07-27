(function() {

  var module = angular.module('loom_registrylayers_directive', [
    'rzModule',
    'loom_addlayersfilter_directive'
  ]);

  module.directive('loomRegistrylayers',
      function($rootScope, configService, serverService, mapService, geogigService, $translate, dialogService, $timeout, LayersService) {
        return {
          templateUrl: 'addlayers/partials/registryLayers.tpl.html',
          link: function(scope, element) {
            var searchFavorites = false;
            var searchHyper = true;
            var mapPreviewChangeCount = 0;
            var savedLayers = configService.configuration.map['layers'];
            scope.currentServerId = -1;
            scope.filterOptions = {
              owner: null,
              text: null,
              docsPage: 1,
              size: 10,
              minYear: null,
              maxYear: null,
              mapPreviewCoordinatesBbox: [],
              histogramFlag: true
            };
            scope.previewCenter = [40, 30];
            scope.previewZoom = 1;
            scope.previewLayers = [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ];
            scope.layerConfig = {Title: 'Title'};
            scope.selectedLayer = {};
            scope.cart = [];
            cartLayerId = [];
            scope.catalogKey = 0;
            scope.pagination = {sizeDocuments: 1, pages: 1};

            var server = serverService.getRegistryLayerConfig();
            if (goog.isDefAndNotNull(server)) {
              scope.currentServerId = 0;
            }

            var resetText = function() {
              scope.filterOptions.text = null;
            };
            var resetOwner = function() {
              scope.filterOptions.owner = null;
            };
            var resetDocsPage = function() {
              scope.filterOptions.docsPage = 1;
            };
            var resetMapPreview = function() {
              if (mapPreviewChangeCount > 1) {
                mapPreviewChangeCount = 0;
                scope.filterOptions.mapPreviewCoordinatesBbox = [];
                $rootScope.$broadcast('resetMap');
              }
            };

            var clearFilters = function() {
              resetText();
              resetOwner();
              resetDocsPage();
              searchFavorites = false;
              searchHyper = false;
            };

            scope.resetDocsPage = resetDocsPage;

            scope.defaultSearch = function() {
              clearFilters();
              scope.search();
            };

            scope.searchMyUploads = function() {
              clearFilters();
              scope.filterOptions.owner = true;
              scope.search();
            };

            scope.searchHyper = function() {
              clearFilters();
              resetMapPreview();
              scope.slider = scope.defaultSliderValue();
              searchHyper = true;
              scope.search();
            };

            scope.searchMyFavorites = function() {
              clearFilters();
              searchFavorites = true;
              scope.search();
            };

            scope.getResults = function() {
              return server.layersConfig;
            };


            scope.nextPage = function() {
              scope.filterOptions.docsPage++;
              scope.search();
            };

            scope.hasNext = function() {
              if (scope.pagination.currentPage > 0) {
                return scope.pagination.pages > scope.pagination.currentPage;
              }
            };
            scope.hasPrevious = function() {
              return scope.filterOptions.docsPage > 1;
            };
            scope.previousPage = function() {
              if (scope.filterOptions.docsPage > 1) {
                scope.filterOptions.docsPage--;
              }
              scope.search();
            };

            scope.search = function() {
              searchRangeValues();
              if (searchFavorites) {
                serverService.addSearchResultsForFavorites(serverService.getRegistryLayerConfig(), scope.filterOptions);
              } else if (searchHyper) {
                serverService.addSearchResultsForHyper(server, scope.filterOptions, scope.catalogKey);
              } else {
                serverService.populateLayersConfigElastic(serverService.getRegistryLayerConfig(), scope.filterOptions);
              }
            };

            scope.$on('totalOfDocs', function(event, totalDocsCount) {
              scope.pagination.sizeDocuments = totalDocsCount;
              scope.pagination.showdocs = scope.pagination.sizeDocuments < 10 ? scope.pagination.sizeDocuments : scope.filterOptions.size;
              scope.pagination.currentPage = scope.filterOptions.docsPage;
              scope.pagination.pages = Math.ceil(scope.pagination.sizeDocuments / scope.filterOptions.size);
            });

            $('#registry-layer-dialog').on('shown.bs.modal', scope.search);

            scope.$on('slideEnded', function() {
              resetDocsPage();
              scope.search();
            });
            scope.$on('changeSliderValues', function() {
              resetDocsPage();
              scope.search();
            });

            scope.$on('moveendMap', function(event, coordinates) {
              mapPreviewChangeCount++;
              if (mapPreviewChangeCount > 1) {
                scope.filterOptions.mapPreviewCoordinatesBbox = mapService.createBBoxFromCoordinatesFromProjectionIntoProjection(coordinates, mapService.getProjection(), 'EPSG:4326')[0];
                scope.search();
              }
            });

            function searchRangeValues() {
              if (goog.isDefAndNotNull(scope.sliderValues)) {
                scope.filterOptions.minYear = scope.sliderValues[scope.slider.minValue];
                scope.filterOptions.maxYear = scope.sliderValues[scope.slider.maxValue];
                scope.filterOptions.sliderValues = scope.sliderValues;
              }
            }

            scope.selectRow = function(layerConfig) {
              scope.selectedLayer = layerConfig;
              scope.addToCart(layerConfig);
            };

            var addLayer = function(layerConfig) {
              layerConfig['registry'] = true;
              LayersService.addLayer(layerConfig, scope.currentServerId, server);
            };

            scope.addLayers = function() {
              scope.selectedLayer = {};
              $('#registry-layer-dialog').modal('hide');
              scope.cart.forEach(addLayer);
              scope.clearCart();
            };

            var bboxStyle = function() {
              return new ol.style.Style({
                stroke: new ol.style.Stroke({
                  color: 'blue',
                  width: 2
                }),
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 255, 0.05)'
                })
              });
            };

            scope.previewLayer = function(layerConfig) {
              layerConfig.CRS = ['EPSG:4326'];
              scope.currentLayer = layerConfig;
              var layer = mapService.createLayerWithFullConfig(layerConfig, scope.currentServerId);
              var bboxLayer = mapService.createGeoJSONLayerFromCoordinatesWithProjection(layerConfig.extent, mapService.getProjection());
              bboxLayer.setStyle(bboxStyle());
              scope.previewLayers = [
                layer,
                bboxLayer
              ];
            };

            scope.addToCart = function(layerConfig) {
              var layerCopi = layerConfig.id;
              var configIndex = cartLayerId.indexOf(layerCopi);
              if (configIndex === -1) {
                cartLayerId.push(layerCopi);
                scope.cart.push(layerConfig);
              } else {
                cartLayerId.splice(configIndex, 1);
                scope.cart.splice(configIndex, 1);
              }
            };

            scope.isInCart = function(layerConfig) {
              return cartLayerId.indexOf(layerConfig.id) !== -1 ? true : false;
            };

            scope.clearCart = function() {
              scope.cart = [];
              cartLayerId = [];
            };

            scope.filterAddedLayers = function(layerConfig) {
              return LayersService.filterAddedLayers(layerConfig, scope.currentServerId, layerConfig.name);
            };

            scope.$on('layers-loaded', function() {
              if (!scope.$$phase && !$rootScope.$$phase) {
                scope.$apply();
              }
            });

            scope.addRegistryLayersFromSavedMap = function(savedLayers) {
              for (var lyr in savedLayers) {
                var iteratedlayer = configService.configuration.map['layers'][lyr];
                if (iteratedlayer['registry']) {
                  scope.addToCart(iteratedlayer.registryConfig);
                  scope.addLayers();
                  return true;
                }
              }
            };

            // load saved registry layers if they exist
            scope.addRegistryLayersFromSavedMap();
          }
        };
      }
  );
})();
