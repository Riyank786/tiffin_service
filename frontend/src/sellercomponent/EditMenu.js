import React, { useState, useEffect } from 'react';
import './Edimenu.css'; // Import CSS file for styling
import Header from './Header';

const EditMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
   
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/menu/get-menu-item`);
        if (response.ok) {
          const data = await response.json();
          setMenuItems(data);
        } else {
          console.error('Error fetching menu items:', response.status);
        }
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    
    fetchMenuItems();
  }, []); 

  const handleEdit = (item) => {
    setSelectedItem({ ...item });
    setIsEditing(true);
  };

  const handleDelete = (itemId) => {
    const deleteMenuItem = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/menu/delete-menu-item/${itemId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          const updatedMenuItems = menuItems.filter(item => item._id !== itemId);
          setMenuItems(updatedMenuItems);
        } else {
          console.error('Error deleting menu item:', response.status);
        }
      } catch (error) {
        console.error('Error deleting menu item:', error);
      }
    };
    deleteMenuItem();
  };

  const handleSave = () => {
    if (isEditing) {
     
      const updateMenuItem = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/menu/update-menu-item/${selectedItem._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(selectedItem),
          });
          if (response.ok) {
            
            const updatedMenuItems = menuItems.map(item =>
              item.id === selectedItem.id ? selectedItem : item
            );
            setMenuItems(updatedMenuItems);
            setSelectedItem(null);
            setIsEditing(false);
          } else {
            console.error('Error updating menu item:', response.status);
          }
        } catch (error) {
          console.error('Error updating menu item:', error);
        }
      };

      
      updateMenuItem();
    } else {
      
      const newItem = { ...selectedItem, id: Date.now() };
      
      const addMenuItem = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/menu/add-menu-item`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
          });
          if (response.ok) {
            
            const updatedMenuItems = [...menuItems, newItem];
            setMenuItems(updatedMenuItems);
            setSelectedItem(null);
          } else {
            console.error('Error adding menu item:', response.status);
          }
        } catch (error) {
          console.error('Error adding menu item:', error);
        }
      };

      
      addMenuItem();
    }
  };

  const handleCancel = () => {
    setSelectedItem(null);
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedItem((prevSelectedItem) => ({
      ...prevSelectedItem,
      [name]: value,
    }));
  };

  return (
    <>
      <Header />
      <div className="menu-edit-delete-page">
        <h1>Edit and Delete Menu Items</h1>
        <div className="menu-items">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <img src={`/images/${item.image}`} alt={item.name} />
              <div className="item-details">

                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p> &#8377;{item.price}</p>
              </div>
              <div className="item-actions">
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        {isEditing && (
          <div className="edit-form">
            <h2>{selectedItem ? 'Edit Item' : 'Add New Item'}</h2>
            <form>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={selectedItem.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={selectedItem.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Price:</label>
                <input
                  type="number"
                  name="price"
                  value={selectedItem.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* <div className="form-group">
                <label>Image URL:</label>
                <input
                  type="text"
                  name="image"
                  value={selectedItem.image}
                  onChange={handleInputChange}
                  required
                />
              </div> */}
              <div className="form-buttons">
                <button type="button" onClick={handleSave}>
                  Save
                </button>
                <button type="button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default EditMenu;
