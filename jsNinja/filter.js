// EXEMPLO DE FUNÇÃO FILTER COM NUMEROS
var numeros = [10, 18, 1, 15];

var maiorQue10 = function(item) {
    return item > 10;
}
var novosNumeros = numeros.filter(maiorQue10);
console.log(novosNumeros);

// EXEMPLO DE FUNÇÃO FILTER COM STRINGS
var nomes = ["Bruno", "Zezinho", "Fulano", "Douglas"];

var convidados = nomes.filter(function(item){
    return item.charAt(0) == "Z";
});
console.log(convidados);

// EXEMPLO DE FUNÇÃO FILTER PAR OU IMPAR
var numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100];

var pares = function(item) {
    return !(item % 2);
}
var impares = function(item) {
    return item % 2;
}

var numerosPar = numeros.filter(pares);
var numerosImpar = numeros.filter(impares);

console.log(numerosPar);
// → [10, 18, 2, 12, 100]

console.log(numerosImpar);
// → [1, 15, 21, 33]

// EXEMPLO DE FILTER COM OBJETOS
var filmes = [
    {titulo: 'Titanic', duracao: 195, nota: 7.5},
    {titulo: 'The Avengers', duracao: 203, nota: 9.5},
    {titulo: 'Bean', duracao: 90, nota: 6.5}
]

var notaCorte = 8;

var bons = function(item) {
    return item.nota >= notaCorte;
}

var ruins = function(item) {
    return item.nota < notaCorte;
}

var filmesBons = filmes.filter(bons);
var filmesRuins = filmes.filter(ruins);

console.log(filmesBons);
// → [{titulo: "The Avengers", duracao: 203, nota: 9.5}]

console.log(filmesRuins);
// → [{titulo: "Titanic", duracao: 195, nota: 7.5},
// {titulo: "Bean", duracao: 90, nota: 6.5}]

// 2º EXEMPLO DE FILTER COM OBJETOS
var convidados = [
    {nome: "Daniel", vip: true, idade: 21},
    {nome: "Gabriel", vip: true, idade: 54},
    {nome: "Felipe", vip: false, idade: 37}
]
var vips = convidados.filter(function(convidado) {
    return convidado.vip;
});
console.log(vips);
// → [{nome: "Daniel", vip: true, idade: 21},
// {nome: "Gabriel", vip: true, idade: 54}]