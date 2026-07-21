const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const api =[
    {
        pizza:[
            {sabor: "Calabresa", preco: 10.99, tamanho: "M"},
            {sabor: "Mussarela", preco: 14.00, tamanho: "M"},
            {sabor: "Frango com Catupiry", preco: 20.00, tamanho: "M"},
            {sabor: "Frango com quijo", preco: 25.00, tamanho: "M"},
        ]
    },
    {
        hamburguer:[
            {sabor: "Carne", preco: 29.99, tamanho: "M"},
            {sabor: "Frango", preco: 19.99, tamanho: "P"},
            {sabor: "3 canes", preco: 39.99, tamanho: "M"},
            {sabor: "4 carnes", preco: 49.99, tamanho: "M"},
        ]
    },
    {
        sanduiche:[
            {sabor: "Presunto", preco: 9.99, tamanho: "M"},
            {sabor: "Salada", preco: 7.99, tamanho: "P"},
            {sabor: "Calabresa", preco: 11.99, tamanho: "M"},
            {sabor: "Musarela", preco: 19.99, tamanho: "M"},
        ]
    }
]

app.get('/', (req, res) => {
  return res.json(api);
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});