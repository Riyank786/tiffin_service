const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const colors = require('colors')
const morgan = require('morgan')
const cors = require('cors');
// const Razorpay = require('razorpay')
const connectDB = require('./Config/db')


dotenv.config();
connectDB();
const app = express();

app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
app.use(morgan('dev'))


// const razorpay = new Razorpay({
//     key_id: "rzp_test_2Mr5UneituKZXx",
//     key_secret: "sUbnWHBMiMlqrBvUcCkOrOHK",
// });


app.use("/api/v1/auth", require('./routes/authRoute'))
app.use("/api/v1/menu", require('./routes/menuRoute'))
app.use("/api/v1/order", require('./routes/orderRoute'))
app.use("/api/v1/pay", require('./routes/checkoutRoute'))


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`node sever running In ${process.env.DEV_MODE} on Port ${process.env.PORT}`.bgBlue.white)
})