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
// Questão 4
// Questão 5
// Questão 6
// Questão 7