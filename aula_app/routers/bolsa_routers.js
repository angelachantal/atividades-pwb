const express = require('express')
const router = express.Router()

router.get('/compra_venda', (req, res) =>{
  res.render('bolsa/compra_venda_form');
})

router.post('/compra_venda', (req, res) => {
  let data = req.body.data;
  let codigo = req.body.codigo;
  let tipo = req.body.tipo;
  let quant = req.body.quantidade;
  let preco_unit = req.body.preco;
  let vl_bruto = quant * preco_unit
  let vl_liquido;

  // Como receber a resposta de tipo (compra/venda?)
  
  if (tipo == "comprar"){
    vl_liquido = vl_bruto + (vl_bruto * 0.0005);
  } else if (tipo =="vender"){
    vl_liquido = vl_bruto - (vl_bruto * 0.0005);
  }

  res.render('bolsa/bolsa_resposta', {data_tp: data, codigo_tp: codigo, tipo_tp: tipo, quant_tp: quant, preco_tp: preco_unit, vl_bruto_tp: vl_bruto, vl_liquido_tp: vl_liquido});
});

module.exports = router