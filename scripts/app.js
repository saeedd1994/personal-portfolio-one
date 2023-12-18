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
            section.classList.add('show-animate')
        } else {
            section.classList.remove('show-animate')
        }


    })

    // sticky nav header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when scrolling or click on links(scroll)
    hamIcon.classList.remove('bx-x');
    navbar.classList.remove('active')

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
}

//form contact and mail sender
const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const emailSubject = document.getElementById('subject');
const message = document.getElementById('message');

function sendEmail() {
    const bodyMessage = `Full Name : ${fullName.value} <br> Phone Number: ${phone.value} <br>
 Email: ${email.value} <br> Message: ${message.value} `;


    Email.send({
        SecureToken : "ae21e2a9-20e3-43b8-8a13-8793c323b95f",
        To: 'saeed.da1994@gmail.com',
        From: "saeed.da1994@gmail.com",
        Subject: emailSubject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message === 'OK') {
                Swal.fire({
                    title: "Success",
                    text: "Your Message Send Successfully!",
                    icon: "success"
                });
            }

        }
    );
}


function CheckInputs() {

    const items = document.querySelectorAll('.input-item');
    for (const item of items) {
        if (item.value === '') {
            item.classList.add('error');
            item.parentElement.classList.add('error');
        }

        // handing email validation
        if (items[1].value !== '') {
            checkEmail();
        }
        items[1].addEventListener('keyup', () => {
            checkEmail();
        })


        item.addEventListener('keyup', () => {
            if (item.value !== '') {
                item.classList.remove('error');
                item.parentElement.classList.remove('error');
            } else {
                item.classList.add('error');
                item.parentElement.classList.add('error');
            }
        })
    }

}

function checkEmail() {
    const emailRegex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,6})$/;
    if (!email.value.match(emailRegex)) {
        email.classList.add('error');
        email.parentElement.classList.add('error');

        const emailTextError = document.querySelector('.error-text.email')
        if (email.value !== '') {
            emailTextError.innerHTML = 'Enter a Valid Email Address';
        } else {
            emailTextError.innerHTML = "Email Address can't be blank";
        }

    } else {
        email.classList.remove('error');
        email.parentElement.classList.remove('error');
    }

}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    CheckInputs();

    if (!fullName.classList.contains('error') && !email.classList.contains('error') && !phone.classList.contains('error') && !emailSubject.classList.contains('error') && !message.classList.contains('error'))
    {
        sendEmail();

        form.reset();
        return false;
    }
})