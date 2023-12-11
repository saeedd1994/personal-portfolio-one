//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            //     active navbar
            navLinks.forEach(link =>{
                link.classList.remove('active');
                document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
            })
        }

    })

    // sticky nav header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}