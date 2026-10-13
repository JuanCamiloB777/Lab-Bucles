const prompt = require('prompt-sync')();
 let pinUsuario = prompt("Ingresa el pin: ")
while(pinUsuario !=="1234"){
    pinUsuario = prompt("El pin es incorrecto, escribelo de nuevo: ")
}