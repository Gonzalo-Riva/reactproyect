import React, { useState } from "react"

const Contador = () => {

    const [contador, setContador] = useState(0);

    return <div>
        <p>Agregar al carrito {contador} veces</p>
        <button onClick={() => { setContador(contador + 1) }}>Agregar</button>

        <button onClick={() => { setContador(0) }}>Restablecer</button>

        <button onClick={() => { setContador(contador - 1) }}>Quitar</button>

    </div>



}

export default Contador;