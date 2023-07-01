
$(document).ready(() => {
    $('.highlight_list').empty()
    $('.new_product_list').empty()
    $.getJSON('js/data.json', function (data) {
        console.log(data.products);
        data.products.map((item) => {
            console.log(item.price);
            let product = '<li class="splide__slide"><div class="products">'
            product += '<a href="#"><div class="products_image">'
            product += "<img src="+ item.image +'></div></a>'
            product += '<div class="products_info">'
            product += '<a href="#" class="product_name">'+ item.name +'</a>'
            product += '<span href="#" class="product_price">'+ item.price +'</span>'
            product += '</div></div></li>';
            $('.highlight_list').append(product)
            $('.new_product_list').append(product)
        })
    })
})

new Splide( '.splide' ).mount();
new Splide( '.highlight' ).mount();
var splideNews = new Splide('.splide', {
    type: 'loop',
    perPage: 4,
    perMove: 1,
}).mount();

var splide = new Splide('.highlight', {
    type: 'loop',
    perPage: 4,
    perMove: 1
})

splide.mount();

// var splideDetail = new Splide('.splideDetail', {
//     type: 'loop',
//     direction: 'ttb',
//     perPage: 1,
//     perMove: 1
// })
//
// splideDetail.mount();
// Execute on load

// Bind event listener
window.addEventListener('resize', function() {
    // Lấy kích thước mới của màn hình
    var screenWidth = window.innerWidth;

    // Cập nhật giá trị perPage dựa trên kích thước mới của màn hình
    if (screenWidth >= 850) {
        splideNews.options.perPage = 4;
        splide.options.perPage = 4;
    } else if (screenWidth >= 768) {
        splideNews.options.perPage = 3;
        splide.options.perPage = 3;
    } else {
        splideNews.options.perPage = 1;
        splide.options.perPage = 1;
    }

    // Cập nhật lại Splide slider
    splideNews.refresh();
    splide.refresh();
});

