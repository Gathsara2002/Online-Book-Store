import aboutImg from '../../../assests/images/about.jpg';
import {Link} from "react-router-dom";
import api from "../../../axios/axios";
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../../../context/CartContext";

export const Product = () => {

    interface Book {
        bookId: string;
        bookName: string;
        author: string;
        price: number;
        genre: string;
        qty: number;
        view: string;
    }

    const { cartItems, setCartItems } = useContext(CartContext);
    const [allBooks, setAllBooks] = useState([]);

    //get data
    const getAllBooks = () => {

        try {
            api
                .get('/book/')
                .then((res: any) => {
                    console.log("Response from API:", res);
                    setAllBooks(res.data)
                })
                .catch(error => {
                    alert(error);
                    console.log(error);
                });
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }

    useEffect(() => {
        getAllBooks();
    }, []);

    const addToCart = (book: any) => {
        const existingItem = cartItems.find((item: any) => item.bookId === book.bookId);
        if (existingItem) {
            alert('This book is already added to the cart.');
            return;
        }
        const newCartItems = [...cartItems, { ...book, qty: 1 }];
        setCartItems(newCartItems);
    };

    return (
        <section className={"w-[100%] pt-20 pb-20 bg-slate-100"}>

            {/*top menu*/}
            <div className={"flex mt-16 ml-10 pb-3 h-14"}>

                <label className={"text-[18px] shadow-xl bg-white p-1"}>
                    Categories
                </label>
                <select className={"text-[18px] ml-4 border-blue-500 border-2 rounded outline-0"}>
                    <option value="all">All</option>
                    <option value="novel">Novel</option>
                    <option value="adventures">Adventures</option>
                    <option value="shoertStories">Short Stories</option>
                    <option value="fiction">Fiction</option>
                    <option value="horror">Horror</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="mystery">Mystery</option>
                    <option value="classics">Classics</option>
                    <option value="autobiography">Autobiography</option>
                    <option value="humor">Humor</option>
                    <option value="poetry">Poetry</option>
                    <option value="cBooks">Children's Books</option>
                </select>

                <input className={"border-blue-500 border-2 outline-0 rounded w-1/4 ml-44"}
                       placeholder={"Input book name"}/>

                <button className="transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 w-28 ml-8
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px]
                    active:brightness-90 active:translate-y-[2px]"> Search
                </button>
            </div>

            {/*books*/}
            <div className={"grid grid-cols-4 mt-12 mr-10 ml-10 p-2 gap-8"}>
                {allBooks.map((book: Book, index) => (
                    <div className={"rounded bg-white shadow-lg shadow-gray-500 p-1"}>
                        <img src={book.view ? book.view : aboutImg} alt="image" className={"w-3/4 mx-auto mt-8 h-1/2"}
                             style={{backgroundPosition: 'center', backgroundSize: 'cover'}}/>
                        <div className={"mt-10 grid grid-cols-2 pl-5 pr-5"}>
                            <p className={"font-bold"}>{book.bookName}</p>
                            <p className={"text-end text-blue-500 font-bold"}>Rs {book.price}</p>
                            <p>By {book.author}</p>
                            <p className={"text-end"}>{book.genre}</p>
                        </div>
                        <button className="transition-all px-6 py-2 border-green-500 mt-2 bg-green-400 w-full h-12
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                            <Link to={"/login"}>Add To Favourite</Link>
                        </button>

                        <button className="transition-all px-6 py-2 border-cyan-400 h-12 mt-2 bg-cyan-300 w-full
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                        onClick={()=>{
                            addToCart(book);
                        }}>
                            {/*<Link to={"/login"}>Add To Cart</Link>*/}
                            Add To Cart
                        </button>
                    </div>
                ))}
            </div>

        </section>
    );
};