function getById(id) {
  return document.getElementById(id);
}

// Questão 1
function testeEscopo() {
  var a = 10;
  let b = 20;
  const c = 30;

  let resposta_1a = getById("resposta_1a");
  let resposta_1b = getById("resposta_1b");

  if (true) {
    var a = 40;
    let b = 50;
    const c = 60;

    resposta_1a.innerHTML = a + "," + b + "," + c;
  }
  resposta_1b.innerHTML = a + "," + b + "," + c;
}
testeEscopo();


// Questão 2
let n1, n2, n3;

let botao_n1 = getById ('botao_n1');
botao_n1.addEventListener('click', mostrar_n1);

function mostrar_n1(){
  n1 = getById("questao_2.1").value;
  let resposta_n1 = getById('entrada_2.1');
  resposta_n1.innerHTML= n1;
} 

let botao_n2 = getById("botao_2.2");
botao_n2.addEventListener('click', mostrar_n2);

function mostrar_n2(){
  n2 = getById('questao_2.2').value;
  let resposta_n2 = getById('entrada_2.2')
  resposta_n2.innerHTML = n2;
}

let botao_n3 = getById('botao_2.3');
botao_n3.addEventListener('click', mostrar_n3);

function mostrar_n3(){
  n3 = getById('questao_2.3').value;
  let resposta_n3 = getById('entrada_2.3');
  resposta_n3.innerHTML = n3;
}

let botao_maior_menor = getById('botao_maior_menor');
botao_maior_menor.addEventListener('click', maior_menor);

function maior_menor(){
  let maior;
  let menor;

  if (n1 >= n2 && n1>=n3) {
    maior = n1;
  } else if (n2 >= n1 && n2>=n3) {
    maior = n2;
  } else{
    maior = n3;
  }

  if (n1 <= n2 && n1<=n3) {
    menor = n1;
  } else if (n2 <= n1 && n2<=n3) {
    menor = n2;
  } else{
    menor = n3;
  }

  let resposta_2 = getById('resposta_2');
  resposta_2.innerHTML = "Maior: "+ maior + `<br>`+ "Menor: " + menor;
}

// Questão 3
let botao_tabuada = getById('botao_tabuada');

botao_tabuada.addEventListener('click', calc_tabuada);

function calc_tabuada(){
  const n = parseInt(getById('questao_3').value);
  let resposta_3 = getById('resposta_3');

  if (!isNaN(n) && Number.isInteger(n) && n > 0){
    let tabuada = `<p>Tabuada de ${n}:<p>`;
    for (let i = 1; i <= 10; i++) {
      tabuada += `${n} + ${i} = ${n + i}<br>`;
    }
    resposta_3.innerHTML = tabuada
  } else {
  resposta_3.innerHTML = "Por favor, insira um número inteiro positivo."
  }
}

// Questão 4
let popA = 80000;
let popB = 200000;
let txA = 0.03;
let txB = 0.015;
let ano = 0;

while (popA <= popB){
  popA += (txA * popA)
  popB += (txB * popB)
  ano += 1
}

let resposta_4 = getById('resposta_4');
resposta_4.innerHTML = ano

// Questão 5
const numeros = [3, 7, 3, 2, 7, 10, 2, 15, 10, 20];
const numerosUnicos = [... new Set(numeros)];

let resposta_5 = getById('resposta_5');
resposta_5.innerHTML = numerosUnicos;

// Questão 6


// Questão 7