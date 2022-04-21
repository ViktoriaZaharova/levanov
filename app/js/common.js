$('.btn-burger').on('click', function () {
   $('.mobile-menu').toggleClass('open');
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').removeClass('open');
});

$('[name="phone"]').mask("+7 (999) 999-99-99");


//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        $('.mobile-menu').removeClass('open');
        return false;
    });
});
//плавный скролл end

new WOW().init();
