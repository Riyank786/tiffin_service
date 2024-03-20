const Razorpay = require('razorpay');
const razorpay = new Razorpay({
    key_id: 'rzp_test_2Mr5UneituKZXx',
    key_secret: 'sUbnWHBMiMlqrBvUcCkOrOHK',
});

const getRazorpayApiKey = async(_req, res, _next) => {
    res.status(200).json({
        success: true,
        message: 'Razorpay API key',
        key: 'rzp_test_2Mr5UneituKZXx',
    });
};

const creatOrder = async(req, res) => {
    try {
        const { amount, currency } = req.body;

        const orderData = {
            amount, // Amount in paise (100 paise = 1 INR)
            currency, // Currency code, e.g., "INR"
        };

        razorpay.orders.create(orderData, (err, order) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: "Failed to create Razorpay order" });
            } else {
                res.status(200).json(order);
            }
        });
    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        res.status(500).json({ error: "Failed to create Razorpay order" });
    }

}

module.exports = { getRazorpayApiKey, creatOrder };