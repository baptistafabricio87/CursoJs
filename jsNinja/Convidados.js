var convidado = {
    nome: undefined,
    idade: undefined,
    genero: undefined,
    vip: false,
    // detalhes: [],
    setNome: function(nome){
        this.nome = nome;
    },
    getNome: function () {
        console.log(this.nome);
    },
    setIdade: function (idade) {
        this.idade = idade;
    },
    getIdade: function () {
        console.log(this.idade);
    },
    setGenero: function(genero) {
        this.genero = genero;
    },
    getGenero: function() {
        console.log(this.genero);
    },
    registraChegada: function(hora){
        console.log("Convidado chegou: " + hora);
    },
    registraSaida: function(hora){
        console.log("Convidado Saiu: " + hora);
    }
}
