app.controller('PublishCtrl', ['$scope','$http', function($scope,$http){
	$scope.isCheck = false;
	$scope.getWurl = false;
	$scope.upCheck = true;
	$http({
		url:'api/upFile.php',
		method:'GET'
	}).success(function(data,header,config,status){
		$scope.token = data;
		$scope.tokenInfo = true;
	}).error(function(data,header,config,status){
		//console.log('请求失败');
		$scope.tokenInfo = false;
	});

	$scope.fmodel = {
		key:''
	}
    $scope.button = 
	$scope.upload = function(){
		$scope.upCheck = false;
		$http({
			method:'POST',
			url:'http://up.qiniu.com',
			headers: {'Content-Type': 'multipart/form-data', Authorization: ""},
			data: {
				token:$scope.token,
                key:$scope.fmodel.key,
                file: $scope.file
            },
            transformRequest:function(data, headersGetter) {
                var formData = new FormData();
                angular.forEach(data, function (value, key) {
                    formData.append(key, value);
                });

                var headers = headersGetter();
                delete headers['Content-Type'];

                return formData;
            }
		}).success(function(data){
			var dul = "http://7xky7l.com1.z0.glb.clouddn.com"
			//console.log(data)
			//console.log(dul+"/"+$scope.fmodel.key)
			$scope.wurl = dul+"/"+$scope.fmodel.key
			$scope.getWurl = true;
			$scope.upCheck = true;
		})
	}
}])