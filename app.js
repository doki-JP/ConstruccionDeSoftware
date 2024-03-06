const express = require("express");
const app = express();
const session = require("express-session");

app.use(
  session({
    secret:
      "pooiihukghdsjkokp82763y3gjenkdi9uy8ityjhwsa0986tiuh12ewqouiyhksjdfap9uihTDGHKJHKtryurt46ghoi435",
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
  })
);

app.set("view engine", "ejs");
app.set("views", "views");

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

const rutasUsuarios = require("./routes/usuarios.routes");
app.use("/users", rutasUsuarios);

//Middleware
app.use((request, response, next) => {
  console.log("Middleware!");
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//Registrar el middleware con el módulo construcciones
const rutasConstrucciones = require("./routes/construcciones.routes");

app.use("/", rutasConstrucciones);

app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
