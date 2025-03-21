function getById(id) {
  return document.getElementById(id);
}

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
