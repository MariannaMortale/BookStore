var SaveToLocalStorage = function ($scope, $modal, myFactory) { //поп-ап окно подтверждени€ сохранени€ книги на LOCAL STORAGE.  нопка SAVE
	$scope.open = function (){
		$modal.open({
			templateUrl: 'popUpWindowSaveToLocalStorage.html',
			backdrop: true,
			windowClass: 'modal',
			controller: function ($scope, $modalInstance, myFactory, $localStorage, $rootScope) {
				$scope.submit = function () {
					localStorage.setItem('books', JSON.stringify(myFactory.Books1));
					alert(myFactory.Books1.length);
					$modalInstance.dismiss('cancel');
                }
					$scope.cancel = function () {
						$modalInstance.dismiss('cancel');
					};	
			},
		});
	};
}; 
