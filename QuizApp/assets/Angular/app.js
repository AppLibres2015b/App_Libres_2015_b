var app = angular.module('AplicacionPruebas', ['ui.router']);


app.config(function ($stateProvider, $urlRouterProvider) {
    
    
//$urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "rutas/Home.html",
            controller: 'HomeController'
        }).state('usuarios', {
            url: "/Usuarios",
            templateUrl: "rutas/Usuarios.html",
            controller: 'UsuariosController'
        }).state('cuenta', {
            url: "/Cuenta",
            templateUrl: "rutas/CuentaUsuario.html",
            controller: 'CuentaController'
        });
    


});

