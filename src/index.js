const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = 8000;
var cors = require('cors')
app.use(cors())

app.get("/get-subjects", (req, res) => {
  res.json({
    data: {
      subjects: [
        { id: 1, name: "Ingenieria de software y desarrollo" },
        { id: 2, name: "Ingenieria de software y gestión ti" },
        { id: 3, name: "Laboratorio de datos" },
        { id: 4, name: "UTPL_PROYECTOS_LAB" },
      ],
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
