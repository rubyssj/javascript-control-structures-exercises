// Ejercicio 1: Condicionales if-else
// Verifica si el número es par o impar.
function verificarParidad(numero) {
    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}
verificarParidad(22);
// Ejercicio 2: Condicionales anidados
// Determina si una persona es menor de edad, adulto o adulto mayor.
function clasificarEdad(edad) {
    if (edad < 18) {
        console.log("Menor de edad");
    } else if (edad <= 65) {
        console.log("Adulto");
    } else {
        console.log("Adulto mayor");
    }
}
clasificarEdad(10);
// Ejercicio 3: Bucles while
// Imprime todos los números desde el número hasta 0.
function cuentaRegresiva(numero) {
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}
cuentaRegresiva(5);
// Ejercicio 4: Bucles do-while
// Imprime "Estoy aprendiendo JavaScript" 5 veces.
function repetirMensaje() {
    let contador = 0;
    do {
        console.log("Estoy aprendiendo JavaScript");
        contador++;
    } while (contador < 5);
}
repetirMensaje();
// Ejercicio 5: Bucle for
// Imprime todos los números pares entre 0 y el número recibido.
function imprimirPares(numero) {
    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
imprimirPares(10);
// Ejercicio 6: Uso de break
// Detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    for (let i = 1; i <= 10; i++) {
        if (i === 6) {
            break;
        }
        console.log(i);
    }
}
detenerEnSeis();
// Ejercicio 7: Uso de continue
// Salta el número 5 y continúa el bucle.
function saltarCinco() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue;
        }
        console.log(i);
    }
}
saltarCinco();
// Ejercicio 8: Switch básico
// Devuelve el día de la semana según el número del 1 al 7.
function obtenerDiaSemana(dia) {
    switch (dia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("Número no válido");
            break;
    }
}
obtenerDiaSemana(3);
// Ejercicio 9: Switch con múltiples casos
// Verifica si una letra es vocal.
function esVocal(letra) {
    switch (letra.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log("Es vocal");
            break;
        default:
            console.log("No es vocal");
            break;
    }
}
esVocal('e');
// Ejercicio 10: Condicionales complejos con operadores lógicos
// Verifica si los tres números son positivos, al menos uno es negativo o todos son negativos.
function evaluarNumeros(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        console.log("Todos son positivos");
    } else if (a < 0 || b < 0 || c < 0) {
        console.log("Al menos uno es negativo");
    } else {
        
        console.log("Todos son negativos");
    }
}
evaluarNumeros(2,-4,10);
// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};