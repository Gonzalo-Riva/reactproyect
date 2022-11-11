import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout';
import ItemListContainer from './components/ItemListContainer';
import ItemInfoContainer from "./components/ItemInfoContainer";
//import ProductInfo from './components/ProductInfo';
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductInfo from './pages/ProductInfo'

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />} path={process.env.PUBLIC_URL}></Route>
            <Route index element={<Home />}></Route>
            <Route path={process.env.PUBLIC_URL + "/shop/:category"} element={<Shop />}></Route>
            <Route path={process.env.PUBLIC_URL + "/product/:id"} element={<ProductInfo />}></Route>

        </Routes>
    </BrowserRouter>
)
export default Router
//       <Route path="product/:product" element={<ProductInfo />}></Route>