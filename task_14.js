// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле который с помощью модуля task_01 делает запрос в бд и возвращает массив моделей автомобилей 2015 и 2017 года выпуска


// постарайтесь выборку одной записи реализовать через запрос
// не получается - спроси
// показано на примере db auto и таблицы cars
// для запроса используем пакет sync-mysql

const syncMysql         = require('sync-mysql');
const CONFIG            = require('./config');
const task_01 = require('./task_01');

module.exports = function () {
    const result = task_01('SELECT model,make,year FROM cars WHERE year >= 2015 AND year <= 2017 ORDER BY year ASC');
    const sum = result.map(({model,make,year}) => [model,make,year]);
    return sum;
}

