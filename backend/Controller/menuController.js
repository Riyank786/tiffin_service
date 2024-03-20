const menu = require("../Model/menu");


const addMenuController = async(req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No image provided' });
        }

        const image = req.file.filename;
        const { name, description, price, seller } = req.body;


        let obj = {
            name: name,
            description: description,
            price: price,
            image: image,
            seller: seller
        }

        await menu.create(obj);

        return res.status(201).json({ message: 'Menu item added successfully' });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in add menu api",
            error
        });
    }
}


const getMenuController = async(req, res) => {
    try {
        const menuItems = await menu.aggregate([{
                $lookup: {
                    from: 'users',
                    localField: 'seller',
                    foreignField: '_id',
                    as: 'sellerData'
                }
            },
            {
                $unwind: '$sellerData'
            },

        ]);

        res.status(200).send(menuItems);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in get menu API",
            error
        });
    }
}

const getByIdMenuController = async(req, res) => {
    try {
        const menuItem = await menu.findById(req.params.id);

        if (!menuItem) {
            return res.status(404).json({ message: "Menu item not found" });
        }

        res.status(200).send(menuItem);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in gett menu api",
            error
        });
    }

}

const deleteMenuController = async(req, res) => {
    try {
        const menuItem = await menu.findByIdAndDelete(req.params.id);
        if (!menuItem) {
            return res.status(404).json({ error: 'Menu Item not found' });
        }
        res.json({ message: 'Menu Item deleted' });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in delete menu api",
            error
        });
    }
}

const updateMenuController = async(req, res) => {
    try {
        const menuItem = await menu.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
        if (!menuItem) {
            return res.status(404).json({ error: 'Menu Item not found' });
        }
        res.send(menuItem);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { addMenuController, getMenuController, deleteMenuController, updateMenuController, getByIdMenuController };