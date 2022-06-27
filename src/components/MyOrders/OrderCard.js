
import "./MyOrders.css";


export const OrderCard = function (props) {

    const getDate = function () {
        var date = new Date();
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();
        date = dd + '/' + mm + '/' + yyyy;
        return date;
    }

    return (
        <>
            <div className="order-card mx-5 mb-3">
                <div className="p-2 order-card-head" >
                    <span className="col">Order Placed: {getDate()}</span>
                    <span className="col float-end">Status: Delivered</span>
                </div>
                <div className="row my-1 p-2">
                    <img className="col-sm-1" src={props.book.thumbnailUrl} alt="img"></img>
                    <div className="col-sm-10">
                        <h6>{props.book.title}</h6>
                        <div className="my-2">
                            {
                                props.book.authors.map(author => {
                                    return (<span key={author}>{author},</span>)
                                })
                            }
                        </div>
                        <div className="mt-2">&#8377; {props.book.price}</div>
                    </div>
                </div>
            </div>
        </>
    )
}