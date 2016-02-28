angular.module('mooApp.work', ['ngRoute'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/work', {
                templateUrl: 'work/work.html',
                controller: 'workCtrl'
            });
        }
    ])
    .controller('workCtrl', ['$scope', '$rootScope', '$location',
        function($scope, $rootScope, $location) {
            $scope.goodbye = function(number) {

                $scope.speech = number;
            }
        }
    ]);
