  app.controller("VoteController", ['$scope', function($scope){ //���������� ��� ���������� �������� ������� ��� ������ �����
     $scope.like = function (product){
         product.vote ++;
    };
    $scope.dislike = function (product){
        product.vote --;
    };
 }]);