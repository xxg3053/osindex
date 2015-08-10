app.controller('SysCtrl', ['$scope','$http', function($scope,$http){
	$http({
		url:'api/sysInfo.php',
		method:'GET'
	}).success(function(data){
		$scope.info =data;
	}).error(function(data,header,config,status){
		console.log(data);
	});
}])