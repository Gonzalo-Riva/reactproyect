import React, { useState } from 'react'
import ItemCount from '../components/ItemCount'

const ItemInfo = ({ product }) => {
    const [compra, setCompra] = useState(false)
    const onAdd = (cantidad) => {
        console.log(`compraste ${cantidad} de items`)
        setCompra(true)
    }
    return (
        <div>
            <div className="article-container">
                <div className="article-preview">
                    <img src={require("../assets/img/camperamrlbr.jpg")} alt=""></img>
                </div>

                <div className="article-info">
                    <h3>{product.name}</h3>
                    <h3>Precio: ${product.price}</h3>
                    <p>{product.description}</p>
                    <p>Stock: {product.stock}</p>

                </div>
                {compra ? <button> ir al carrito</button> : <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />}

            </div>
        </div>
    )
}

export default ItemInfo