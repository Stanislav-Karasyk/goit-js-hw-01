'use strict';

let message;

const ADMIN_PASSWORD = 'jqueryismyjam';

const pasword = prompt('Введите пароль');

if (pasword === null) {
    message = 'Отменено пользователем!';
} else if (pasword === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);