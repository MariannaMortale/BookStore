  app.controller('GalleryController', ['$scope', function($scope){ //���������� ��� ������ �������� �������� ������ �����
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
  }]);