document.querySelectorAll('#menu-links a.link-suave').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const destino = this.href;

        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = destino;
        }, 200);
    });
});