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