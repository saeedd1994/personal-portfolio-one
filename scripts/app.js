// toggle icon navbar - ham menu
let hamIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

hamIcon.onclick = () => {
    hamIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')

}


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
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
            })
        }

    })

    // sticky nav header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when scrolling or click on links(scroll)
    hamIcon.classList.remove('bx-x');
    navbar.classList.remove('active')
}