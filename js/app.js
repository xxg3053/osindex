'use strict';

var app = angular.module("osindex", ['ngRoute','ngCookies']);
/**
 * [description] 路由配置
 * @Author   KENFO
 * @Email    xxg3053@qq.com
 * @DateTime 2015-08-08T11:46:16+0800
 * @Describe
 * @return   {[type]}      [description]
 */
app.config(['$routeProvider',function($routeProvider) {

	$routeProvider
		.when('/',{
			templateUrl: 'html/index.html',
            controller: 'BoxCtrl',
            css:'css/page/index.css'
		})
		.when('/self',{
			templateUrl: 'html/self.html',
			css:'css/page/self.css'
		})
        .when('/addmodule',{
            templateUrl: 'html/addmodule.html',
            css:'css/page/addmodule.css'
        })
        .when('/publish',{
            templateUrl: 'html/publish.html',
            controller:'PublishCtrl',
            css:'css/page/publish.css'
        })
        .when('/sys',{
            templateUrl: 'html/sys.html',
            controller:'SysCtrl',
            css:'css/page/sys.css'
        })
        .when('/fonts',{
            templateUrl: 'html/fonts.html',
            css:'css/page/fonts.css'
        })
		.otherwise({
			redirectTo: '/'
		})
}]);


