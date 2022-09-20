const express = require("express");
const { ColumnSet } = require("pg-promise");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const shoppingCar = [];

router.post("/carrinhodecompras", (req, res) => {
  const { name, code, price, quantity, size } = req.body;

  shoppingCar.push({
    id: uuidv4(),
    name,
    code,
    price,
    quantity,
    size,
  });

  return res.status(201).send("Produto adicionado ao carrinho!");
});

router.get("/carrinhodecompras", (req, res) => {
  res.json(shoppingCar);
});

router.get("/carrinhodecompras/:code", (req, res) => {
  const code = req.params.code;
  const findProduct = shoppingCar.find((el) => el.code === code);

  res.json(findProduct);
});

module.exports = router;
