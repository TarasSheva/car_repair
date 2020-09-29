// паралакс эффект
$('.parallax-home').parallax({
    imageSrc: 'img/fon_11.png',
    speed: 0
});

$('.parallax-services').parallax({
    imageSrc: 'img/fon_2.png'
});

$('.parallax_about').parallax({
    imageSrc: 'img/fon_3.png'
});

$('.parallax-fon_about').parallax({
    imageSrc: 'img/fon_4.jpg'
});

$('.parallax_contacts').parallax({
    imageSrc: 'img/fon_3.png'
});
// переход по ссылкам на странице
$(document).ready(function () {
    $('.header_inner').on('click', 'a', function (event) {
        event.preventDefault();

        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


//слайдер

// $('.work_img').click(function () {
//     let col = Number($(this).attr('id'));
//     $('.slider,.slider_fon').show();
//
// });
// $('.slider_fon').click(function () {
//     $('.slider,.slider_fon').hide();
// });
// document.getElementsByClassName("work_img").onclick = function () {
//     let col = this.getAttribute("id");
//     console.log(col)
// };
let windowSlider = document.querySelector(".slider");

let windowFon = document.querySelector(".slider_fon");

let slider = document.querySelectorAll(".work_img");

[].forEach.call(slider, function (el) {
    el.onclick = function () {
        windowSlider.style.display = 'block';
        windowFon.style.display = 'block';
        let col = this.getAttribute("id");

        let slideIndex = Number(col.slice(-1));
        showSlides(slideIndex);

        function showSlides(slideIndex) {
            let slides = document.getElementsByClassName("my_slides");

            let prev = document.querySelector('.prev');
            prev.onclick = function () {
                slideIndex--;
                if (slideIndex < 1) {
                    slideIndex = slides.length;
                }
                showSlides(slideIndex);

            };
            let next = document.querySelector('.next');
            next.onclick = function () {
                slideIndex++;
                if (slideIndex > slides.length) {
                    slideIndex = 1;
                }
                showSlides(slideIndex);
            };

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "block";
        }
    };

});

let close = document.querySelector(".close");

close.onclick = function () {
    windowSlider.style.display = 'none';
    windowFon.style.display = 'none';
};

windowFon.onclick = function () {
    windowSlider.style.display = 'none';
    windowFon.style.display = 'none';
};