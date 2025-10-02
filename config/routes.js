const userRouter = require('../routes/user.router');
const productRouter = require('../routes/product.router');

module.exports = (app) => {
    app.use("/api/users", userRouter);
    app.use("/api/products", productRouter);
    app.get("/", function(req, res) {
        res.set('content-type', 'text/html');
        res.send('Welcome to my API!');
    })
};