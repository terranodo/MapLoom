(function() {

  var module = angular.module('loom_map_directive', []);

  module.directive('loomMap',
      function($rootScope, serverService, mapService, geogigService, $translate, dialogService) {
        return {
          template: '<div id="{{mapId}}"></div>',
          scope: {
            mapId: '@',
            layers: '=',
            center: '=',
            zoom: '='
          },
          link: function(scope, element) {
            var map;
            var firstExtent = null;
            var loadFeatures;

            var createMap = function() {
              // NOCOMPILE
              // this example uses terraformer for which we don't have an externs file.
              var geojsonFormat = new ol.format.GeoJSON();

              var vectorSource = new ol.source.Vector({
                loader: function(extent, resolution, projection) {
                  var url = 'http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/' +
                      'Petroleum/KSFields/FeatureServer/0/query?f=json&returnGeometry=' +
                      'true&spatialRel=esriSpatialRelIntersects&geometry=' +
                      encodeURIComponent('{"xmin":' + extent[0] + ',"ymin":' +
                          extent[1] + ',"xmax":' + extent[2] + ',"ymax":' + extent[3] +
                          ',"spatialReference":{"wkid":102100}}') +
                      '&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*' +
                      '&outSR=102100';
                  // use jsonp: false to prevent jQuery from adding the "callback"
                  // parameter to the URL
                  $.ajax({url: url, dataType: 'jsonp'}).done(loadFeatures);
                },
                strategy: ol.loadingstrategy.tile(new ol.tilegrid.createXYZ({
                  maxZoom: 19,
                  tileSize: 512
                }))
              });

              loadFeatures = function(response) {
                var features = [];
                if (!response.error) {
                  for (var i = 0, ii = response.features.length; i < ii; ++i) {
                    var primitive = Terraformer.ArcGIS.parse(response.features[i]);
                    var olFeature = geojsonFormat.readFeature(primitive);
                    features.push(olFeature);
                  }
                }
                if (features.length > 0) {
                  vectorSource.addFeatures(features);
                }
              };

              var styleCache = {
                'ABANDONED': [
                  new ol.style.Style({
                    fill: new ol.style.Fill({
                      color: 'rgba(225, 225, 225, 255)'
                    }),
                    stroke: new ol.style.Stroke({
                      color: 'rgba(0, 0, 0, 255)',
                      width: 0.4
                    })
                  })
                ],
                'GAS': [
                  new ol.style.Style({
                    fill: new ol.style.Fill({
                      color: 'rgba(255, 0, 0, 255)'
                    }),
                    stroke: new ol.style.Stroke({
                      color: 'rgba(110, 110, 110, 255)',
                      width: 0.4
                    })
                  })
                ],
                'OIL': [
                  new ol.style.Style({
                    fill: new ol.style.Fill({
                      color: 'rgba(56, 168, 0, 255)'
                    }),
                    stroke: new ol.style.Stroke({
                      color: 'rgba(110, 110, 110, 255)',
                      width: 0
                    })
                  })
                ],
                'OILGAS': [
                  new ol.style.Style({
                    fill: new ol.style.Fill({
                      color: 'rgba(168, 112, 0, 255)'
                    }),
                    stroke: new ol.style.Stroke({
                      color: 'rgba(110, 110, 110, 255)',
                      width: 0.4
                    })
                  })
                ]
              };

              var vector = new ol.layer.Vector({
                source: vectorSource,
                style: function(feature, resolution) {
                  var classify = feature.get('activeprod');
                  return styleCache[classify];
                }
              });

              map = new ol.Map({
                layers: [
                  new ol.layer.Tile({
                    source: new ol.source.TileJSON({
                      url: 'http://api.tiles.mapbox.com/v4/mapbox.world-light.json?access_token=pk.eyJ1IjoiYmVja2VyciIsImEiOiJjaWtzcHVyeTYwMDA3dWdsenB5aHUxMzl1In0.1FVjOTdhoXGXtnfApX8wVQ',
                      crossOrigin: true
                    })
                  }),
                  vector
                ],
                target: scope.mapId,
                view: new ol.View({
                  center: scope.center,
                  zoom: scope.zoom
                }),
                logo: false
              });

              firstExtent = map.getView().calculateExtent(map.getSize());

              map.on('moveend', function(event) {
                $rootScope.$broadcast('moveendMap', event.frameState.extent);
              });

            };
            $('#add-layer-dialog').on('shown.bs.modal', function() {
              if (map === undefined) {
                createMap();
              }
            });

            $rootScope.$on('resetMap', function(event) {
              var zoom = ol.animation.zoom({resolution: map.getView().getResolution()});
              var pan = ol.animation.pan({source: map.getView().getCenter()});
              map.beforeRender(pan, zoom);
              map.getView().fit(firstExtent, map.getSize());
            });

            scope.$watch('layers', function(layers) {
              if (layers && map) {
                var layerLength = map.getLayers().getLength();
                for (var i = 2; i < layerLength; i++) {
                  map.removeLayer(map.getLayers().getArray()[2]);
                }
                for (var j = 0; j < layers.length; j++) {
                  map.addLayer(layers[j]);
                }
              }
            });
          }
        };
      });
}());
