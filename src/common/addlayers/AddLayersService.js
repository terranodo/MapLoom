(function() {
  var module = angular.module('loom_addLayers_service', []);

  module.provider('addlayersService', function() {

    this.$get = function($rootScope, $http, $q, $location, $translate, dialogService, configService) {
      service_ = this;
      rootScope_ = $rootScope;
      dialogService_ = dialogService;
      translate_ = $translate;
      http_ = $http;
      location_ = $location;
      configService_ = configService;
      q_ = $q;

      return this;
    };
  });
}());
