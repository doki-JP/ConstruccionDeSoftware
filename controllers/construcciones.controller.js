const { response } = require("express");
const Construccion = require("../models/construccion.model");
const fs= require('fs')

exports.get_construir = (request, response, next) => {
  response.render("construir", {
    username: request.session.username || "",
    csrfToken: request.csrfToken()
  });
};

exports.get_materiales = (request, response, next) => {
  response.render("materiales", { username: request.session.username || "",
  csrfToken: request.csrfToken(),
 });
};


exports.post_construir = (request, response, next) => {
  console.log(request.body);
  const construccion = new Construccion(
    request.body.nombre,
    request.body.imagen
  );
  construccion.save()
  .then(([rows, fieldData])=>{
    response.setHeader(
    "Set-Cookie",
    "ultima_construccion=" + request.body.nombre + "; HttpOnly"
    
  );
  response.redirect("/construcciones")
  })
  .catch((err)=>{console.log(err)});
};

exports.get_root = (request, response, next) => {
  console.log("Ruta /construcciones");
  let ultima_construccion = request.get("Cookie");
  if (ultima_construccion) {
    ultima_construccion = ultima_construccion.split("=")[1];
  } else {
    ultima_construccion = "";
  }
  console.log(ultima_construccion);

  Construccion.fetch(request.params.construccion_id).then(([rows, fieldData]) => {
    console.log(rows);
      response.render("construcciones", {
        construcciones: rows,
        ultima_construccion: ultima_construccion,
        username: request.session.username || "",
      });
})
.catch(err => {
    console.log(err);
});
};
