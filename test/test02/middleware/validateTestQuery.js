const validateTestQuery = (req, res, next) => { 
    if (req.query.test_validation) {
        console.log(`test_validation: ${req.query.test_validation}`);
      } else {
        console.log("test_validation parameter missing");
      }
    console.log(`Route ${req.originalUrl} was called at ${Date()}`)
    next();
};

export default validateTestQuery;