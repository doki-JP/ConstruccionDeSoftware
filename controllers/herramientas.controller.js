const {response}  = require("express");
const Herramienta = require("../models/herramientas.model");

exports.get_armar = (request, response, next) => {
  const herramientas = Herramienta.fetchAll();
  response.render("armar", {
    username: request.session.username || "",
    herramientas: herramientas
  });
};


exports.post_armar= (request, response, next) => {
  console.log(request.body);
  const herramienta = new Herramienta(
    request.body.nombre,
    request.body.imagen,
    request.body.duracion,
  );
  herramienta.save();
  response.redirect("/herramientas/armar");
};

