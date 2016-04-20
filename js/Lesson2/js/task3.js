
var userLogin = prompt('Укажите Ваш логин');

if (userLogin == 'admin') {
    var userPassword = prompt('Введите Ваш пароль');
    if (userPassword == 'passw0rd') {
        alert('Welcome home!');
    } else if (userPassword == null) {
        alert('Canseled');
    } else {
        alert('Wrong password');
    }
} else if (userLogin == null) {
    alert('Canseled');
} else {
    alert('Access denied');
}

