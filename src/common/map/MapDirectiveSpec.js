describe('MapDirective', function() {
  var element, scope, compiledElement, mapService;
  beforeEach(module('MapLoom'));
  beforeEach(module('loom_map_directive'));

  beforeEach(inject(function($rootScope, $compile, $templateCache, _mapService_) {
    scope = $rootScope.$new();
    element = angular.element('<div loom-map></div>');
    compiledElement = $compile(element)(scope);
    scope.$digest();
    mapService = _mapService_;
  }));
});
