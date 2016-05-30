(function () {
  var module = angular.module('loom_feature_blame_service', []);
  var rootScope_ = null;
  var geogigService_ = null;
  var q_ = null;
  module.provider('featureBlameService', function () {
    this.$get = [
      '$rootScope',
      '$q',
      'geogigService',
      function ($rootScope, $q, geogigService) {
        rootScope_ = $rootScope;
        geogigService_ = geogigService;
        q_ = $q;
        return this;
      }
    ];
    this.performBlame = function (repoId, options) {
      var deferredResponse = q_.defer();
      geogigService_.command(repoId, 'blame', options).then(function (response) {
        if (goog.isDefAndNotNull(response.Blame) && goog.isDefAndNotNull(response.Blame.Attribute)) {
          rootScope_.$broadcast('blame-performed');
          deferredResponse.resolve(response.Blame.Attribute);
        } else {
          deferredResponse.reject();
        }
      }, function (reject) {
        deferredResponse.reject(reject);
      });
      return deferredResponse.promise;
    };
  });
}());