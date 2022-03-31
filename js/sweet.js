Swal.fire('Reserva una entrevista con nosotros')




// El mensaje de abajo esta bueno, pero no esta bien, primero deberia ir un msj si falta agregar algo al formulario, ya le puse required a los inputs html, lo que evita que se envie, pero quisiera un mensaje de error si pasa eso, y no pude ver como hacerlo.
// y este mensaje se muestra igual, y otro problema es que cuando presiono enviar y el form esta completo, se refresca la página, y me gustaria que lo haga cuando confirmo en el alert..... ahhh y me tomó los colores de succes y danger de boostrap y son feos jaja

btnEnviar.addEventListener("click", () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: '¿Enviar el formulario?',
        text: "Reservarás una reunión de 15 minutos",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Confirmo!',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Confirmado!',
                'se agendó tu cita.',
                'success'
            )
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'Gracias, continua en nustro sitio',
                'error'
            )
        }
    })
})
