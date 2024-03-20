import React,{useState,useEffect} from "react";
import Cards from "./Cards";
import "./Home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FaSearch, FaLocationArrow } from "react-icons/fa";
import axios from 'axios'
import {Link} from 'react-router-dom'


function Home() {
  const [menuItems, setMenuItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Make a GET request to fetch menu items when the component mounts
    axios.get('http://localhost:8080/api/v1/menu/get-menu-item') // Replace with the actual API endpoint
      .then(response => {
        setMenuItems(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching menu items:', error);
      });
  }, []);

  const filteredMenuItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Navbar/>
      <div class="wrap ">
        <h1 className="mb-4"> Discover Tiffins in your Area:) </h1>{" "}
        <div className='search'>
      <FaSearch className='search-icon' size='25px'/>
    <input
            type="text"
            placeholder='Type to search..'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
    </div>
      </div>
      <div className="container">
        <h1 h1 className="mb-5">
         
          Today 's Pick
        </h1>
        <div className="row gap-0  ">
        {filteredMenuItems.map(item => (
            <div className="col mb-5 mt-5 ms-5 " key={item._id}>
              <Link to={`/menu/${item._id}`} className="card-link">
                <Cards
                  imgsrc={`/images/${item.image}`}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  sellerName={item.sellerData.name}
                />
              </Link>
            </div>
          ))}

          
        </div>
      </div>
      <div className="container">
        <h1 className="mb-5 mt-5"> Popular in Your Area </h1>
        <div className="row ">
        {filteredMenuItems.map(item => (
            <div className="col mb-5 mt-5 ms-5 " key={item._id}>
              <Link to={`/menu/${item._id}`} className="card-link">
                <Cards
                  imgsrc={`/images/${item.image}`}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  sellerName={item.sellerData.name}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <h1 className="mb-5 mt-5"> Try Something New </h1>
        <div className="row ">
        {filteredMenuItems.map(item => (
            <div className="col mb-5 mt-5 ms-5 " key={item._id}>
              <Link to={`/menu/${item._id}`} className="card-link">
                <Cards
                  imgsrc={`/images/${item.image}`}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  sellerName={item.sellerData.name}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
