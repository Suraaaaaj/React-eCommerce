import { useSelector } from "react-redux";
import { OrderCard } from "./OrderCard";

export const MyOrders = function(){
    const orders = useSelector((state)=> state.previousOrders);

    return (
        <>
            {   
                orders.length === 0 ? <h3 className="d-flex justify-content-center mt-5">You haven't order anything yet!</h3> :
                orders.map(order=>{
                    return (
                        <OrderCard key={order._id} book={order}/>
                    )
                })
            }
        </>
    )
}