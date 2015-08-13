app.controller('IndexCtrl', ['$scope','$cookieStore', function($scope,$cookieStore){
	$scope.isPackUp = $cookieStore.get('isPackUp')==undefined?true:$cookieStore.get('isPackUp');
	$scope.packup = function(){
		$scope.isPackUp = $scope.isPackUp ? false : true;
		$cookieStore.put("isPackUp",$scope.isPackUp);
	}
	$scope.siteEn="os";
	$scope.siteZn = "空间";
	$scope.navs = [{
		url:'.self',
		name:'个人介绍',
		icon:'icon icon-user'
	},{
		url:'.addmodule',
		name:'添加入口',
		icon:'icon icon-pencil'
	},{
		url:'.publish',
		name:'发布数据',
		icon:'icon icon-cloud'
	},{
		url:'.sys',
		name:'系统设置',
		icon:'icon icon-cart'
	},{
		url:'.fonts',
		name:'查看图标',
		icon:'icon icon-cart'
	}];

	$scope.items = [{
		name:'框架',
		content:[{
			title:'xx',
			src:'http://7xky7l.com1.z0.glb.clouddn.com/Desert.jpg',
			url:'#'
		},{
			title:'xx',
			src:'http://7xky7l.com1.z0.glb.clouddn.com/Desert.jpg',
			url:'#'
		},{
			title:'xx',
			src:'http://7xky7l.com1.z0.glb.clouddn.com/Desert.jpg',
			url:'#'
		}]
	},{
		name:'扩展知识',
		content:[{
			title:'xx',
			src:'http://7xky7l.com1.z0.glb.clouddn.com/Desert.jpg',
			url:'#'
		},{
			title:'xx',
			src:'http://7xky7l.com1.z0.glb.clouddn.com/Desert.jpg',
			url:'#'
		},{
			title:'xx',
			src:'http://7xky7l.com1.z0.glb.clouddn.com/Desert.jpg',
			url:'#'
		}]
	}]
}])