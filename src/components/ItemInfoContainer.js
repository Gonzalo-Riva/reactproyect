import { useState, useEffect } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'
import ItemInfo from './ItemInfo';
import { getItems, getItemById } from "../app/api"

const ItemInfoContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        getItemById(id).then(data => {
            setProduct(data)
        })
    }, [id])
    return (
        <div className='cajaCardProduct'>
            <ItemInfo product={product} />
        </div>
    )
}

export default ItemInfoContainer