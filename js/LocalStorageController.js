    app2.controller('Ctrl', function( $scope, $localStorage, $rootScope, myFactory){ //���������� ��� ���������� �� LOCAL STORAGE. ������ LOAD � CLEAR
        $scope.product = new Array();
		for (var i=0; i < Books.length; i++){
			$scope.product.push(Books[i].reviews);
        }       
			
        $scope.load = function (product){
		
		alert(JSON.parse(localStorage.getItem('books')));
			
			
			angular.copy(JSON.parse(localStorage.getItem('books')), myFactory.Books1);
		};
		
		$scope.clear = function (product){
			localStorage.clear();
		};
    });