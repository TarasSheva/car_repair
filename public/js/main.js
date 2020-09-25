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
    imageSrc: 'img/fon_4.png'
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
