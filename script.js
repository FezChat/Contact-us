document.getElementById('whatsappSubmit').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!email || !message || !name) {
        alert('Please fill in all fields.');
        return;
    }

    const combinedMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/255752593977?text=${combinedMessage}`;

    window.open(whatsappUrl, '_blank');
});
