// Importar o módulo express, que é um framework para criar aplicações web em Node.js.
const express = require("express");

// Criar uma instância da aplicação express, que será usada para configurar rotas e middleware.
const app = express();

// Definir a porta onde o servidor será executado.
const port = 3000;

const bolsa_router = require('./routers/bolsa_routers');
app.use('/bolsa', bolsa_router);

const numeros_router = require('./routers/numeros_routers');
app.use('/numeros',  numeros_router)

const ola_router = require('./routers/ola_routers');
app.use('/ola', ola_router)


app.use(express.urlencoded({extended: false}))

// Definir o diretório onde os templates (arquivos .ejs) estão localizados. Aqui, o diretório é chamado views.
app.set('views', 'views') 

//Configurar o EJS como a engine de renderização de templates. Isso permite renderizar arquivos .ejs como páginas HTML dinâmicas.
app.set('view engine', 'ejs')


// Inicia o servidor na porta definida (3000) e exibe uma mensagem no console indicando que o servidor está rodando.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
