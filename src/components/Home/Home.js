import React, { useEffect, useState } from "react"
import { BookCard } from "./BookCard";
import axios from "axios";
export const Home = function () {

    const [books,setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getBooksData = async function () {
        await axios.get("https://api.jsonbin.io/v3/b/62d50268b34ef41b73c676da")
            .then((res) => {
                console.log(res.data.record.books)
                setBooks(res.data.record.books);
                setIsLoading(false);
            }).catch((err) => {
                console.log("something went wrong!");
            });
    };

    useEffect(() => {
        getBooksData();
        console.log("In useEffect");
    },[])

    return (
        <>
                       
            {
                isLoading === true ? <h4 className="d-flex justify-content-center">Loading books data, Please wait!</h4>:
                <div className="mx-3 row justify-content-between">
                {   
                    books.map(book =>{
                        return(
                            <BookCard key={book._id} book={book} />
                        )
                    })
                }
            </div>
            }

        </>
    )
}