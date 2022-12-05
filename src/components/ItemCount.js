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

            <div>
                <button onClick={sumar}>+</button>
                <span>{contador}</span>

                <button onClick={restar}>-</button>
            </div>
            <button onClick={() => onAdd(contador)}>Comprar</button>
            <button disabled={contador === 0} onClick={() => onAdd(contador)}>Comprar</button>
        </>
    )


}

export default Contador;