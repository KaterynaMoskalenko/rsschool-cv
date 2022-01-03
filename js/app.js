'use.strict';

/*====header burger===*/
$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger, .nav').toggleClass('act');

    });
});

/*====scroll menu====*/
const sections = document.querySelectorAll('a[href*="#"]');

for (let section of sections) {
    section.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = section.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth"
        })
        document.querySelector('.nav').classList.remove('act');
    })
}

