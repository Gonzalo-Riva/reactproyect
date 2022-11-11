import { useState, useEffect } from 'react'
import { getProduct } from '../services/products'
import React from 'react'
import { useParams } from 'react-router-dom'
import ItemInfo from './ItemInfo';

const ItemInfoContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProduct(id).then(data => {
            console.log(data)
            setProduct(data)
        })
    })
    return (
        <div className='cajaCardProduct'>
            <ItemInfo product={product} />
        </div>
    )
}

export default ItemInfoContainer