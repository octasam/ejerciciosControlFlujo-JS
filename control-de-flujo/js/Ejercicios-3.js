// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function mayorEdad(edad){
    if(edad >= 18){
        console.log("La persona tiene edad sufiente para votar")
    }else{
        console.log("La persona NO tiene edad para votar")
    }
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

function promedioAlumno(c1,c2,c3,c4){
    let promAlum = (c1+c2+c3+c4)/4;

    if(promAlum >= 7){
        console.log("APROBADO")
    } else {
        console.log("REPROBADO")
    }
}

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es primo
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function saberSiEsPrimo(n3){
    let div3 = n3%1;
    let divn3 = n3%n3;
    console.log(div3, divn3);

    if(div3 == 0 && divn3 == 0){
        console.log(`El numero ${n3} es un numero primo`)
    }else{
        console.log(`El numero ${n3} NO es numero primo`)
    }
}

/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Colocar calificaciones de manera que vayan del 0 al 10
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function numeroDivisible(n4){
    let div7 = n4%7;
    let div8 = n4%8;

    if(div7 == 0 && div8 == 0){
        console.log(`(VERDADERO) El numero ${n4} es divisible entre 7 y 8`)
    } else {
        console.log(`(FALSO) El numero ${n4} NO es divisible entre 7 y 8`)
    }
}

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

function numeroDivisible2(n5){
    let div4 = n5%4;
    let div9 = n5%9;

    if(div4 == 0 || div9 == 0){
        console.log(`(VERDADERO, es divisible entre 4 o 9.)`)
        if(div4 == 0){
            console.log(`Especificamente, el numero ${n5} es divisible entre 4`)
        } if(div9 == 0){
            console.log(`Especificamente, el numero ${n5} es divisible entre 9`)
        } 
    } else {
        console.log(`(FALSO) El numero ${n5} NO es divisible entre 4 o 9`)
    }
}

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

function calcu6(menu, a6, b6){
    switch(menu){
        case 1:
            console.log(`SUMA`)
            let sum6 = a6 + b6;
            console.log(`El resultado de ${a6} + ${b6} = ${sum6}`)
            break;
        case 2:
            console.log(`RESTA`)
            let rest6 = a6 - b6;
            console.log(`El resultado de ${a6} - ${b6} = ${rest6}`)
            break;
        case 3:
            console.log(`MULTIPLICACION`)
            let mult6 = a6 * b6;
            console.log(`El resultado de ${a6} x ${b6} = ${mult6}`)
            break;
        case 4:
            console.log(`DIVISION`)
            if(b6 == 0){
                console.log(`ERROR, no se puede divivir entre cero`)
            }else{
                let division6 = a6/b6;
                console.log(`El resultado de ${a6} / ${b6} = ${division6}`)
            }
            break;
        default:
            console.log(`ERROR, la opción ${menu} es incorrecta. Ingrese 1. suma 2. resta 3. multiplicacion 4. division`)
            break;
        }
}

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

function categoPelis(cat7){
    cat7 = cat7.toUpperCase();
    cat7 = cat7.toLowerCase();

    switch(cat7){
        case "accion":
            console.log(`Recomendación de pelicula para la categoria accion: JOHN WICK`)
            break;
        case "drama":
            console.log(`Recomendación de pelicula para la categoria drama: ATRAPAME SI PUEDES`)
            break;
        case "comedia":
            console.log(`Recomendación de pelicula para la categoria comedia: QUE PASO AYER?`)
            break;
        case "romance":
            console.log(`Recomendación de pelicula para la categoria romance: MENTE INDOMABLE`)
            break;
        case "suspenso":
            console.log(`Recomendación de pelicula para la categoria suspenso: PARASITO`)
            break;
        case "terror":
            console.log(`Recomendacion de pelicula para la categoria terror: CHUCKY`)
            break;
        default:
            console.log(`ERROR. Categoria invalida. Ingrese una de las siguientes categorias: accion, drama, comedia, romance, suspenso o terror.`)
            break;
    }
}

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 */

function cajero8(op8){
    switch(op8){
        case 1:
            console.log("Accion a realizar: RETIRAR DINERO")
            break;
        case 2:
            console.log("Accion a realizar: TRANSFERENCIA")
            break;
        case 3:
            console.log("Accion a realizar: DEPOSITO")
            break;
        case 4:
            console.log("Accion a realizar: PAGO DE SERVICIOS")
            break;
        default:
            console.log("ERROR, opcion invalida. Ingrese: 1. Retirar dinero 2. Transferencia 3. Deposito 4. Pago de servicios")
            break;
    }
}

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 */

function conDiv(op9,cant9){
    switch(op9){
        case 1:
            let dolares = cant9 * 0.059
            console.log(`$${cant9} pesos mexicanos son ${dolares} dolares estadounidenses`)
            break;
        case 2:
            let euros = cant9 * 0.055
            console.log(`$${cant9} pesos mexicanos son ${euros} euros`)                
            break;
        case 3:
            let yenes = cant9 * 8.66 
            console.log(`$${cant9} pesos mexicanos son ${yenes} yenes japonenes`)                
            break;
        case 4:
            let libra = cant9 * 0.047
            console.log(`$${cant9} pesos mexicanos son ${libra} libras esterlinas`)                
            break;
        case 5:
            let franco = cant9 * 0.053
            console.log(`$${cant9} pesos mexicanos son ${franco} francos suizos`)                
            break;
        default:
            console.log(`ERROR, la opcion ${op9} es invalida. Ingrese: 1. A dolares estodunidenses 2. A euros 3. A yenes japonenes 4. A libra esterlina 5. A franco suizo`)
            break;
    }
}

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */

function progDesc(price, cod10){
    cod10 = cod10.toUpperCase();
    cod10 = cod10.toLowerCase();

    if(cod10 === "descuento10"){
        console.log("(VALIDO) APLICAR DESCUENTO DE 10%")
        let desc = price * 0.90
        console.log(`Precio inicial: $${price} - Precio con 10% de descuento: $${desc}`)

    }else{
        console.log(`ERROR, el codigo de descuento '${cod10}' es invalido. Ingrese un codigo de descuento valido.`)
    }
}
