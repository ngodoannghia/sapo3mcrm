
(function () {
    var app = angular.module('myapp', []);
    app.controller('myctr', ['$scope', '$interval', '$http', function ($scope, $interval, $http) {

        var index = 0;
        $scope.images = ['/img/sendo1.png', '/img/sendo2.png', '/img/sendo3.png', '/img/sendo4.png'];
        $scope.products = [];
        $scope.product4 = [];
        $scope.productsalse = [];
        index += 1;
        $scope.sum = 7200000;
        $scope.slideshow = function () {
            if (index < $scope.images.length - 1) {
                $scope.image = $scope.images[index % $scope.images.length];
                $scope.product = $scope.products[index % $scope.products.length];
                index = index + 1;
            }
            else {
                $scope.image = $scope.images[index];
                $scope.product = $scope.products[index];
                index = 0;
            }
        };
        $scope.getListProduct = function () {
            $http.get("http://localhost:8080/products/list").then(function success(response) {
                $scope.products = response.data;

                for (var i = 0; i < 4; i++) {
                    $scope.product4[i] = $scope.products[i];
                }
                for (var j = 0; j < 6; i++) {
                    $scope.productsalse[j] = $scope.products[j];
                }
            }, function error() {
                console.log("errors");
            });
        };

        $scope.gio = 0;
        $scope.phut = 0;
        $scope.giay = 0;
        $scope.caculate = function () {
            var tem = 0;
            if ($scope.sum > 0) {
                $scope.gio = Math.floor($scope.sum / (60 * 60 * 1000));
                tem = $scope.sum % (60 * 60 * 1000);
                $scope.phut = Math.floor(tem / (60 * 1000));
                $scope.giay = tem % (60 * 1000) / 1000;
                $scope.sum = $scope.sum - 1000;
            }
            else {
                $scope.sum = 7200000;
            }
        };

 /*       $scope.salseleft = function () {
            var j, i;
            if (indexsalse === 7) {
                j = 0;
                $scope.productsalse = [];
                for (i = 0; i < indexsalse - 1; i++) {
                    $scope.productsalse[j] = $scope.products[i];
                    j++;
                }
                indexsalse = 6;
            }
            else if (indexsalse === 8) {
                j = 0;
                $scope.productsalse = [];
                for (i = 0; i < indexsalse - 2; i++) {
                    $scope.productsalse[j] = $scope.products[i];
                    j++;
                }
                indexsalse = 6;
            }
            else if (indexsalse === 9) {
                j = 0;
                $scope.productsalse = [];
                for (i = 0; i < indexsalse - 3; i++) {
                    $scope.productsalse[j] = $scope.products[i];
                    j++;
                }
                indexsalse = 6;
            }
            else if (indexsalse > 9) {
                j = 0;
                $scope.productsalse = [];
                for (i = indexsalse - 9; i < indexsalse - 3; i++) {
                    $scope.productsalse[j] = $scope.products[i];
                    j++;
                }
                indexsalse = indexsalse - 3;
            }
        };

        $scope.initsalse = function () {
            if (indexsalse < $scope.products.length) {
                for (var i = 0; i < indexsalse; i++) {
                    $scope.productsalse[i] = $scope.products[i];
                }

            }
            else {
                $scope.productsalse = $scope.products;
            }

        };

        $scope.salseright = function () {
            var j, i;
            if (indexsalse < $scope.products.length) {
                if (indexsalse + 1 === $scope.products.length) {
                    $scope.productsalse = [];
                    j = 0;
                    for (i = indexsalse - 5; i < $scope.products.length; i++) {
                        $scope.productsalse[j] = $scope.products[i];
                        j++;
                    }
                    indexsalse = $scope.products.length;
                }
                else if (indexsalse + 2 === $scope.products.length) {

                    $scope.productsalse = [];
                    j = 0;
                    for (i = indexsalse - 4; i < $scope.products.length; i++) {
                        $scope.productsalse[j] = $scope.products[i];
                        j++;
                    }
                    indexsalse = $scope.products.length;
                }
                else if (indexsalse + 3 === $scope.products.length) {
                    $scope.productsalse = [];
                    j = 0;
                    for (i = indexsalse - 3; i < $scope.products.length; i++) {
                        $scope.productsalse[j] = $scope.products[i];
                        j++;
                    }
                    indexsalse = $scope.products.length;
                }
                else {
                    $scope.productsalse = [];
                    j = 0;
                    for (i = indexsalse - 2; i < $scope.products.length; i++) {
                        $scope.productsalse[j] = $scope.products[i];
                        j++;
                    }
                    indexsalse = indexsalse+3;
                }
            }
            else {
                console.log("Fail!!!!!");
            }
        };
        


   
        $scope.saleslide = function () {
            var j = 0;
            $scope.productsalse = [];
            if (indexsalse < $scope.products.length) {
                indexsalse = indexsalse + 1;

                for (var i = indexsalse; i < indexsalse + 6; i++) {

                    $scope.productsalse[j] = $scope.products[indexsalse % $scope.products.length];
                    j++;
                }

            }
        };
        */


        $interval(function () { $scope.caculate(); }, 1000);
        $scope.getListProduct();
        $interval(function () { $scope.slideshow(); }, 5000);
   

    }]);


})();
