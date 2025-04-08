const express = require("express");
const app = express();
const port = 3000;

// Para não tratar objetos aninhados. Tratar apenas objetos simples
app.use(express.urlencoded({extended: false}))

// Configuração da engine de renderização de templates (ejs)
app.set('views', 'views') //localização das páginas (templates)
app.set('view engine', 'ejs')

//
app.get('/', (req, res) =>{
    res.render('home')
})

//
app.get('/ola_form', (req, res) =>{
  res.render('ola_forms')
})

// req.body é um objeto que contém os dados enviados no corpo da requisição 
app.post('/ola', (req, res) =>{
  nome1 = req.body.nome1; // recupera o valor do parâmetro com chave = nome
  nome2 = req.body.nome2; 
  nome3 = req.body.nome3; 
  lista_nomes = [nome1, nome2, nome3]
  res.render('ola_resposta', {nomes: lista_nomes})
})

app.get('/numeros', (req, res) =>{
  res.render('num_forms')
})

app.post('/numeros', (req, res) =>{
  numero1 = Number(req.body.numero1);
  numero2 = Number(req.body.numero2);
  numero3 = Number(req.body.numero3);
  resultado = numero1 + numero2 + numero3
  res.render('num_soma', {numero1: numero1, numero2: numero2, numero3: numero3})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
