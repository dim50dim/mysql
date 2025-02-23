// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле который с помощью модуля task_01 делает запрос в бд и возвращает массив автомобилей цена которых выше или равен 10000.

// постарайтесь выборку одной записи реализовать через запрос
// не получается - спроси
// показано на примере db auto и таблицы cars
// для запроса используем пакет sync-mysql

const syncMysql         = require('sync-mysql');
const CONFIG            = require('./config');
const task_01 = require('./task_01');

module.exports = function () {
    const result = task_01('SELECT make,model,cost FROM cars WHERE cost >= 10000');
    const sum = result.map(({make,model,cost}) => [make,model,cost]);
    console.log(sum.length);
    
    return sum;
}

