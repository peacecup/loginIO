logIO.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index', {
        url: '/index',
        views: {
            '': {
                templateUrl: 'tpls/index.html'
            },
            'toolbar@index': {
                templateUrl: 'tpls/toolbar.html'
            },
            'main@index': {
                templateUrl: 'tpls/home.html'
            }
        }

    }).state('index.logIn', {
        url: '/index/logIn',
        views: {
            'main@index': {
                templateUrl: 'tpls/logIn.html',
                controller: 'logInCtrl'
            }
        }
    }).state('index.register', {
        url: '/index/register',
        views: {
            'main@index': {
                templateUrl: 'tpls/register.html'
            }
        }
    }).state('index.logOut',{
    	url:'/index/logOut',
    	views:{
    		'main@index': {
                templateUrl: 'tpls/logIn.html',
                controller:'logInCtrl'
            }
    	}
    })
})
