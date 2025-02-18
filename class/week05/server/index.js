import express from "express"; 
import cors from "cors";
import multer from "multer";

import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, 'uploads'));
    },
    filename: function (req, file, cb) {
      const uniquePreffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniquePreffix +  "-" + file.originalname)
    }
  })
  
const upload = multer({ storage: storage })
 
const app = express();
const PORT = process.env.PORT || 8000;
 
// middlelware
app.use(cors()); 
app.use(express.urlencoded({extended: true})); // For HTML Forms
app.use(express.json()); // extracts application/json data, OLD method was bodyparser

// routes
app.get("/", (req, res) => { 
    res.send("Welcome to our server");
});

// send data
app.get("/data", (req, res) => { 
    const data = {
        fname: "Yeonu",
        lname: "Hong"
    }
    res.send(data);
});

app.post("/login", (req, res) => {
    console.log(req.body);
    // process with DB in future
    res.send("I stole your data")
})

app.post("/fileform", upload.single("file"), (req, res) => {
    console.log(req.file)
    console.log(req.body)
    res.json("I received your information")
})
 
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// All other routes should be above here
app.use("", (req, res) => {
  res.status(404).send("Page not found");
});