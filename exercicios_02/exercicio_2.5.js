// 5) Implemente uma classe “Autor” que possui como atributos o nome e sobrenome do autor e criar um método que imprima o nome completo (nome + sobrenome). Implemente uma classe chamada “Livro” com atributos para armazenar o título, o autor e o número de páginas do livro.

class Autor{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto(){
        return (this.nome + ' ' + this.sobrenome);
    }
}

class Livro{
    constructor(titulo, autor, paginas){
        this.titulo = titulo;
        this.autor = autor.nomeCompleto();
        this.paginas = paginas;
    }
}

const autor1 = new Autor ('Ângela', 'Chantal');
const livro1 = new Livro ('Meu Livro', autor1, 260);

console.log(autor1.nomeCompleto())
console.log(livro1)