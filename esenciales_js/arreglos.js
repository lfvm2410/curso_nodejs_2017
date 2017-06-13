var arr = [6 , -23, 12, 45, -9, 0, 1, 4, 99];

//for tradicional
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//forEach normal
arr.forEach(function(valor, indice){
    console.log(valor, indice);
});

// forEach con arrow function
arr.forEach((valor,indice) => console.log(valor, indice));

//filter: arreglo nuevo a partir de filtro establecido
var resultado = arr.filter((valor) => valor > 5);
console.log(resultado);
console.log(arr); // el arreglo original no se ve alterado

//map: arreglo nuevo con datos alterados del original mediante una funcion
//     manipulación de datos
var resultado2 = arr.map((valor) => valor*valor);
console.log(resultado2);

// map encadenado con filter
var resultado3 = arr.map((valor) => valor*valor).filter((valor) => valor>2000);
console.log(resultado3);

//reduce: obtiene un resultado unico partiendo del procesamiento de un arreglo
//parametros: funcion, valorInicial o previo
var resultado4 = arr.reduce((acumulador, valorActual) => acumulador + valorActual, 100);
console.log(resultado4);

//reduce con json
//Se obtiene el atributo del json usando la variable inicial del acumulador
//Se returna el resultado en formato json
var resultado5 = arr.reduce((acumulador, valorActual) => {
   acumulador.valor = acumulador.valor + valorActual;
   return acumulador;
}, {
    valor: 100
});
console.log(resultado5);
