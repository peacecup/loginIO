logIO.controller('logInCtrl', ['$scope', '$location','$rootScope', 'LogService',
    function($scope, $location, $rootScope,LogService) {
        $rootScope.loginUser = {};
        $scope.user = {};
        $scope.message = ""
        $scope.showError = false;
        $scope.logIn = function() {
            LogService.logIn($scope);
        }
    }
]).controller('registerCtrl', ['$resource', '$scope', '$location',
    function($resource, $scope, $location) {

    }
]).controller('logOutCtrl', ['$scope', '$location', 'LogService',
    function($scope, $location, LogService) {
        $scope.user = {};
        $scope.message = ""
        $scope.showError = false;
        $rootScope.loginUser = {};
        $scope.logIn = function() {
            LogService.logIn($scope);
        }
    }
])
