// #1 Un bucle while que cuente desde 50 hasta 40 (fíjate que en este caso es decreciente)
/*
let i=50,f=40;

while (i>=f) {
    console.log(`El numero actual es ${i}`);
    i--;
}
*/

/* #2 Un bucle while que a partir de una variable “contador” que toma valores de 1 a 5,
muestre por pantalla el doble del valor de “contador”, es decir, que muestre 2, 4, 6, 8, 10.
*/
/*
let contador=1;

while (contador<=5){
    console.log(`El doble del numero ${contador} es: ${contador*2}`);
    contador++;
}
*/

// #3 calcular la suma de los primeros cien números con un ciclo
/*
let i=1,sumatoria=0;

for (i; i <=100; i++) {
    sumatoria=sumatoria+i;
    console.log(`La sumatoria actual es: ${sumatoria}`);
}
*/

/* #4 Construir un programa que calcule y visualice por pantalla el factorial de todos los valores 
numéricos enteros entre 1 y 10.*/

/*
function getFactorial(numero) {
    let fact=1;
    for(numero; numero>=1 ; numero--){
        fact = fact*numero;
    }
    return fact;
}


for (let i=1; i<=10; i++) {
    console.log(`El factorial de ${i} es: ${getFactorial(i)}`);
}
*/

/* #5 Escribir un programa que dado un número entero positivo n, 
calcule la suma de la siguiente serie: 1 + 1/2 + 1/3 + 1/4 + 1/5 + … + 1/n
*/

/*
let numero,validacion=false,resultado,total=0;
    while (validacion==false){
        numero = +prompt ("ingrese numero entero");
        validacion = /^-?\d+$/.test(numero)
        if (validacion) {
            // es número entero
            
            for (let i=1;i<=numero;i++){
                resultado =  1-((i-1)/i);
                total = total+resultado;
            }
            console.log(`La sumatoria es: ${total} \n`);
            } else{ 
            //No es número entero
            console.log(`El valor ingresado : ${numero} no es un entero, ingreselo de nuevo`);
            }
    }
    */

/* #6 Escribir un programa que calcule los primeros ‘n’ números de Fibonacci. Los números de Fibonacci 
    comienzan con 0 y 1, y cada término siguiente es la suma de los anteriores: 0, 1, 2, 3, 5, 8, 13, 21, …
*/
/*
let n,actual;
n = +prompt("Digite un numero n con el fin de obtener la serie Fibonacci");
let text = `0, 1`;
if (n < 1) {
    text = '';
} else if (n === 1) {
    text = '0';
} else if (n === 2) {
    text = '0, 1';
}
let temp0 = 0;
let temp1 = 1;
for(let i = 0; i < n-2; i++) {
    actual = temp0 + temp1;
    text += `, ${actual}`;
  temp0 = temp1;
  temp1 = actual;
}
console.log(text);
*/

// #7 Escribir un programa que, dadas 5 notas finales, determine cuántas notas fueron mayores o iguales a 3.0.
/*
let contador=0,notas_mayores=[];
let notas = []
for (let i = 0; i < 5; i++){
   notas.push(+prompt(`Ingrese la nota final ${i+1}`));
}
function esMayorQue(nota) {
    if(nota>=3){
        return true;
    }else{
        return false;
    }
}
for (let i=0; i<=notas.length-1;i++) {
    if(esMayorQue(notas[i])){
        notas_mayores.push(notas[i]);
        contador = contador+1;
    }
}
console.log(`El total de notas mayores a tres son: ${contador}, las notas son: ${notas_mayores}.`);
*/

/* #8 Desarrollar un programa que calcule el factorial de un número entero positivo. El factorial de 
un número es el producto de todos los números enteros positivos desde 1 hasta el número en cuestión.*/
/*
let n,total,anterior=1,cadena='';

do {
    n = +prompt("Digite el numero entero positivo");
} while (isNaN(n));

for (let i=n;i>=1;i--) {
    total = anterior*i;
    anterior=total;
    cadena += `${i},`;
}

console.log(`El factorial del numero ${n} es: ${cadena} = ${total}`);

*/

//Escribir un programa que imprima todos los números pares entre dos números que se le pida al usuario.
/*
let num1,num2,max,min,cadena=[];

num1 = prompt("Digite un numero");
num2 = prompt("Digite otro numero");

if (num1===num2) {
    console.log("Los numeros son iguales");
} else if(num1>num2){
    max=num1;
    min=num2;
} else{
    min=num1;
    max=num2;
}

for (let i=min;i<=max;i++) {
    if (i%2===0){
        cadena.push(i);
    }
}

console.log(`Los numeros pares entre ${min} y ${max} son: \n ${cadena}`);
*/

/*Realizar un algoritmo para determinar cuánto ahorrará una persona en un año, si al final de cada mes 
deposita cantidades variables de dinero; además, se quiere saber cuánto lleva ahorrado cada mes.*/
/*

let ahorro_anual=[],total_ahorrado=0;

for (let i=0;i<12;i++) {
    ahorro_anual.push(+prompt(`Digite la cantidad ahorrada en el mes ${i+1}`));   
}

for (let index=0; index<=ahorro_anual.length-1;index++){
    total_ahorrado = total_ahorrado + ahorro_anual[index];
    console.log(`En el mes ${index+1} usted ahorró: ${ahorro_anual[index]}`);
}

console.log(`El total de su ahorro en el año fue: ${total_ahorrado}`);

*/