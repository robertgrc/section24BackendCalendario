const express = require("express");

const crearUsuario = (req, res = express.response) => {
  const { name, email, password } = req.body;

  if (name.length < 5) {
    return res.status(400).json({
      ok: false,
      msg: "El nombre debe ser de 5 letras",
    });
  }

  res.json({
    ok: true,
    msg: "registro",
    name: name,
    email: email,
    password: password,
  });
};

const loginUsuario = (req, res = express.response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: "login",
    email: email,
    password: password,
  });
};

const revalidarToken = (req, res = express.response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
