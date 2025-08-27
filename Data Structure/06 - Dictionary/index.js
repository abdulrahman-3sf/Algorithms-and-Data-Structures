const Dictionary = require('./Dictionary.js');

let dictionary = new Dictionary();

dictionary.print();

dictionary.set('Ahmed', 'Ahemd@gmail.com');
dictionary.set('Ali', 'Ali@gmail.com');
dictionary.print();

dictionary.set('Khaled', 'Khaled@gmail.com');
dictionary.set('Mohammed', 'Mohammed@gmail.com');
dictionary.set('Fasil', 'Fasil@gmail.com');

dictionary.set('Ibra', 'Ibra@gmail.com');
dictionary.set('Yaser', 'Yaser@gmail.com');
dictionary.set('Toon', 'Toon@gmail.com');
dictionary.print();

console.log(dictionary.get('Ali'));
console.log(dictionary.get('ffff'));
console.log(dictionary.get('Toon'));

dictionary.remove('Khaled');
dictionary.remove('Yaser');
dictionary.print();