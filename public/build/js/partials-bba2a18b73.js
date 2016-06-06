(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/main/main.page.html',
    '<br/><h1><b>My Name Is Mooola</b></h1><br/>\n' +
    '*******************************************');
}]);
})();
