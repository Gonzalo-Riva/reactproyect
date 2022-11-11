// Temporalmente los datos se cargan de manera local en assets
// (También podría usar localStorage pero me dio paja)
import products from '../assets/products/products.json';


export const getProducts = (category) => {
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(category === undefined ? products : products.filter(product => product.category === category))
        }, 2000) // 2000 mil = 2 segundos = timeout
    });
    return task;
}

export const getProduct = (id) => {
    const task = new Promise((resolve, reject) => {
        resolve(products.find(product => product.id === Number(id)))
    })
    return task;
}