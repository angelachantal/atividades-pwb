// 4) Adicione na classe da questão anterior o método para realizar transferência entre contas, que recebe como parâmetros uma conta e o valor a ser transferido.

class ContaBancaria{
    constructor(numero, nome, saldo){
        this.numero = numero;
        this.nome = nome;
        this.saldo = saldo;
    }

    depositar(valor){
        return this.saldo += valor;
    }

    sacar(valor){
        if (valor > this.saldo){
            return 'Saldo insuficiente';
        } else{
            return this.saldo -= valor;
        }
    }

    transferir (destino, valor){
        if (valor > this.saldo){
            return 'Saldo insuficiente';
        } else{
            this.saldo-=valor;
            destino.depositar(valor);
        }
        return 'Transferência realizada com sucesso!';
    }
}

const conta1 = new ContaBancaria(1, 'Ângela', 100.00);
const conta2 = new ContaBancaria(2, 'João', 50.00);

conta1.transferir(conta2, 20);

console.log(conta1);
console.log(conta2);
