const express = require('express')
const router = express.Router()

router.get('/compra_venda', (req, res) =>{
  res.render('bolsa/compra_venda_form');
})

router.post('/compra_venda', (req, res) => {
  const { data, codigo, tipo, quantidade, preço } = req.body;
  res.send(`Operação cadastrada: ${tipo} ${quantidade} de ${codigo} a R$${preço} em ${data}`);
});

module.exports = router