import React from 'react'
import { Outlet } from 'react-router-dom';
import ItemInfoContainer from '../components/ItemInfoContainer'
const ProductInfo = () => {
    return (
        <div>
            <ItemInfoContainer />
            <Outlet />
        </div>
    )
}

export default ProductInfo
