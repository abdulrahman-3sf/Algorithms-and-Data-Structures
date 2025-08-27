const HashTable = require('./HashTable.js');

let table = new HashTable();

table.print();
table.set('Sinar', 'ahmed@gmail.com');
table.set('Elvis', 'khaled@gmail.com');
table.set('Tane', 'fasil@gmail.com');
table.print();

console.log('[get] ' + table.get('Sinar'));

table.set('Gerti', 'gerti@gmail.com');
table.set('Arist', 'arist@gmail.com');
table.print();

console.log('[get] ' + table.get('Sinar'));