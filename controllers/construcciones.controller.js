exports.get_construir = (request, response, next) => {
  response.render("construir");
};

exports.post_construir = (request, response, next) => {
  console.log(request.body);
  construcciones.push(request.body);
  response.redirect("/");
};

exports.get_root = (request, response, next) => {
  console.log("Ruta /");
  response.render("construcciones", {
    construcciones: construcciones,
  });
};
