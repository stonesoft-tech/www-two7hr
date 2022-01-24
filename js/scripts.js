(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_xBDYw9IGx8K5dfznAqHYW');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_trviw5p', 'template_zllh8uq', this)
            .then(function() {
                console.log('SUCCESS!');
                document.getElementById("contact-form").reset();
                $('#thanks').modal('show')
                setTimeout(() => {  $('#thanks').modal('hide'); }, 1000);

            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
