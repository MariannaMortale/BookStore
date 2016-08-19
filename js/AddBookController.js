var AddBookCtrl = function ($scope, $modal, myFactory) { //поп-ап окно на добавление новой книги. Кнопка ADD BOOK
	$scope.open = function (object){
	 $scope.Book = {};//object;
		$modal.open({
			templateUrl: 'popUpWindowAddBook.html',
			backdrop: true,
			windowClass: 'modal',
			controller: function ($scope, $modalInstance, book, myFactory) {
				$scope.Book = book;
				$scope.submit = function () {
				alert(myFactory.Books1.length);
					var book = {};
					book.name=$scope.Book.name;
					book.description=$scope.Book.description;
					book.year=$scope.Book.year;
					book.writer=$scope.Book.writer;
					book.reviews=[];
					book.images=[];
					book.image1=$scope.Book.image1;
					book.image2=$scope.Book.image2;
					book.image3=$scope.Book.image3;
					book.images.push(book.image1);
					book.images.push(book.image2);
					book.images.push(book.image3);
						if ($scope.Book.image1 != ""){
							book.images=[];
						}
					myFactory.Books1.push(book);

                    $modalInstance.dismiss('cancel');
                }
					$scope.cancel = function () {
						$scope.Book = {};
						$modalInstance.dismiss('cancel');
					};
			},
				resolve: {
					book: function () {
						return $scope.Book;
					}
				}
		});
	};
}; 