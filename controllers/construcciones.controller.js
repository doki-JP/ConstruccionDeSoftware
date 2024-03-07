const { response } = require("express");
const Construccion = require("../models/construccion.model");
const fs= require('fs')

exports.get_construir = (request, response, next) => {
  response.render("construir", {
    username: request.session.username || "",
  });
};

exports.get_materiales = (request, response, next) => {
  response.render("materiales", { username: request.session.username || "" });
};


exports.post_construir = (request, response, next) => {
  console.log(request.body);
  const construccion = new Construccion(
    request.body.nombre,
    request.body.imagen
  );
  construccion.save();

  response.setHeader(
    "Set-Cookie",
    "ultima_construccion=" + request.body.nombre + "; HttpOnly"
  );
  const name = request.body.nombre;
  const img = request.body.imagen;
  const data = `Construcción: ${name} - Imagen: ${img}\n`;
  fs.appendFile("construccionesdeusuarios.txt", data, (err)=> {
    if (err) {
        console.log(err);
    }
  });
  response.redirect("/");
};

exports.get_root = (request, response, next) => {
  console.log("Ruta /");
  let ultima_construccion = request.get("Cookie");
  if (ultima_construccion) {
    ultima_construccion = ultima_construccion.split("=")[1];
  } else {
    ultima_construccion = "";
  }
  console.log(ultima_construccion);
  response.render("construcciones", {
    construcciones: Construccion.fetchAll(),
    ultima_construccion: ultima_construccion,
    username: request.session.username || "",
  });
};
