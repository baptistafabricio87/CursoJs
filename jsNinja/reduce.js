// REDUCE
// EXECUTA FUNÇÕES DE AGREGAÇÃO, QUE É UMA FORMA DE -----------
var valores = [1.5, 2, 4, 10];

var somatoria = valores.reduce(function(total, item) {
    return total + item;
}, 0);

console.log(somatoria);
// → 17.5

var valores = [1.5, 2, 4, 10];

var media = valores.reduce((total, item, indice, array) => {
    total += item;

    if (indice === array.length - 1) {
        return total / array.length;
    }

    return total;
}, 0);

console.log(media);
// → 4.375

// REDUCE COMO MAP --------------------------------------------
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var dobrados = numeros.reduce(function(total, item) {
    return total.concat(item * 2);
}, []);

console.log(dobrados);
// → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// REDUCE COMO FILTER ------------------------------------------
var numeros = [10, 18, 1, 15];

var novosNumeros = numeros.reduce(function(total, item) {
    if(item > 10) {
    total.push(item);
    }
    return total;
}, []);

console.log(novosNumeros);
// → [18, 15]

