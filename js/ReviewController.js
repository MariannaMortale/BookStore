  app.controller("ReviewController", ['$scope', function($scope){ //контроллер для комментариев к каждой книге
    this.review = {};
    this.addReview = function(product){   
        if(this.review.body == null){
            alert("Please, write a comment!");
            return false;
        }
    this.review.date = dateToday(this.review.date);
    product.reviews.push(this.review);
        if (this.review.author == null){
            this.review.author = "Anonymous";
        }
        if(this.review.stars == null){
            this.review.stars = 1;
        }
      this.review = {};
      };
  }]);
  
    function dateToday(value){ //функция для просчёта даты для комментариев
      var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd
        }
        if(mm<10){
            mm='0'+mm
        } 
        if (value == null  || value == "Short Date"){
            var today = dd+'/'+mm+'/'+yyyy;
        } else if (value == "Full Date"){
            today = fullDate();
        }
    return today; 
   };
   function fullDate(){
        return moment(new Date()).format("dddd, MMMM Do YYYY, h:mm:ss a");
   };