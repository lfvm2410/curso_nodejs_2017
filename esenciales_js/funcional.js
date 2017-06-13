//Programación funcional

// 1.Inmutabilidad: Se trabaja con valores, los valores no cambian
//                  Alterar un objeto no es funcional, para eso es mejor crear uno nuevo a partir del original
var a = [1,2,3,4];
a[0] = 10; // no es funcional

var b = a.map((valor) => valor*2); //Si es funcional
console.log(a,b);

// 2. Manejo de funciones como parametros, funciones que regresan funciones
// - reutilización de código
var suma = (a,b) => a+b;
//funcion dentro de una funcion que retorna la suma de los parametros
var suma2 = (a) => (b) => a+b;
var sumar10 = suma2(10);
var sumar11 = suma2(11);

var f = (callback) => {
      //ejecución de una secuencia
      if (typeof callback == 'function') {
          return callback();
      }
};
//se pasan (2) para funcion padre y (3) para funcion hija que da el retorno en suma2
//con sumar 10 y 11 se establece una nueva funcion que permite reutilizar codigo y establecer los valores es 2 partes
console.log(suma(2, 2), suma2(2)(3), sumar10(7), sumar11(7));

// 3. en P.F siempre se debe de regresar un resultado unico
// raiz cuadrada de 4 = 2, = -2 // no es funcional porque hay 2 posibles retornos
