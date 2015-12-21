app.controller('EditarUsuarioController', ['$scope', "$http",'$stateParams','PruebasFactory', function ($scope, $http, $stateParams, PruebasFactory) {

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

   
    
    PruebasFactory.busqueda({
        idUsuario:$stateParams.idUsuario
    })
    .$promise.then(
        function llegaron(respuesta)
        {
            console.log(respuesta);
            $scope.pruebas = respuesta;
        },
        function Errores(error)
        {
            console.log(error);
        });
    
    
    PruebasFactory.save({
        nombre: $scope.nuevaPrueba.nombre
    })
    .$promise.then(
        function llegaron(respuesta)
        {
            console.log(respuesta);
            $scope.pruebas.push(respuesta);
        },
        function Errores(error)
        {
            console.log(error);
        });
    
    
    
}]);











