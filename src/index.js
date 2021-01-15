const express = require("express");
const app = express();
const http = require("http").createServer(app);
const bodyParser = require("body-parser");
const random_name = require("node-random-name");

const port = 8000;
var cors = require("cors");
const xlsxj = require("xlsx-to-json");
var _ = require("lodash");


//Middlewares
app.use(cors());
app.set("port", process.env.PORT || 8000);
app.use(bodyParser.json());


app.get("/reservations-per-user", (req, res) => {
  xlsxj({ input: "data.xlsx", output: "data.json" }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(
        _.chain(result)
          .groupBy("Correo")
          .map((values, key) => ({ correo: key, reservaciones: values.length }))
      );
    }
  });
});

app.get("/reservations-per-image", (req, res) => {
  xlsxj({ input: "data.xlsx", output: "data.json" }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(
        _.chain(result)
          .groupBy("Imagen")
          .map((values, key) => ({ image: key, reservaciones: values.length }))
      );
    }
  });
});

app.get("/hours-per-user", (req, res) => {
  xlsxj({ input: "data.xlsx", output: "data.json" }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(
        _.chain(result)
          .groupBy("Correo")
          .map((values, key) => ({
            user: key,
            hours: (values = values
              .map((value) => parseInt(value.Horas))
              .reduce((a, b) => a + b)),
          }))
      );
    }
  });
});

app.get("/hours-per-image", (req, res) => {
  xlsxj({ input: "data.xlsx", output: "data.json" }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(
        _.chain(result)
          .groupBy("Imagen")
          .map((value, key) => ({
            image: key,
            hours: value
              .map((value) => parseInt(value.Horas))
              .reduce((a, b) => a + b),
          }))
      );
    }
  });
});

app.get("/users-list", (req, res) => {
  xlsxj({ input: "data.xlsx", output: "data.json" }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(
        _.chain(result)
          .groupBy("Correo")
          .map((values, key) => ({
            correo: values.map((obj) => obj.Correo).reduce((a) => a),
          }))
      );
    }
  });
});

app.get("/user-data/:mail", (req, res) => {
  xlsxj({ input: "data.xlsx", output: "data.json" }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      const userdata = _.chain(result)
        .groupBy("Correo")
        .map((values, key) => ({
          correo: key,
          data: values.map((data) => {
            delete data.Correo;
            delete data.Grupo;
            delete data.Usuario;
            return data;
          }),
        }))
        .filter((obj) => obj.correo === req.params.mail)
        .pop();
      res.json(userdata);
    }
  });
});

http.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
