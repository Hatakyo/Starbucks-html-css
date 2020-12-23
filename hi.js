function imgSlider(anything) {
    document.querySelector('.starbusks').src = anything
}
var check = document.querySelector('#check');
var box = document.querySelector('.box');
var ball = document.querySelector('.ball');
var Section = document.querySelector('section');

check.addEventListener('click', function() {
    if (this.checked === true) {
        Section.classList.add('moon-js')
        Section.classList.remove('sun-js')
        ball.setAttribute('style', "background-color: white;")
        ball.style.transform = "translatex(100%)"

    }

    if (this.checked === false) {
        Section.classList.add('sun-js')
        Section.classList.remove('moon-js')
        ball.setAttribute('style', "background-color: grey;")
        ball.style.transform = "translatex(0%) "


    }
})