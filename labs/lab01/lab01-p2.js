/*
home page
about us
contact
login

register
details
search page
*/
import http from "http";
import fs from "fs";
import path from "path";

const app = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to the server")
    } else if (req.url === "/about") {
        const webpage = fs.readFileSync(path.join("pages", "about.html"))
        res.end(webpage);
    } else if (req.url === "/contact") {
        const webpage = fs.readFileSync(path.join("pages", "contact.html"))
        res.end(webpage);
    } else if (req.url === "/login") {
        const webpage = fs.readFileSync(path.join("pages", "login.html"))
        res.end(webpage);
    } else {
        res.end("Page not found")
    }
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})