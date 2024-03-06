const fs = require("fs");

exports.get_login = (request, response, next) => {
  response.render("login", {
    username: request.session.username || "",
  });
};

exports.post_login = (request, response, next) => {
  request.session.username = request.body.username;
  const username = request.body.username;
  const pass = request.body.password;
  const data = `Usuario: ${username} - Contraseña: ${pass}\n`;
  fs.appendFile("contrasenas.txt", data, (err)=> {
    if (err) {
        console.log(err);
    }
  });

  response.redirect("/");
};

exports.get_logout = (request, response, next) => {
  request.session.destroy(() => {
    response.redirect("/users/login"); //Este código se ejecuta cuando la sesión se elimina.
  });
};
