app.factory('PruebasFactory', ['$resource', function ($resource) {

    var pruebas = $resource(
        'http://localhost:1337/pruebas/:id', {
            id: '@id'
        }, {
            actualizar: {
                method: 'PUT'
            }
        });

    return pruebas;


}]);