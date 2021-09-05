const express = require("express");
const router = express.Router();
const { Portfolio } = require("../models");

router.get("/", async (req, res) => {
  const listOfPortfolio = await Portfolio.findAll();
  res.json(listOfPortfolio);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Portfolio.create(post);
  res.json(post);
});

module.exports = router;