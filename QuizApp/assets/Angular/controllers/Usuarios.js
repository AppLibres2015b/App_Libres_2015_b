app.controller('UsuariosController', ['$scope',"$http",function($scope,$http){

    console.log("Entro al controlador Usuarios");
    
//$scope.agregarUsuario = function agregarUsuario(){
//
//}
    
//$scope.nombre = "";
//$scope.apellido= "";
//$scope.password= "";
//$scope.correo= "";
//$scope.fecha= "";

    
$scope.agregarUsuario = agregarUsuario;

    
function agregarUsuario(datos){
    
    console.log("Entro a agregar Usuario",$scope.nombre);
    console.log("Appelido",$scope.apellido);
    console.log("password",$scope.password);
    console.log("correo",$scope.correo);
    console.log("fecha",$scope.fecha);
    

}
    
//$http({
//  method: 'POST',
//  url: 'localhost:1337/Usuarios'
//}).then(function RespuestaSiIngresoElUsuario(respuesta) {
//
//    
//  }, function RespuestaSiNoIngresoElUsuario(respuesta) {
//
//    
//  });

}]);