$(document).ready(function () {
    $('.spinner').fadeOut(1000, function () {
        $('.loading').fadeOut(1000, function () {
            $('html, body').css('overflow', 'auto', function () {
                $('.loading').remove()
            })
        })
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('#about').offset().top - $('.navbar').outerHeight()) {
            $('.navbar').css('backgroundColor', `rgb(0, 0, 0, .8)`)
            $('.up').fadeIn(1000)
        }else {
            $('.navbar').css('backgroundColor', 'transparent')
            $('.up').fadeOut(1000)
        }
    })
})







