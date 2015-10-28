//var number = 1;
//Comentario de Una linea
/*
while(number<=5){
    console.log("Numero "+number);
    number++;
}
*/


//for(var numero=1; numero<=5;numero++){
//    if(numero%2==0){
//        
//        if(numero==2||numero==4){
//            console.log("Yei es 2 o 4");
//        }
//        
//        console.log("El numero "+numero+" es par");
//        
//        
//    }
//    else{
//        console.log("El numero "+numero+" es impar");
//    }
//    
//    
//    
//}
//
//
var sumarCubosFn = function sumaCubos(a, b) {
    return (a * a * a) + (b * b * b);
};

//
//var suma = sumaCubos(4,2);
//
//console.log(suma);

var amigos = ["Zeus", "Thor", "Isis", "Gaia", "Jesus", 26, true, false, undefined, sumarCubosFn];
console.log(amigos);
console.log(amigos[9](1, 2));



var datos = {
    nombre: "Adrian",
    apellido: "Eguez",
    desplegarNombre: function () {
        console.log(datos.nombre + " " + this.apellido);
        return datos.nombre + " " + this.apellido;
    }
}


function getValue() {
    var x = document.getElementById("Nombre").innerHTML= datos.desplegarNombre();

}



//console.log(datos.nombre);
//console.log(datos.apellido);
//console.log(datos.desplegarNombre());
//
//
//
//console.log(typeof amigos);
//
//console.log(amigos);
//
//console.log(typeof datos);
//
//
//console.log(datos);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//