
var aplicacion = angular.module('angular', ['ngAnimate','ui.router']);

//    var numero = 1;
//    int numero = 1;
//    var numero = 1.124;
//    double numero = 1.124;
//    var numero = "Uno";
//    string numero = "Uno";


//UI ROUTER 

aplicacion.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
//  $urlRouterProvider.otherwise("/state1");
    

  $stateProvider
    .state('ruta1', {
      url: "/estamosRuta1",
      templateUrl: "Rutas/Ruta1.html"
    })
    .state('ruta2', {
      url: "/estamosRuta2",
      templateUrl: "Rutas/Ruta2.html"
     });
    
});