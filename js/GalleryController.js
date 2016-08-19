  app.controller('GalleryController', ['$scope', function($scope){ //контроллер для показа галлереи картинок каждой книги
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
  }]);