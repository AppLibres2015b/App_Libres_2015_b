app.controller('EditarPruebaController', ['$scope', '$stateParams', 'PruebasFactory', function ($scope, $stateParams, PruebasFactory) {

    PruebasFactory.get({
            id: $stateParams.idPrueba
        })
        .$promise.then(
            function llamoPruebas(respuesta) {
                console.log(respuesta);
                $scope.prueba = respuesta;
            },
            function llamoPruebasFallo(error) {
                console.log(error);
            });

}]);