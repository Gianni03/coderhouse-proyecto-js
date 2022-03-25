//  variables para la creacion de usuario/paciente
const nombrePaciente = document.getElementById("nombre")
const edadPaciente = document.getElementById("edad")
const diagnostico = document.getElementById("diagnostico")
const residencia = document.getElementById("ciudad")
let paciente = []

// varibles de contactos
const nombrePadre = document.getElementById("nombre-padre")
const numeroCelular = document.getElementById("celular")
const email = document.getElementById("email")
const fechaEntrevista = document.getElementById("fecha-entrevista")

let contacto = []

const btnEnviar = document.getElementById("btnEnviar")







// quiero pedir solamente la fecha de nacimiento y calcularla con la fecha actual... pero todavia no se como se hece... lo que tengo pensado hasta ahora esta acá abajo

// function calcularEdadPaciente(Date, fechaNacimiento){
//     return Date - fechaNacimiento
// }
// const edadPaciente = calcularEdadPaciente()