
var number = 1;
//Comentario de Una linea
/*
while(number<=5){
    console.log("Numero "+number);
    number++;
}
*/


for(var numero=1; numero<=5;numero++){
    if(numero%2==0){
        
        if(numero==2||numero==4){
            console.log("Yei es 2 o 4");
        }
        
        console.log("El numero "+numero+" es par");
        
        
    }
    else{
        console.log("El numero "+numero+" es impar");
    }
    
    
    
}


function sumaCubos (a,b){
    return (a*a*a)+(b*b*b);
}

var suma = sumaCubos(4,2);

console.log(suma);


























