 app.controller('AccordionCtrl', function ($scope, $localStorage, myFactory) { //контроллер для аккордеона
	
	if (localStorage.getItem('books')){
			$scope.products = JSON.parse(localStorage.getItem('books'));
	
	//	angular.copy(JSON.parse(localStorage.getItem('books')), $scope.products);
	
	} else {
		$scope.products = myFactory.Books1;
	}
	$scope.products = myFactory.Books1;
 });