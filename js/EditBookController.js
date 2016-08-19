var EditBookCtrl = function ($scope, $modal, myFactory) { //поп-ап окно для редактирования книги. Кнопка EDIT BOOK
	$scope.open = function (index){
	 	$modal.open({
		templateUrl: 'popUpWindowEditBook.html',
			backdrop: true,
			windowClass: 'modal',
			controller: function ($scope, $modalInstance, book, myFactory) {
				var deleteDiv = document.getElementsByClassName("imageDiv");
				$scope.book = myFactory.Books1[index];
				$scope.book.image3 = "";	
				$scope.oldBook = {};
				angular.copy(myFactory.Books1[index], $scope.oldBook);
				$scope.submit = function () {
					var book = myFactory.Books1[index];
					if (!angular.isUndefined($scope.book.image3) && $scope.book.image3 != ""){
						book.images.push($scope.book.image3);
					} 
					$modalInstance.close();
                };
					$scope.cancel = function () {
						angular.copy($scope.oldBook, $scope.book);
						$modalInstance.dismiss('cancel');
					};
					
					$scope.deleteImg = function(i){
						$scope.book.images.splice(i, 1);
					};
			},
				resolve: {
					book: function () {
						return $scope.book;
					}
				}
		});
	};
}; 