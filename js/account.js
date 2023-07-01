$('.register').submit(function (event) {
    event.preventDefault();
    const formData = {};
    $(this).find('input').each(function() {
        formData[$(this).attr('name')] = $(this).val();
    });
    localStorage.setItem('account', JSON.stringify(formData));
})

const user = JSON.parse(localStorage.getItem('account'));


$('.signin').submit(function (event) {
    
    event.preventDefault();

    const formData = {};
    $(this).find('input').each(function() {
        formData[$(this).attr('name')] = $(this).val();
    });
    console.log(formData);
    if (formData.email === user.email && formData.password === user.password) {
        $('.register-link').css('display', 'none');
        $('.logout').css('display', 'block');
        $('.logout').text(user.last_name);
        localStorage.setItem('loginStatus', true);
        window.location.href = '/mindx-project/index.html';
    }
})

function logout() {
    localStorage.removeItem('account');
    localStorage.removeItem('loginStatus');
    window.location.href = '/mindx-project/index.html';
}

$('.subscription').submit(function (event) {
    event.preventDefault();
    const formData = {};
    $(this).find('input').each(function() {
        formData[$(this).attr('name')] = $(this).val();
    });
    console.log(formData);
    alert('Bạn đã đăng ký thành công với ' + formData.email)
})

$(document).ready(() => {
    const login = localStorage.getItem('loginStatus');
    if (login && user) {
        $('.register-link').css('display', 'none');
        $('.logout').css('display', 'block');
        $('.logout').text(user.last_name);
    }
})