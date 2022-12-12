import React, { useState } from "react"

const Contador = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial);
    const restar = () => {
        if (contador > 0) {

            setContador(contador - 1)
        }
    }
    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    return (
        <>

            <div className="d-flex flex-row bd-highlight align-items-center">
                <button className="btn btn-outline-dark flex-shrink-0 me-2" type="button" onClick={sumar}>+</button>
                <span className="me-2">{contador}</span>

                <button className="btn btn-outline-dark flex-shrink-0 me-4" type="button" onClick={restar}>-</button>
                <button className="btn btn-outline-dark flex-shrink-0" type="button" disabled={contador === 0} onClick={() => onAdd(contador)}>
                    <i className="bi-cart-fill me-1"></i>
                    Comprar
                </button>
            </div>


        </>
    )


}

export default Contador;