import { Link } from 'react-router-dom';
import './Home.css';
export const BookCard = function (props) {
    
    return (
        <>  
            <div className="card col-sm-2 col-md-3 col-lg-2 mx-3 mb-4 p-2 book-card">
                <img className="book-img mb-1" src={props.book.thumbnailUrl} alt="*Cover not available"></img>
                <strong className="book-title">{String(props.book.title)===undefined?'*No title available':String(props.book.title).slice(0,20)}</strong>
                <div className="mb-2">
                    {props.book.longDescription === undefined ? "*No description availabe" :
                    String(props.book.longDescription).slice(0,20)}
                    {props.book.longDescription !== undefined && String(props.book.longDescription).length > 20 ? "...":""}
                </div>
                <Link to="/bookdetails" state={{ from: props.book }}>
                    <button className="btn-style" >
                        Buy Now
                    </button>
                </Link>
            </div>
        </>
    )
}