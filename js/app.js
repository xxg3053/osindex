'use strict';

var app = angular.module("osindex", ['ui.router','ngCookies']);
/**
 * [description] 路由配置
 * @Author   KENFO
 * @Email    xxg3053@qq.com
 * @DateTime 2015-08-08T11:46:16+0800
 * @Describe
 * @return   {[type]}      [description]
 */
app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/index");

	$stateProvider
        .state('login',{
            url:'/login',
            templateUrl: 'html/login.html',
            controller: 'LoginCtrl',
            css:'css/page/index.css'
        })
		.state('index',{
            url:'/index',
			templateUrl: 'html/index.html',
            controller: 'IndexCtrl',
            css:'css/page/index.css'
		})
		.state('index.self',{
            url:'/self',
			templateUrl: 'html/self.html',
			css:'css/page/self.css'
		})
        .state('index.addmodule',{
            url:'/addmodule',
            templateUrl: 'html/addmodule.html',
            css:'css/page/addmodule.css'
        })
        .state('index.publish',{
            url:'/publish',
            templateUrl: 'html/publish.html',
            controller:'PublishCtrl',
            css:'css/page/publish.css'
        })
        .state('index.sys',{
            url:'/sys',
            templateUrl: 'html/sys.html',
            controller:'SysCtrl',
            css:'css/page/sys.css'
        })
        .state('index.fonts',{
            url:'/fonts',
            templateUrl: 'html/fonts.html',
            css:'css/page/fonts.css'
        })
		
}]);