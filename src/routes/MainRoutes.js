
import { Route, Routes } from 'react-router-dom';
import { BookDetails } from '../components/Home/BookDetails';
import { Cart } from '../components/Cart/Cart';
import { Home } from '../components/Home/Home';
import { MyOrders } from '../components/MyOrders/MyOrders';

export const MainRoutes = function () {
    return(
        <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/myorders" element={< MyOrders/>} />
            <Route path="/cart" element={< Cart/>} />
            <Route path="/bookdetails" element={ <BookDetails /> }></Route>
        </Routes>
    )
}