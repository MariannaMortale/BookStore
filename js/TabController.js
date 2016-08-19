 app.controller('TabController', ['$scope', function($scope){ //контроллер для переключения табов в описании каждой книги
    this.tab = 1;
    this.setTab = function(newValue){
	this.tab = newValue;
		if (this.tab == 4){
			$scope.product.vote = showRaiting($scope.product);
		};
    };
    this.isSet = function(tabName){
      return this.tab === tabName;
    };
 
   function showRaiting(product){
        var cc = 0;
            for(var i=0; i < product.reviews.length; i++){
            cc += product.reviews[i].stars ;
        };
            return cc/ product.reviews.length;
        };
  }]);