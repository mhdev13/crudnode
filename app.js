const express           = require('express');
const cors              = require('cors');
const bodyParser        = require('body-parser');
const bootcampRouter    = require('./routes/bootcamp-router');
const userRouter        = require('./routes/user-router');
const testimoniRouter   = require('./routes/testimoni-router');
const faqRouter         = require('./routes/faq-router');
const priceRouter       = require('./routes/price-router');
const reportRouter      = require('./routes/report-router');
const reportImageRouter = require('./routes/report-image-router');
const partnerRouter     = require('./routes/partner-router');
const videoRouter       = require('./routes/video-router');
const videoVisitRouter  = require('./routes/video-visit-router');
const tutorRouter       = require('./routes/tutor-router');
const wordwallRouter    = require('./routes/wordwall-router');
const promotionRouter   = require('./routes/promotion-router');
const newsRouter        = require('./routes/news-router');

const bookRouter        = require('./routes/book.routes');

const errorHandler      = require('./middleware/error');
const app               = express();
const PORT              = process.env.PORT || 5000;

const db = require('./models');
// db.sequelize.sync();

//set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



//set routing 
app.use('/api/bootcamp', bootcampRouter);
app.use('/api/user', userRouter);
app.use('/api/testimoni', testimoniRouter);
app.use('/api/faq', faqRouter);
app.use('/api/price', priceRouter);
app.use('/api/report', reportRouter);
app.use('/api/report-image', reportImageRouter);
app.use('/api/partner', partnerRouter);
app.use('/api/video', videoRouter);
app.use('/api/video-visit', videoVisitRouter);
app.use('/api/tutor', tutorRouter);
app.use('/api/promotion', promotionRouter);
app.use('/api/news', newsRouter);
app.use('/api/wordwall', wordwallRouter);

// app.use('/api/book', bookRouter);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//set error middleware
app.use(errorHandler);

//buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
