// alert('Saludos')

/**
 * Bloques de codigo importantes dentro de la programacion
 * porque, de manera general, nos permiten ejecutar sentencias
 * o bloques de codigo estableciendo para ello condiciones
 */

/**DECLARACION DE SENTENCIA if - else 
 * 
 * Palabra reservada if
 * () condiciones - en forma de expresiones logicas true|false
 * {- llave de apertura }- llave de cierre
 * Todo lo que se encuentre dentro de este bloque delimitado por 
 * llaves, se va a ejecutar cuando la sentencia SI se cumple
 * 
 * Si la sentencia NO se cumple
 * debemos escribir inmediatamente despues de la llave de cierre
 * del bloqeu anterior
 * otra palabra reservada else
 * {- llave de apertura }- llave de cierre
 * 
*/
let prueba = 8; //Dato numerico

if(prueba === 8){
    // Bloque de codigo que se ejecuta si la condicion se cumple
    console.log('Se cumple')
} else{
    // Bloque de codigo que se ejecuta si la condicion NO se cumple
    console.log("No se cumple")
}

// if-else con una expresion logica o condicion con operadores logicos

/**OPERADORES LOGICOS
 * 
 * AND && - ambas sentencias se tienen que cumplir (true)
 * OR || - una de las dos sentencias se tiene que cumplir (true)
 * NOT ! - cambia el valor booleano
 * 
 */

if(prueba > 8 && prueba < 10){
    console.log("Se cumple")
} else{
    console.log("No se cumple")
}

if(prueba > 8 || prueba < 8){
    console.log("Se cumple")
} else{
    console.log("No se cumple")
}

// DECLARAR UNA SENTENCIA if-else anidada

/**
 * Dentro de esta sentencia, vamos a evaluar si se cumple la primer
 * condiciones,
 * Si no, lee la siguiente sentencia y valora si se cumple o no
 * 
 */

if(prueba === 1){
    //Ejecuta esta sentencia
    console.log("Sentencia 1")
} else if(prueba === 2){
    // Ejecuta esta sentencia
    console.log("Sentencia 2")
} else if(prueba === 3){
    //Ejecuta esta sentencia
    console.log("Sentencia 3")
} else{
    //Otra Sentencia
    console.log("Sentencia 4")
}

/**OPERADOR TERNARIO
 * 
 * Es una expresion simplificada de una sentencia if-else
 * 
 * Preferentemente vamos a utilizar el operador ternario
 * para bloques if-else de una sola y unica sentencia
 * 
 * Declaración de operador ternario
 * 
 * palabra reservada let, var, const
 * asignamos un nombre
 * Operador de asignacion =
 * Nuestra condciion va despues del operador de asignacion
 * Colocar el caracter de '?' que indica donde comienza la bifurcacion
 * o que camino tomar dependiendo de si la sentencia se cumple
 * o NO se cumple
 * 
 */

let condicion = prueba === 5 ? "CONDICION SI SE CUMPLE" : "CONDICION NO SE CUMPLE";

/** DECLARACION DE SENTENCIA SWITCH
 * 
 * Es otra sentencia que funciona como una condicion
 * Solamente que la diferencia es que aqui evalua el valor
 * colodado dentro del parentesis para posteriormente
 * evaluar si empata con alguno de los casos que yo defina
 * de mi bloque
 * 
 * Declaracion de una sentencia switch
 * palabra reservada switch
 * (valor) despues de esta palabara
 * seguido de esto colocamos {-apertura }-cierre
 * declarar los casos tantos como sean necesarios
 * con la palabra reservada case "valor"
 * seguido de esto, con : indicamos la secuencia de codigo
 * a ejecutar si empata con el resultado.
 * Despues colocamos la palabra break (controlador de estructura)
 * que evita la ejecucion del resto del codigo
 * 
 * No olvidar que cuando un valor comparado no empate con ninguno
 * de los casos, tenemos que colocar la palabra default.
 * Arroja un mensaje de que no es compatible
 */

switch(prueba ){
    case 1:
        console.log("Caso 1")
        break;
    case 2:
        console.log("Caso 2")
        break;
    case 3:
        console.log("Caso 3")
        break;
    case 4:
        console.log("Caso 4")
        break;
    case 8:
        console.log("Caso 5")
        break;
    default:
        console.log("No empata con ninguno de los casos")
        break;
}

//Declarando una sentencia switch que evalua strings (sentencias de texto)

// let dia = "LUNES";
// dia = dia.toUpperCase();
// dia = dia.toLowerCase();

// switch(dia){
//     case "lunes":
//         console.log("dia 1")
//         break;
//     case "martes":
//         console.log("dia 2")
//         break;
//     case "miercoles":
//         console.log("dia 3")
//         break;
//     case "jueves":
//         console.log("dia 4")
//         break;
//     case "viernes":
//         console.log("dia 5")
//         break;
//     default:
//         console.log("Ese dia no existe")
//         break;
// }

/**CONTROL DE FLUJO DINAMICO
 * 
 * Podemos sacar provecho de las funciones, recordando que
 * son bloques de codigo reutilizables que nos permiten realizar
 * una funcion/operacion particular
 * 
 * 
 */

function diaDinamico(dia){
    dia = dia.toUpperCase();
    dia = dia.toLowerCase();

switch(dia){
    case "lunes":
        console.log("dia 1")
        break;
    case "martes":
        console.log("dia 2")
        break;
    case "miercoles":
        console.log("dia 3")
        break;
    case "jueves":
        console.log("dia 4")
        break;
    case "viernes":
        console.log("dia 5")
        break;
    default:
        console.log("Ese dia no existe")
        break;
    }
}

function comparacionDinamica(n){
    if(n > 10){
        console.log("VERDADERO")
    } else{
        console.log("FALSO")
    }
}
