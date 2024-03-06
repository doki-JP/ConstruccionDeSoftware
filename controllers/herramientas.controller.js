const { response } = require("express");
const Herramienta = require("../models/herramientas.model");
const fs= require('fs')

exports.get_armar = (request, response, next) => {
  response.render("armar", {
    username: request.session.username || "",
  });
};

exports.post_armar= (request, response, next) => {
  console.log(request.body);
  const herramienta = new Herramienta(
    request.body.nombre,
    request.body.imagen
  );
  herramienta.save();
  response.redirect("/");
};

