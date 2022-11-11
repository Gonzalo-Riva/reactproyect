import React from 'react'
import { Outlet } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer'
const Shop = () => {
    return (
        <div>
            <ItemListContainer />
            <Outlet />
        </div>
    )
}

export default Shop
