const prompt = require('prompt-sync')();
let menu
do {
    console.log(` Menu de opciones \n 1) Ver saldo\n 2) Enviar dinero\n 3) Recargar\n 4) Salir`)
    menu = prompt("Ingresa un numero: ")
    if(menu === "1"){
        console.log("Resultado: Tienes el saldo de todo peru")
    }else if(menu ==="2"){
        console.log("Resultado: Enviaste dinero a tu gato")
    }else if(menu==="3"){
        console.log("Resultado: Recargaste en el Oxxo de tu vecindario")
    }else if(menu>4){
        console.log("Ingresa un numero valido >:c")
    }
}while(menu !=="4")