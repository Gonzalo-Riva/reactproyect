
import Link from './Link'
const Item = ({ itemData }) => {
    return (
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
        </div>
    )
}

export default Item

