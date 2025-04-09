
const express = require('express')
const router = express.Router()


router.get('/ola_form', (req, res) =>{
    res.render('ola/ola_forms')
  })
  
router.post('/ola', (req, res) =>{
    let nome1 = req.body.nome1; 
    let nome2 = req.body.nome2; 
    let nome3 = req.body.nome3; 
  
    let lista_nomes = [nome1, nome2, nome3] 
  
    res.render('ola/ola_resposta', {nomes: lista_nomes}) 
  })

module.exports = router
