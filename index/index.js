window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
})
