const express = require("express");
const bodyParser = require("body-parser");

const port = 8000;
const app = express();
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log("Sukses 200 OK");
});
// static files menggunakan middlewar express.static
//https://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/calculate", function (req, res) {
  let num1 = Number(req.body.n1);
  let num2 = Number(req.body.n2);
  let operator = req.body.operator;
  let result;
  // Menggunakan Case untuk memilih Perhitungan yang diinginkan
  switch (operator) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        res.send("Tidak Bisa dibagi dengan 0");
        return;
      }
      break;
    default:
      res.send("Invalid operator");
      return;
  }

  res.send(`Hasil  ${operator} Operasi Perhitungan: ${result}`);
});

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
