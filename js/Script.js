let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onscroll = () => {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
};
// Email Js
function validate() {
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.massage');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emtyerror();
        } else {
            sendEmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};

emailjs.send('service_w03cw2g', 'template_xy1vyn5', templateParams)
    .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
        console.log('FAILED...', error);
    });


function emtyerror() {
    swal({
        title: "Oh No...",
        text: "Fields cannot be empty",
        icon: "error",
    });
}

function success() {
    swal({
        title: "Email sent successfully",
        text: "We try to reply in 24 hours",
        icon: "success",
    });
}
// header
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0);
});
//scroll
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY >= 400);
});
