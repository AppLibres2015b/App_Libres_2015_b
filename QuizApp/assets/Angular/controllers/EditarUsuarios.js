app.controller('EditarUsuarioController', ['$scope', "$http",'$stateParams', function ($scope, $http, $stateParams) {

    console.log("Entro a Editar usuario");
    console.log($stateParams.idUsuario);

    $http({
        method: 'GET',
        url: 'http://localhost:1337/Usuarios/'+$stateParams.idUsuario
    }).then(
        function exitoEnElGuardado(respuesta) {
            console.log(respuesta);
            $scope.usuario = respuesta.data;
        },
        function falloEnElGuardado(error) {
            console.log(error);
        });
    
    
    
}]);