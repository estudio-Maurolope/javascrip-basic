//Conjunción (&&)(AND): Evalúa si ambas condiciones son verdaderas.
const esEstudiante = true;
const tieneBuenPromedio = true;

if (esEstudiante && tieneBuenPromedio) {
 console.log("El estudiante es elegible para la beca");
} else {
 console.log("El estudiante no cumple con los requisitos para la beca");
}

//Disyunción (||)(OR): Evalúa si al menos una de las condiciones es verdadera.
const estaLloviendo = false;
const tengoParaguas = false;
if (estaLloviendo || tengoParaguas) {
 console.log("No me mojaré");
} else {
 console.log("Necesito un paraguas");
}

//Negación (!)(NOT): Invierte el valor de verdad de una condición.
const esDeNoche = true;
if (!esDeNoche) {
 console.log("Es de día");
} else {
 console.log("Es de noche");
}

//Validar el acceso a un sistema:
const userName = "admin";
const password = "12345";
if (userName === "admin" && password === "12346") {
 console.log("Acceso concedido");
} else {
 console.log("Acceso denegado. Verifique sus credenciales");
}

//Determinar si un número es divisible por 3 y por
const numero = 15;
if (numero % 3 === 0 && numero % 5 === 0) {
 console.log("El número es divisible por 3 y por 5");
} else {
 console.log("El número no es divisible por 3 y por 5");
}

//Verificar si un estudiante tiene aprobado un curso y si ha asistido al 80% de las clases
const notaExamen = 80;
const asistenciaClases = 0.8;
const notaMinimaAprobacion = 70;
const asistenciaMinimaRequerida = 0.75;
if (notaExamen >= notaMinimaAprobacion && asistenciaClases >= asistenciaMinimaRequerida){
 console.log("El estudiante ha aprobado el curso");
} else {
 console.log("El estudiante no ha aprobado el curso");
 }


