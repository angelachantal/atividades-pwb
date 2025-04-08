// Importar o módulo express, que é um framework para criar aplicações web em Node.js.
const express = require("express");

// Criar uma instância da aplicação express, que será usada para configurar rotas e middleware.
const app = express();

// Definir a porta onde o servidor será executado.
const port = 3000;

// Configurar o middleware para processar dados enviados em formulários HTML. A opção extended: false indica que apenas objetos simples (não aninhados) serão tratados.
app.use(express.urlencoded({extended: false}))

// Definir o diretório onde os templates (arquivos .ejs) estão localizados. Aqui, o diretório é chamado views.
app.set('views', 'views') 

//Configurar o EJS como a engine de renderização de templates. Isso permite renderizar arquivos .ejs como páginas HTML dinâmicas.
app.set('view engine', 'ejs')

// Definir uma rota GET para o caminho /. Quando acessada, renderiza o template home.ejs.
app.get('/', (req, res) =>{
    res.render('home')
})

// Definir uma rota GET para o caminho /ola_form. Quando acessada, renderiza o template ola_forms.ejs.
app.get('/ola_form', (req, res) =>{
  res.render('ola_forms')
})

// Definir uma rota POST para o caminho /ola.
app.post('/ola', (req, res) =>{
  nome1 = req.body.nome1; // recupera o valor enviado no corpo da requisição (req.body) com a chave nome1
  nome2 = req.body.nome2; 
  nome3 = req.body.nome3; 

  lista_nomes = [nome1, nome2, nome3] // Cria uma lista lista_nomes com esses valores.

  res.render('ola_resposta', {nomes: lista_nomes}) // Renderiza o template ola_resposta.ejs, passando a lista de nomes como variável nomes.
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

// Inicia o servidor na porta definida (3000) e exibe uma mensagem no console indicando que o servidor está rodando.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
