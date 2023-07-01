var splide = new Splide('#splide', {
    direction: 'ttb', // Thiết lập hướng dọc ('top to bottom')
    height: '100%', // Thiết lập chiều cao của slider
    perPage: 3, // Thiết lập giá trị perPage là 1
    type: 'loop',
    perMove: 1
}).mount();