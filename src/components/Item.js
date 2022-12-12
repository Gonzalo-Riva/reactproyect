
import Link from './Link'
const Item = ({ itemData }) => {
    return (
        <div className="col mb-5">
            <div className="card h-100">

                <img className="card-img-top" src="/assets/img/camperamrlbr.jpg" alt="..." />

                <div className="card-body p-4">
                    <div className="text-center">

                        <h5 className="fw-bolder">{itemData.name}</h5>
                        <p>Stock: {itemData.stock}</p>
                        <p>{formatter.format(itemData.price)}</p>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <Link to={'/product/' + itemData.id}><div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"> Más información</a></div></Link>
                </div>
            </div>
        </div>







        /*
        
                <div>
                    <div className="article-container">
                        <div className="article-preview">
                            <img src={itemData.preview_image} alt=""></img>
                        </div>
        
                        <div className="article-info">
                            <h3>{itemData.name}</h3>
                            <p>Stock: {itemData.stock}</p>
                            <Link to={'/product/' + itemData.id}>Más información</Link>
                        </div>
        
                    </div>
                </div>*/
    )
}

export const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS'
});

export default Item

