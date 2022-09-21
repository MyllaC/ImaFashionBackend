const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const shoppingCar = [];

router.post("/carrinhodecompras", (req, res) => {
  const { name, code, price, quantity, size } = req.body;

  const produto = shoppingCar.find((produto) => produto.code === code);

  if (produto) {
    return res.status(404).send("Produto já existe");
  } else {
    shoppingCar.push({
      id: uuidv4(),
      name,
      code,
      price,
      quantity,
      size,
    });
    return res.status(201).send("Produto adicionado ao carrinho!");
  }
});

router.get("/carrinhodecompras", (req, res) => {
  res.json(shoppingCar);
});

router.get("/carrinhodecompras/:code", (req, res) => {
  const code = req.params.code;
  const findProduct = shoppingCar.find((produto) => produto.code === code);

  res.json(findProduct);
});

router.put("/carrinhodecompras/addProduct/:code", (req, res) => {
  const code = req.params.code;

  const findProduct = shoppingCar.find((produto) => produto.code === code);

  findProduct.quantity++;

  return res.json(shoppingCar);
});

router.put("/carrinhodecompras/removeProduct/:code", (req, res) => {
  const code = req.params.code;

  const findProduct = shoppingCar.find((produto) => produto.code === code);

  findProduct.quantity--;

  return res.json(shoppingCar);
});

router.delete("/carrinhodecompras/:code", (req, res) => {
  const code = req.params.code;
  const findIndex = shoppingCar.findIndex((produto) => produto.code === code);

  shoppingCar.splice(findIndex, 1);

  return res.status(201).send("Produto removido com sucesso!");
});

module.exports = router;
