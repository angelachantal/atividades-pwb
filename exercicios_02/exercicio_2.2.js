// 2) Implemente uma classe chamada “Aluno” que possua atributos para armazenar o nome, a matrícula e as notas de um aluno. Adicione métodos para calcular a média das notas e verificar a situação do aluno (aprovado ou reprovado) de acordo com as regras de onde você estuda ou estudou.

class Aluno{
    constructor(matricula, nome){
        this.matricula = matricula;
        this.nome = nome;
        this.nota1 = 0;
        this.nota2 = 0;
    }
    
    getMedia(){
        return (this.nota1 + this.nota2)/2;
    }
}

const aluno1 = new Aluno(12345, "Ângela");
aluno1.nota1 = 7
aluno1.nota2 = 9

console.log("Nota 1: " + aluno1.nota1)
console.log("Nota 2: " + aluno1.nota2)
console.log("Média:" + aluno1.getMedia())

// 3) Implemente uma classe chamada “ContaBancaria” que possua atributos para armazenar o número da conta, nome do titular e saldo. Adicione métodos para realizar depósitos e saques que recebem como parâmetro o valor.

// 4) Adicione na classe da questão anterior o método para realizar transferência entre contas, que recebe como parâmetros uma conta e o valor a ser transferido.

// 5) Implemente uma classe “Autor” que possui como atributos o nome e sobrenome do autor e criar um método que imprima o nome completo (nome + sobrenome). Implemente uma classe chamada “Livro” com atributos para armazenar o título, o autor e o número de páginas do livro.