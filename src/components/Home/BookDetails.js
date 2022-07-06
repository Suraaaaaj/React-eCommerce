import { useLocation } from 'react-router-dom';
import './Home.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/Action';


export const BookDetails = function () {

    const location = useLocation();
    const book = location.state.from;

    const dispatch = useDispatch();

    const addTOCart = () => {
        dispatch(addToCart(book));
    } 

    return (
        <>
            <div className="row mx-4">
                <img className='col-sm-3 mb-1 img-fluid' src={book.thumbnailUrl} alt="Book img" style={{ "height": "400px" }}></img>
                <div className='col-sm-9'>
                    <h4 className='my-3'>{book.title} </h4>

                    <div className="row">
                        <div className="col-4">
                            <div className='my-1'>Book Price: </div>
                            <div className='my-1'>Author Name: </div>
                            <div className='my-1'>Page count:</div>
                            <div className='my-1'>ISBN:</div>
                        </div>
                        <div className="col-8">
                            <div className='my-1'>&#8377; {book.price}</div>
                            <div className='my-1'>

                                {
                                    book.authors.map(author => {
                                        return (
                                            <span key={"key" + author}>{author},</span>
                                        )
                                    })
                                }
                            </div>
                            <div className='my-1'>{book.pageCount} </div>
                            <div className='my-1'>{book.isbn} </div>
                        </div>

                    </div>
                    <div className='row my-3'>
                        <Link className='col-sm-3 my-1' to="/cart">
                            <button className="btn-style p-1" onClick={addTOCart}>
                                Add to cart
                            </button>
                        </Link>
                        <Link className='col-sm-3 my-1' to="/cart">
                            <button className="btn-style p-1" onClick={addTOCart} >
                                Buy Now
                            </button>
                        </Link>
                    </div>
                    <p>
                        {book.shortDescription}
                    </p>
                    <p>
                        {book.longDescription}
                    </p>
                </div>
            </div>
        </>
    )
}