// JUNTANDO FILTER-MAP-REDUCE

// FILTER -> SEPARA NUMEROS PARES
// MAP -> DOBRA OS NUMEROS SEPARADOS PELO FILTER
var numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100];
var pares = function(item) {
return !(item % 2);
}
var dobrados = function(item) {
return item * 2;
}
var numerosDobrados = numeros.filter(pares).map(dobrados);
console.log(numerosDobrados);
// → [20, 36, 4, 24, 200]

// JUNTANDO OS 3 METODOS PARA AGRUPAR RETORNOS
// FUNÇÕES DE MANIPULAÇÃO DE DADOS
var carros = [
    {marca: 'Audi', cor: 'preto'},
    {marca: 'Audi', cor: 'branco'},
    {marca: 'Ferarri', cor: 'vermelho'},
    {marca: 'Ford', cor: 'branco'},
    {marca: 'Peugot', cor: 'branco'}
];

function groupBy(array, prop) {
    var value = array.reduce(function(total, item) {
        var key = item[prop];

        total[key] = (total[key] || []).concat(item); // item.marca (Audi)

        return total;
    }, {});

    return value;
}

var agrupados = groupBy(carros, 'marca');
console.log(agrupados);
// → {
// "Audi": [
// {marca: "Audi", cor: "preto"},
// {marca: "Audi", cor: "branco"
// ],
// "Ferarri": [// {marca: "Ferarri", cor: "vermelho"}
// ],
// "Ford": [
// {marca: "Ford", cor: "branco"}
// ],
// "Peugot": [
// {marca: "Peugot", cor: "branco"}
// ]
// }


// mesma função com outro fonte de dados

var produtos = [
    {id: 123, nome: 'Camiseta', cor: 'preto', tamanho: 'G', categoria: 'Vestuário'},
    {id: 456, nome: 'Tênis', cor: 'preto', tamanho: '41', categoria: 'Vestuário'},
    {id: 789, nome: 'Bola', cor: 'verde', tamanho: 'Único', categoria: 'Esporte'}
]

function groupBy(array, prop) {
    var value = array.reduce(function(total, item) {
        var key = item[prop];

        total[key] = (total[key] || []).concat(item); // item.marca (Audi)

        return total;
    }, {});

    return value;
}

var agrupados = groupBy(produtos, 'categoria');
console.log(agrupados);
// → {
//  "Esporte": [
//      {id: 789, nome: "Bola", cor: "verde", tamanho: "Único", categoria: "Esporte"}
//  ],
//   "Vestuário": [
//      {id: 123, nome: "Camiseta", cor: "preto", tamanho: "G", categoria: "Vestuário"},
//      {id: 456, nome: "Tênis", cor: "branco", tamanho: "41", categoria: "Vestuário"}
//  ]
// }

