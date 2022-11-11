import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../services/products'
import List from './Itemlist'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const { category } = useParams();
    console.log(category)
    useEffect(() => {
        getProducts(category).then(data => {
            setProducts(data)
        })
    }, [category]);

    return (<div><List products={products} /></div>)
}

export default ItemListContainer;