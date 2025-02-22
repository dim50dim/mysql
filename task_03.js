// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле который с помощью модуля task_01 делает запрос в бд и возвращает массив вида:

//  [ 'ford', 'mazda', 'toyota', 'kia', 'skoda', 'renault', 'audi', 'bmw']

// т.е. осуществляет выборку с помощью task_01 только уникальных make, а потом методами массива дорабатывает результат.
// постарайтесь уникальность выборки реализовать через запрос
// показано на примере db auto и таблицы cars
// для запроса используем пакет sync-mysql

const syncMysql         = require('sync-mysql');
const CONFIG            = require('./config');
const task_01 = require('./task_01');

module.exports = function () {
}