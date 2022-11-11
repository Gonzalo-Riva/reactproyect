import React from 'react'
import ItemCount from '../components/ItemCount'

const ItemInfo = ({ product }) => {
    console.log(product)
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

            </div>
        </div>
    )
}

export default ItemInfo