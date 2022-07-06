import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkOutOrder, saveMyAddress, removeFromCart } from "../../redux/actions/Action";
import './Cart.css';
export const Cart = function () {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const address = useSelector((state) => state.address);
    let sum = 0, tax = 0, s_charges = 0;

    const getTotal = function () {
        for (var i = 0; i < cart.length; i++) {
            sum += Number(cart[i].price);
        }
        return sum;
    }

    const calculateTax = function () {
        tax = sum * 20 / 100;
        return tax;
    }

    const calculateShippingCharges = function () {
        if (sum > 800) {
            return s_charges = 0;
        } else {
            return 80;
        }
    }

    const checkoutOrder = function () {
        if (address.length === 0) {
            let warning = document.getElementById('warning');
            warning.hidden = false;
        } else {
            dispatch(checkOutOrder(cart));
            return (navigate('/myorders'));
        }
    }

    function removefromCart (id){
        dispatch(removeFromCart(id));
    }

    const editAddress = function () {
        let savedAddress = document.getElementById("saved-address");
        let inputAddress = document.getElementById("input-address");
        let editBtn = document.getElementById("edit-btn");
        let saveBtn = document.getElementById("save-btn");
        editBtn.hidden = true;
        saveBtn.hidden = false;
        inputAddress.hidden = false;
        savedAddress.hidden = true;
        savedAddress.value = address;

    }

    const saveAddress = function () {
        let savedAddress = document.getElementById("saved-address");
        let inputAddress = document.getElementById("input-address");
        let editBtn = document.getElementById("edit-btn");
        let saveBtn = document.getElementById("save-btn");
        editBtn.hidden = false;
        saveBtn.hidden = true;
        inputAddress.hidden = true;
        savedAddress.hidden = false;
        console.log(inputAddress.value)
        dispatch(saveMyAddress(inputAddress.value));
    }

    return (
        <>
            <div className="row mx-5">
                <div className="col-sm-6">
                    <h5>Shipping Address</h5>
                    <div id="saved-address">
                        {
                        address.length === 0 ? 
                            "No address found":
                            address
                        }
                    </div>

                    <textarea id="input-address" style={{ "width": "100%" }} className="text-area" defaultValue={address} hidden></textarea>
                    <div className='row my-3'>
                        <button id="save-btn" className="col-sm-3 my-1 btn-style me-1 p-1" onClick={saveAddress} hidden>
                            Save Address
                        </button>
                        <button id="edit-btn" className="col-sm-3 my-1 btn-style ms-1 p-1" onClick={editAddress}>
                            Edit Address
                        </button>
                    </div>
                </div>

                <div className="col-sm-6">
                    <h5>Shopping Bag</h5>

                    {
                        cart.length === 0 ? <h3>No books are added in your cart!</h3> :
                            cart.map(c => {
                                return (
                                    <div className="row my-1 p-2" key={c._id}>
                                        <img className="col-sm-3" src={c.thumbnailUrl} alt="img"></img>
                                        <div className="col-sm-6">
                                            <h6>{c.title}</h6>
                                            <div className="my-2">
                                                {c.authors.map(author => {
                                                    return (<span key={author}>{author},</span>)
                                                })}
                                            </div>
                                            <div className="mt-2">{c.price} Rs.</div>
                                            <button className="col-sm-4 mt-2 p-1 btn-style" onClick={() => removefromCart(c._id)}>
                                                Remove
                                            </button>
                                        </div>

                                    </div>
                                )
                            })
                    }
                    {
                        cart.length === 0 ? <span></span> :
                            <div>
                                <h5>Payment Info</h5>
                                <div>
                                    <span>Items price</span>
                                    <span className="float-end">&#8377; {getTotal()}</span>
                                </div>
                                <div>
                                    <span>Tax</span>
                                    <span className="float-end">&#8377; {calculateTax()} </span>
                                </div>
                                <div>
                                    <span>Shipping</span>
                                    <span className="float-end">&#8377; {calculateShippingCharges()}</span>
                                </div>
                                <hr />
                                <div>
                                    <span>Total</span>
                                    <span className="float-end">&#8377; {sum + tax + s_charges} </span>
                                </div>
                                <p id="warning" className="warning" hidden>Please enter your address!</p>
                                <div className='row my-3'>
                                    <button className="col-sm-3 my-1 btn-style p-1" onClick={checkoutOrder} >
                                        Checkout
                                    </button>
                                    <Link className='col-sm-3 my-1' to="/">
                                        <button className="btn-style p-1" >
                                            Cancel
                                        </button>
                                    </Link>
                                </div>
                            </div>
                    }


                </div>
            </div>
        </>
    )
}