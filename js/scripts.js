(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_bK4IJwyAKPRRJw6pPnEwz');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_a5xbc34', 'template_i7t1pp1', this)
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
