
const user = "comprador";
const password_comprador = "passwordabcd";


function solicitarDatos (){

let usuario = prompt("Ingrese su Usuario");
let pass = prompt ("Ingrese su Contraseña");

if (validarDatos (usuario,password)){

iniciarCompra()


}else{

alert("Ingresaste Usuario y/o contraseña invalida");

}


}


function validarDatos(usuario,password){

if (usuario === user && pass === password_comprador){

    return true ;

}else {

    return false ;
}

}

function iniciarCompra(){

    let lista = "";

    let finalizar_compra = false ;


    while (!finalizar_compra){

let cod = prompt("Ingrese codigo de combo") ;

let producto = obtenerCombo(cod) ;

if (producto){

    console.log("combo agregado de manera exitosa :"+producto);
    lista += "\n"+producto;

}else{

    if(cod === null){

        finalizar_compra = true ;

    }else {

        alert("Ingrese un codigo de combo existente");

    }

    alert("Ingrese un codigo de combo valido");
}


    }

}

if (lista != ""){
    let resp = confirm ("Desea concretar la compra de :"+lista);

    if (resp){

        alert("Gracias por confiar en nosotros");
    }
}



function obtenerCombo(cod){

    let producto ; 
}

switch(cod){

case "1":
           combo = "Tv por cable + Pack Futbol";
           break;

 case "2":
           combo = "Tv por cable + Internet 50 megas";
           break;

case "3":
           combo = "Tv por cable + Internet 100 megas";
           break;

case "4":
           combo = "Tv por cable + Internet Fibra Optica";
           break;

case "5":
           combo = "Tv por cable + Canales de Peliculas Full Hd";
           break;


default:
           producto = false;


}

return combo ;