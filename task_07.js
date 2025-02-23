// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле который с помощью модуля task_01 делает запрос в бд и возвращает модель самого низкого по цене автомобиля в базе данных

// не получается - спроси
// показано на примере db auto и таблицы cars
// для запроса используем пакет sync-mysql

const syncMysql         = require('sync-mysql');
const CONFIG            = require('./config');
const task_01 = require('./task_01');

module.exports = function () {
    const result = task_01('SELECT MIN(cost) as price FROM cars');
    const min = result.map(({price}) => price);
    return min;
}

