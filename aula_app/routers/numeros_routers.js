
const express = require('express')
const router = express.Router()




router.get('/numeros', (req, res) =>{
    res.render('numeros/num_forms')
  })
  
router.post('/numeros', (req, res) =>{
    let numero1 = Number(req.body.numero1);
    let numero2 = Number(req.body.numero2);
    let numero3 = Number(req.body.numero3);
    let resultado = numero1 + numero2 + numero3
    res.render('numeros/num_soma', {numero1: numero1, numero2: numero2, numero3: numero3})
  }) 
  

module.exports = router
