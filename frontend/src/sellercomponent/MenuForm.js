import React, { useState } from "react";
import axios from "axios";
import "./MenuForm.css";

const MenuForm = ({ addMenuItem }) => {
  const [menuItem, setMenuItem] = useState({
    name: "",
    description: "",
    price: 0,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuItem({
      ...menuItem,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];

    // Create a new FileReader instance
    const reader = new FileReader();

    // Define a callback function to handle the FileReader onload event
    reader.onload = () => {
      // Get the base64 data URL representation of the image
      const base64Image = reader.result;

      // Update the state with the base64 image
      setMenuItem({
        ...menuItem,
        image: base64Image,
      });
    };

    // Read the image file as a data URL (base64)
    reader.readAsDataURL(imageFile);
  };

  const handleClick = async () => {
    const formData = new FormData();
    formData.append("name", menuItem.name);
    formData.append("description", menuItem.description);
    formData.append("price", menuItem.price);
    formData.append("image", menuItem.image);

    const sellerData = JSON.parse(localStorage.getItem("data"));
    const seller = sellerData ? sellerData._id : null;
    formData.append("seller", seller);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/menu/add-menu-item`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        alert("Menu item added successfully");
        console.log("Menu item added successfully");

        addMenuItem({
          name: menuItem.name,
          description: menuItem.description,
          price: menuItem.price,
          image: menuItem.image,
        });

        setMenuItem({
          name: "",
          description: "",
          price: 0,
          image: null,
        });

        window.history.back();
      } else {
        console.log("Error:", response.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="menu-form">
        <div className="form-group">
          <h2
            style={{
              textAlign: "center",
            }}
          >
            {" "}
            Add New Menu
          </h2>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={menuItem.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={menuItem.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={menuItem.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="button" onClick={handleClick}>
          Add Menu Item
        </button>
      </div>
    </>
  );
};

export default MenuForm;
