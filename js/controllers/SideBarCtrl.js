
app.controller('SideBarCtrl', ['$scope','$cookieStore', function($scope,$cookieStore){
	$scope.isPackUp = $cookieStore.get('isPackUp')=='undefined'?true:$cookieStore.get('isPackUp');
	$scope.packup = function(){
		$scope.isPackUp = $scope.isPackUp ? false : true;
		$cookieStore.put("isPackUp",$scope.isPackUp);
	}
	$scope.siteEn="os";
	$scope.siteZn = "空间";
	$scope.navs = [{
		url:'#/self',
		name:'个人介绍',
		icon:'icon icon-user'
	},{
		url:'#/addmodule',
		name:'添加入口',
		icon:'icon icon-pencil'
	},{
		url:'#/publish',
		name:'发布数据',
		icon:'icon icon-cloud'
	},{
		url:'#/fonts',
		name:'查看图标',
		icon:'icon icon-cart'
	}];

}])