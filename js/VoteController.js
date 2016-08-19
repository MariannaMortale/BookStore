  app.controller("VoteController", ['$scope', function($scope){ //контроллер для вычисления рейтинга голосов для каждой книги
     $scope.like = function (product){
         product.vote ++;
    };
    $scope.dislike = function (product){
        product.vote --;
    };
 }]);