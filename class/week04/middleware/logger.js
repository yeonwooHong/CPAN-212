// debugging
const logger = (req, res, next) => { 
    console.log(req.url);
    console.log(req.method);
    // console.log(req.headers);
    console.log(Date());
    next(); // To run next step
};

export default logger;