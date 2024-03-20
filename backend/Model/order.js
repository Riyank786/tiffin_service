const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Menus' },

    quantity: {
        type: Number,
        required: [true, "quantity is required"]
    },

    mealPlan: {
        type: String,
        required: [true, "mealPlan is required"]
    },

    deliveryTime: {
        type: String,
        required: [true, "deliveryTime is required"]
    },
    cookingInstruction: {
        type: String,
        required: [true, "cookingInstruction is required"]
    },

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "customer is require"],
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "seller is require"],
    },

}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model("orders", orderSchema)