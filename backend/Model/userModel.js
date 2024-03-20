const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        required: [true, "role is required"],
        enum: ['customer', 'seller']
    },
    name: {
        type: String,
        required: () => {
            if (this.role === 'customer') {
                return true;
            }
            return false;
        }

    },
    sellerName: {
        type: String,
        required: () => {
            if (this.role === 'seller') {
                return true;
            }
            return false;
        }
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    confirmPassword: {
        type: String,
        required: [true, "confirmPassword is required"]
    },
    phoneNumber: {
        type: String,
        required: [true, "phoneNumber is required"],
        unique: true,

    },
    address: {
        type: String,
        required: [true, "address is required"]
    },
});

module.exports = mongoose.model("users", userSchema)