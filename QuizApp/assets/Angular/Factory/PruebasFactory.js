app.factory('PruebasFactory', ['$resource', function ($resource) {

    
    
    var pruebas = $resource(
        'http://localhost:1337/pruebas/:id', {
            id: '@id'
        }, {
            actualizar: {
                method: 'PUT'
            },
            busqueda:{
                method:'get',
                url:'http://localhost:1337/pruebas?idUsuario=:idUsuario',
                isArray :true,
                params:{
                    idUsuario: '@idUsuario'
                }
            }
        });

    return pruebas;


                   
                               
                               
}]);