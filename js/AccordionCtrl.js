 app.controller('AccordionCtrl', function ($scope, $localStorage, myFactory) { //���������� ��� ����������
	if (localStorage.getItem('books')){
			$scope.products = JSON.parse(localStorage.getItem('books'));
	} else {
		$scope.products = myFactory.Books1;
	}
	$scope.products = myFactory.Books1;
 });