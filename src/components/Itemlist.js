import Item from "./Item"

const List = ({ products }) => {
    return (
        <div className="products-container">
            {
                products.map((product) => {
                    return <Item itemData={product} key={product.id} />
                })
            }
        </div>
    )
}

export default List