const express = require("express");
const { ColumnSet } = require("pg-promise");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const shoppingCar = [];

router.post("/carrinhodecompras", (req, res) => {
  const { name, price, quantity, size } = req.body;

  shoppingCar.push({
    id: uuidv4(),
    name,
    price,
    quantity,
    size,
  });

  return res.status(201).send("Produto adicionado ao carrinho!");
});

router.get("/carrinhocompras", (req, res) => {
  return shoppingCar;
});

router.get("/carrinhocompras/:id", (req, res) => {
  const id = req.params.id;
  return shoppingCar.find((el) => el.id === id);
});



module.exports = router;
