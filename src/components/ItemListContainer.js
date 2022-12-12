import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import List from './Itemlist'
import { getItems } from "../app/api"

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const { category } = useParams();
    useEffect(() => {

        getItems().then(data => {
            setProducts(data)
        })
    }, [category]);

    return (<div><List products={products} /></div>)
}

export default ItemListContainer;