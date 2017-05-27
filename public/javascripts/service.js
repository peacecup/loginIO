logIO.factory('LogService', ['$rootScope', '$resource', '$location',
    function($rootScope, $resource, $location) {
    	var userResource = $resource('/user/logIn');
        return {
            logIn: function(scope) {
                userResource.save(scope.user, function(data) {
                    if (data.flag != true) {
                        scope.message = data.message;
                        scope.showError = true;
                    } else {
                        $rootScope.loginUser = data.user[0];
                        $location.path('/index');
                        scope.message = "";
                        scope.showError = false;
                    }
                })
            }
        }
    }
])
