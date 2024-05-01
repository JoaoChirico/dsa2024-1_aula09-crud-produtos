const express = require('express')
const app = express()

let listaProdutos = [
  {
      id: 1,
      nome: "arroz",
      categoria: "alimento",
      preco: 5.80
  },
  {
      id: 2,
      nome: "leite",
      categoria: "bebida",
      preco: 4.25
  }
];

let produto2 = 
  {
  id: 2,
  nome: "leite",
  categoria: "bebida",
  preco: 4.25
}
;

app.get('/produtos', (req, res) => {
  res.json(listaProdutos)
})

app.post('/produtos', (req, res) => {
  res.send('Inserindo Produtos')
})

app.get('/produtos/:id', (req, res) => {
  const id = req.params.id;
  //res.send('Buscando o produto com id'+id);
  if(id == 2){
    res.json(produto2)
  }
  else{
    res.status(404).json({erro: "Produto não encontrado"})
  }
  //res.json(produto2);
})

app.put('/produtos/:id', (req, res) => {
  const id = req.params.id;
  res.send('Atualizando o produto com id'+id);
})

app.delete('/produtos/:id', (req, res) => {
  const id = req.params.id;
  res.send('Deletando o produto com id'+id);
})



app.listen(3000, () => {
    console.log("Servidor foi iniciado na Porta 3000")
})


