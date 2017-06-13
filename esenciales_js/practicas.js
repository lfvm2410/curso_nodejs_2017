// Programación OO (POO)
// ES6 class

var Objeto = function(){

  //Funcion normal en js

};

//prototype sirve para definir funciones al objeto que se necesite
Objeto.prototype.Saludar = function (msg, callback) {

  console.log("Saludo: ", msg);
  //Callbacks: Permiten ejecutar codigo despues de una acción
  //           Se ejecutan al final e incluso se pasan por parametro
  //           Para saber que es una función lo que se pasa por parametro, se debe de validar
  if (typeof callback == 'function') {
      callback();
  }else {
      console.log("callback no es una función");
  }

};

//Instancia de objeto declarado en .js
var o = new Objeto();
o.Saludar("Hola Mundo", function(){
    console.log("callback ejecutado");
});

//Nota: JS es orientado a prototipos, por lo que se puede extender las funciones de un objeto aun estando instanciado
Objeto.prototype.Despedirse = function(){ console.log("Adiós"); };
o.Despedirse();
