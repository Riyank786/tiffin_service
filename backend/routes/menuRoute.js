const express = require('express');
const multer = require("multer");
const {
    addMenuController,
    getMenuController,
    getByIdMenuController,
    deleteMenuController,
    updateMenuController
} = require('../Controller/menuController');
const authMiddleware = require('../Middelware/authMiddleware');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "C:/Users/ddoba/Downloads/Frontend/frontend/public/Images");
    },

    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });
router.post("/add-menu-item", upload.single('image'), addMenuController)
router.get("/get-menu-item", getMenuController);
router.get("/getById/:id", getByIdMenuController)
router.delete("/delete-menu-item/:id", deleteMenuController);
router.put("/update-menu-item/:id", updateMenuController);

module.exports = router