//MAP
// OBS: OS METODOS FILTER, MAP E REDUCE NECESSITAM DE UMA FUNÇÃO DE CALLBACK
// EXEMPLO DE MAP PARA DOBRAR OS NUMERO DE UMA SEQUENCIA DE UM ARRAY
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var multiplica = function(item) {
    return item * 2;
}
var dobrados = numeros.map(multiplica);

console.log(dobrados);
// → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// EXEMPLO DE MAP COM TRANSFORMAÇÃO DE UNIDADE DE MEDIDA F° P C°
var fahrenheit = [0, 32, 45, 46, 47, 91, 93, 121];

var celcius = fahrenheit.map(function(item) {
    return Math.round((item - 32)*5/9);
});

console.log(celcius);
// → [-18, 0, 7, 8, 8, 33, 34, 49]

// EXEMPLO DE MAP PARA NORMALIZAÇÃO DE STRINGS
var convidados = [
    {nome: "felipe", vip: false}, 
    {nome: "danIEl", vip:true}, 
    {nome: "João", vip: true}];
var convidadosNormalizado = convidados.map(function(item) {
    return Object.assign(item, {nome: item.nome.toUpperCase()});
});
console.log(convidadosNormalizado);
// → [{nome: "FELIPE", vip: false},
// {nome: "DANIEL", vip: true},
// {nome: "JOÃO", vip: true}]