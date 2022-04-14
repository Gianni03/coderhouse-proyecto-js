Swal.fire('Reserva una entrevista con nosotros')


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
