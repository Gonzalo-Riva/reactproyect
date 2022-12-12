import React, { useState } from 'react'
import ItemCount from '../components/ItemCount'
import { formatter } from './Item'

const ItemInfo = ({ product }) => {
    const [compra, setCompra] = useState(false)
    const onAdd = (cantidad) => {
        console.log(`compraste ${cantidad} de items`)
        setCompra(true)
    }
    return (

        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..." /></div>
                    <div className="col-md-6">
                        <div className="small mb-1"><span className="badge bg-primary">{product.category === undefined ? "" : product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span></div>
                        <h1 className="display-5 fw-bolder">{product.name}</h1>
                        <div className="fs-5 mb-5">
                            <span>{formatter.format(product.price)}</span>
                        </div>
                        <p className="lead">{product.description}</p>
                        {compra ?
                            <button className="btn btn-outline-dark flex-shrink-0" type="button" disabled="true">
                                <i className="bi-cart-fill me-1"></i>
                                Ir al carrito
                            </button> :
                            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
                        }
                    </div>
                </div>
            </div>
        </section>
        /*
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
                </div>*/
    )
}

export default ItemInfo