// Animierte Anzeige der Bestätigung
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const subject = form.subject.value;
    const message = form.message.value;
    const today = new Date().toLocaleDateString('de-DE');

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if(response.ok){
            form.reset();
            document.getElementById('successName').textContent = name;
            document.getElementById('successSubject').textContent = subject;
            document.getElementById('successMessage').textContent = message;
            document.getElementById('successDate').textContent = today;

            const successMsg = document.getElementById('formSuccess');
            successMsg.classList.add('show');
            successMsg.style.display = 'block';
            setTimeout(() => {
                successMsg.classList.remove('show');
                setTimeout(() => { successMsg.style.display = 'none'; }, 500);
            }, 7000);
        } else {
            alert('Ups! Beim Senden der Nachricht ist ein Fehler aufgetreten.');
        }
    }).catch(() => {
        alert('Ups! Beim Senden der Nachricht ist ein Fehler aufgetreten.');
    });
});
