// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который принимает аргумент - sql запрос и возвращает результат в виде массива. Например, если модуль принимает запрос вида
// 'select model from cars' то возвращается массив объектов вида:
// [
//     { model: 'fusion' },
//     { model: 'cx-5' },
//     { model: 'land cruiser prado' },
//     { model: 'land cruiser prado' },
//     { model: 'mohave' },
//     { model: 'octavia' },
//     { model: 'megane' },
//     { model: 'a3' },
//     { model: 'a6' },
//     { model: 'q7' },
//     { model: 'x6' }
// ]
// показано на примере db auto и таблицы cars
// для запроса используем пакет sync-mysql

const syncMysql         = require('sync-mysql');
const CONFIG            = require('./config');

module.exports = function (query) {

}