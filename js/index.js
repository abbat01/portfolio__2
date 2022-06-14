const nav = document.querySelector('#nav')
const navButton = document.querySelector('#nav__button')
const navImg = document.querySelector('#nav__button__img')

navButton.addEventListener('click', function() {
    if (nav.classList.toggle('open')) {
        navImg.src = "./assets/svg/NAV CLOSE.svg"
    } else {
        navImg.src = "./assets/svg/NAV.svg"
    }
})

AOS.init();
