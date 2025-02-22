// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле который с помощью модуля task_01 делает запрос в бд и возвращает объект, где ключ - цвет автомобиля, а значение - количество автомобилей в базе с таким цветом.

// постарайтесь уникальность выборки реализовать через запрос
// не получается - спроси
// показано на примере db auto и таблицы cars
// для запроса используем пакет sync-mysql

const syncMysql         = require('sync-mysql');
const CONFIG            = require('./config');
const task_01 = require('./task_01');

module.exports = function () {
    let result = task_01('SELECT color, COUNT(*) as count FROM cars GROUP BY color');

    let sum = result.reduce((accum,item) =>{
        accum[item.color] = item.count;
        return accum;
    },{});
    return sum;
}