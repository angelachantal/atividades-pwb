// 3) Implemente uma classe chamada “ContaBancaria” que possua atributos para armazenar o número da conta, nome do titular e saldo. Adicione métodos para realizar depósitos e saques que recebem como parâmetro o valor.

class ContaBancaria {
  constructor(numero, nome, saldo) {
    this.numero = numero;
    this.nome = nome;
    this.saldo = saldo;
  }

  depositar(valor) {
    return this.saldo + valor;
  }

  sacar(valor) {
    return this.saldo - valor;
  }
}

const conta1 = new ContaBancaria(1, "Ângela", 100.0);
const conta2 = new ContaBancaria(2, "João", 50.0);

conta1.depositar(20.3);
conta2.sacar(15);

console.log(conta1);
console.log(conta2);
console.log(conta1.saldo);
console.log(conta2.nome);
