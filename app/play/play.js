angular.module('mooApp.play', ['ngRoute'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/play', {
                templateUrl: 'play/play.html',
                controller: 'playCtrl'
            });
        }
    ])
    .controller('playCtrl', ['$scope', '$rootScope', '$location',
        function($scope, $rootScope, $location) {
            $scope.hello = function() {
                $scope.speech = "woof";
            }
        }
    ]);

