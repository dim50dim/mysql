// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле который с помощью модуля task_01 делает запрос в бд и возвращает массив вида:

//  [ 'fusion','cx-5', 'land cruiser prado','land cruiser prado','mohave','octavia','megane','a3','a6', 'q7','x6']

// т.е. осуществляет выборку с помощью task_01, а потом методами массива дорабатывает результат.
// показано на примере db auto и таблицы cars
// для запроса используем пакет sync-mysql

const syncMysql         = require('sync-mysql');
const CONFIG            = require('./config');
const task_01 = require('./task_01');

module.exports = function () {
}