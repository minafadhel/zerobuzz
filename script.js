document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('showing');
    });
});
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>