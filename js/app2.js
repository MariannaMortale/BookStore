var app = angular.module('bookStore', ['ui.bootstrap']);
app.controller('StoreController', function($rootScope){
		$rootScope.Books = Books;
		
	});

var app2 = angular.module('app2', ['ngStorage']);
var appAll = angular.module("appModule", ["bookStore", "app2"]);


app.factory('myFactory', function () {
		var Books1 = Books;
		return {
			Books1 
		}
	});
 
 
app.directive("book", function() { //����������� Book1.html
		return {
			restrict: "E",
			templateUrl: "Book1.html",
		};
	}); 
 
app.directive("productGallery", function() { //����������� Product Gallery.html
		return {
			restrict: "E",
			templateUrl: "product-gallery.html",
		};
	});
 
app.directive("productRaiting", function() { //����������� Product Raiting.html
		return {
			restrict: "E",
			templateUrl: "product-raiting.html",
		};
	});
  
app.directive("productReviews", function() { //����������� Product Reviews.html
		return {
			restrict: 'E',
			templateUrl: "product-reviews.html",
		};
	});
 
app.directive("productVote", function() { //����������� Product Vote.html
		return {
			restrict: 'E',
			templateUrl: "product-vote.html"
		};
	});
  