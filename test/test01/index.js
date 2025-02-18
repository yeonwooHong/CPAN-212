// I have "type": "module", in my package.json
import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/fetch", (req, res) => {
    res.send("You entered /fetch route")
});

app.post("/save", (req, res) => {
    res.send("You entered /save route")
});

app.delete("/delete", (req, res) => {
    res.send("You entered /delete route")
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });