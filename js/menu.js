$(document).ready(() => {
    $('.drawer').drawer();
    $('.header_li').mouseover(function () {
        $(this).find('.sub_menu').css('display', 'block')
    })
    $('.header_li').mouseout(function () {
        $(this).find('.sub_menu').css('display', 'none')
    })
})