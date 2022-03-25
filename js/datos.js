const datosPaciente = ()=>{
    localStorage.setItem("nombrePaciente", nombrePaciente.value)
    localStorage.setItem("edadPaciente", edadPaciente.value)
    localStorage.setItem("diagnosticoPaciente", diagnostico.value)
    localStorage.setItem("residenciaPaciente", residencia.value)
}

const datosContacto = ()=> {
    localStorage.setItem("nombrePadre", nombrePadre.value)
    localStorage.setItem("numeroCelular", numeroCelular.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("fechaEntrevista", fechaEntrevista.value)
}

// opcion 1 con lo que necesito más urgente
btnEnviar.addEventListener("click", datosContacto)
btnEnviar.addEventListener("click", datosPaciente)
// y yo me la complico... un solo formulario con dos secciones que se guarden por separado con un solo botón

// opción 2 con el formulario completo
// let formulario = datosPaciente() + datosContacto()
// btnEnviar.addEventListener("click", formulario)

// opcion 3 si funciona la opcion 2 como separo la info
// 


// recuper los datos... no entendi bien si lo necesito o no, pero creo que si porque no funciono sin esto
const datosCompletadosPaciente = ()=> {
    nombrePaciente.value = localStorage.getItem("nombrePaciente")
    edadPaciente.value = localStorage.getItem("edadPaciente")
    diagnostico.value = localStorage.getItem("diagnostico")
    residencia.value = localStorage.getItem("residencia")

}
const datosCompletadoscontacto = ()=> {
    nombrePadre.value = localStorage.getItem("nombrePadre")
    numeroCelular.value = localStorage.getItem("numeroCelular")
    email.value = localStorage.getItem("email")
    fechaEntrevista.value = localStorage.getItem("fechaEntrevista")
}
datosCompletadosPaciente()
datosCompletadoscontacto()

// const datosCompletados = ()=> {
//     nombrePaciente.value = localStorage.getItem("nombrePaciente")
//     edadPaciente.value = localStorage.getItem("edadPaciente")
//     diagnostico.value = localStorage.getItem("diagnostico")
//     residencia.value = localStorage.getItem("residencia")
//     nombrePadre.value = localStorage.getItem("nombrePadre")
//     numeroCelular.value = localStorage.getItem("numeroCelular")
//     email.value = localStorage.getItem("email")
//     fechaEntrevista.value = localStorage.getItem("fechaEntrevista")
// }
// datosCompletados()

