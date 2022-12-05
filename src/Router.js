import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout';
import ItemListContainer from './components/ItemListContainer';
import ItemInfoContainer from "./components/ItemInfoContainer";



const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path={process.env.PUBLIC_URL} element={<Layout />}>
                <Route index element={<ItemListContainer />} />
                <Route path={process.env.PUBLIC_URL + "/shop/:category"} element={<ItemListContainer />} />
                <Route path={process.env.PUBLIC_URL + "/product/:id"} element={<ItemInfoContainer />} />
            </Route>
        </Routes>
    </BrowserRouter >
)
export default Router
//       <Route path="product/:product" element={<ProductInfo />}></Route>