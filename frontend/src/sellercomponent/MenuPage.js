import React from 'react'
import './MenuPage.css'
import Header from './Header'
import { Link } from 'react-router-dom';
const MenuPage = () => {
    return (
        <>
        <div className='maincm'>
            <Header />
            <h1 className='hm'>Menu Management</h1>
            <div className='container'>
               <Link to='./addmenu' className='linkm'> <div className='mbtn'>Add New Menu</div></Link>
               <Link to='./editmenu' className='linkm'> <div className='mbtn'>Edit And Manage Menu</div></Link>
               
            </div>
            </div>
        </>
    )
}

export default MenuPage