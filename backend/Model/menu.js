const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "menu item name is required"],
    },
    description: {
        type: String,
        required: [true, "description is required"],
    },
    price: {
        type: Number,
        required: [true, "price is required"],
    },
    image: {
        type: String,
        required: [true, "image is required"],
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "seller is require"],
    }

}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model("menus", menuSchema)