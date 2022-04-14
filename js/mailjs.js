window.onload = function() {
    document.getElementById('formulario-mail').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'formulario-mail', this)
            .then(function() {
                console.log('Gracias!');
            }, function(error) {
                console.log('Error...', error);
            });
    });
}