const express           = require('express');
const bodyParser        = require('body-parser');
const bootcampRouter    = require('./routes/bootcamp-router');
const userRouter        = require('./routes/user-router');
const testimoniRouter   = require('./routes/testimoni-router');
const faqRouter         = require('./routes/faq-router');
const priceRouter       = require('./routes/price-router');
const reportRouter      = require('./routes/report-router');
const partnerRouter     = require('./routes/partner-router');
const videoRouter       = require('./routes/video-router');

const errorHandler      = require('./middleware/error');
const app               = express();
const PORT              = process.env.PORT || 5000;

//set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set routing 
app.use('/api/bootcamp', bootcampRouter);
app.use('/api/user', userRouter);
app.use('/api/testimoni', testimoniRouter);
app.use('/api/faq', faqRouter);
app.use('/api/price', priceRouter);
app.use('/api/report', reportRouter);
app.use('/api/partner', partnerRouter);
app.use('/api/video', videoRouter);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
if ('OPTIONS' == req.method) {
    res.sendStatus(200);
} else {
    next();
}});

//set error middleware
app.use(errorHandler);

//buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));