document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.menu-btn').addEventListener('click', function () {
        document.querySelector('.menu-items').classList.toggle('show');
    });

    document.querySelectorAll('.menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });

            document.querySelector('.menu-items').classList.remove('show');
        });
    });
});