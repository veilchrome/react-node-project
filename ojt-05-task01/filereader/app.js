const express = require("express");
const fs = require("fs").promises;

const app = express();
const port = 8000;

app.get("/", async (req, res) => {
  try {
    // Replace 'example.txt' with the name of your file
    const filename = "test.txt";

    // Read the file content using fs.readFile
    const fileContent = await fs.readFile(filename, "utf-8");

    // Send the file content as the response
    res.send(`File Content:\n\n${fileContent}`);
  } catch (error) {
    console.error("Kesalahan Membaca File:", error.message);
    // kode HTTP Error 500 adalah indikasi bahwa server sedang mengalami masalah.
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
