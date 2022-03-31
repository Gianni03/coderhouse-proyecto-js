// JSON del paciente
const pacienteJSON = ()=> {
    const datosPacienteJSON = {nombrePaciente: "", edadPaciente: 0, diagnostico: "", residencia: ""}
    datosPacienteJSON.nombrePaciente = nombrePaciente.value
    datosPacienteJSON.edadPaciente = edadPaciente.value
    datosPacienteJSON.diagnostico = diagnostico.value
    datosPacienteJSON.residencia = residencia.value
    localStorage.setItem("datosPacienteJSON", JSON.stringify(datosDelFormPaciente))
}
btnEnviar.addEventListener("click", pacienteJSON)

const recuperoDatosPacienteJSON = ()=> {
    datosDelFormPaciente = JSON.parse(localStorage.getItem("datosDelFormPaciente"))
    nombrePaciente.value = datosDelFormPaciente.nombrePaciente
    edadPaciente.value = datosDelFormPaciente.edadPaciente
    diagnostico.value = datosDelFormPaciente.diagnostico
    residencia.value = datosDelFormPaciente.residencia
}

recuperoDatosPacienteJSON()

// JSON decontacto
const contactoJSON = ()=> {
    const datosContactoJSON = {nombrePadre: "", numeroCelular: 0, email: "", residencia: ""}
    datosContactoJSON.nombrePadre = nombrePadre.value
    datosContactoJSON.numeroCelular = numeroCelular.value
    datosContactoJSON.email = email.value
    datosContactoJSON.fechaEntrevista = fechaEntrevista.value
    localStorage.setItem("datosContactoJSON", JSON.stringify(datosDelFormContacto))
}


btnEnviar.addEventListener("click", contactoJSON)

const recuperoDatosContactoJSON = ()=> {
    datosDelFormContacto = JSON.parse(localStorage.getItem("datosDelFormContacto"))
    nombrePadre.value = datosDelFormContacto.nombrePadre
    numeroCelular.value = datosDelFormContacto.numeroCelular
    email.value = datosDelFormContacto.email
    fechaEntrevista.value = datosDelFormContacto.fechaEntrevista
}

recuperoDatosContactoJSON()