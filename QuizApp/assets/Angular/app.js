var app = angular.module('AplicacionPruebas', ['ui.router', 'ngResource']);


app.config(function ($stateProvider, $urlRouterProvider) {


    //$urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "rutas/Home.html",
            controller: 'HomeController'
        })
        .state('usuarios', {
            url: "/Usuarios",
            templateUrl: "rutas/Usuarios.html",
            controller: 'UsuariosController'
        })
        .state('editarusuario', {
            url: "/editarusuario/:idUsuario",
            templateUrl: "rutas/EditarUsuarios.html",
            controller: 'EditarUsuarioController'
        })
        .state('editarprueba', {
            url: "/editarprueba/:idPrueba",
            templateUrl: "rutas/EditarPrueba.html",
            controller: 'EditarPruebaController'
        })
        .state('cuenta', {
            url: "/Cuenta",
            templateUrl: "rutas/CuentaUsuario.html",
            controller: 'CuentaController'
        });



});