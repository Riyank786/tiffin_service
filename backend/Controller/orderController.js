const order = require("../Model/order");
const menu = require("../Model/menu");

const addOrderController = async (req, res) => {
  const orderData = req.body;
  console.log(orderData);

  const newOrder = new order({
    menuItemId: orderData.menuItemId,
    quantity: orderData.quantity || 1,
    seller: orderData.seller,
    mealPlan: orderData.mealPlan || "Trial",
    deliveryTime: orderData.deliveryTime || "",
    cookingInstruction: orderData.cookingInstruction || "",
    customer: orderData.customer,
  });

  try {
    console.log("ok1");
    const savedOrder = await newOrder.save();
    console.log("ok2");

    res.json({ success: true, order: savedOrder });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getOrderController = async (req, res) => {
  try {
    const orderItems = await order.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "customer",
          foreignField: "_id",
          as: "customerData",
        },
      },
      {
        $unwind: "$customerData",
      },
      {
        $lookup: {
          from: "users",
          localField: "seller",
          foreignField: "_id",
          as: "sellerData",
        },
      },
      {
        $unwind: "$sellerData",
      },
    ]);

    res.status(200).send(orderItems);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in get menu API",
      error,
    });
  }
};

const completeOrder = async (req, res) => {
  const orderId = req.params.orderId;
  console.log(orderId)
  try {
    const updatedOrder = await order.findOneAndUpdate(
      { _id: orderId },
      { $set: { isCompleted: true } },
      { new: true }
    );

    if (!updatedOrder) {
      // If order is not found, return a 404 Not Found response
      return res
        .status(404)
        .json({ message: `Order with ID ${orderId} not found.` });
    }

    return res
      .status(200)
      .json({
        message: `Order has been completed successfully.`,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

module.exports = { addOrderController, getOrderController, completeOrder };
