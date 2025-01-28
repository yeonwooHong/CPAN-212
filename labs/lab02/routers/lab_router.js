import express from "express";

const router = express.Router();

// checking if in route
router.get("/", (req, res) => {
    res.send("Welcome to the lab router")
})
// name route
router.get("/name", (req, res) => {
    res.send("Yeonu Hong")
})
// greeting
router.get("/greeting", (req, res) => {
    res.send("Hello from Yeonu, Student number N01649920")
})
// add
router.get("/add/:x/:y", (req, res) => {
    let x = parseFloat(req.params.x)
    let y = parseFloat(req.params.y)
    res.send(`${x + y}`)
})
// calculate
router.get("/calculate/:a/:b/:operations", (req, res) => {
    let a = parseFloat(req.params.a)
    let b = parseFloat(req.params.b)
    let operation = req.params.operations
    let result = 0

    switch (operation) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/": // %2F
            if(b == 0){
                res.send("0 isn't dividable")
                return
            } else {
                result = a / b;
            }
            break;
        case "**":
            result = a ** b;
            break;
        default:
            res.send("Invalid Operator");
            break;
        }
    res.send(`${result}`)
})
    
export default router;