import aboutImg from '../../../assests/images/about.jpg';

export const Product = () => {
    return (
        <section className={"container mt-20 mb-20"}>

            {/*top menu*/}
            <div className={"flex border border-red-600 mt-28 ml-10"}>

                <label className={"text-[20px]"}>
                    Categories
                </label>
                <select className={"text-[20px] ml-4  border-blue-900 border-2 rounded"}>
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

                <input className={"border-blue-900 border-2 rounded w-1/4 ml-44"}
                       placeholder={"Input book name"}/>

                <button className={"ml-8"}>Search</button>

            </div>

            {/*books*/}
            <div className={"grid grid-cols-4 mt-12 border-blue-700 border mr-10 ml-10 p-2 gap-8"}>

                <div className={"border-green-400 border"}>
                    <img src={aboutImg} alt="image" className={"w-3/4 mx-auto mt-8"}/>
                    <div className={"border-pink-400 border mt-10 grid grid-cols-2 pl-5 pr-5"}>
                        <p className={"font-bold"}>Book</p>
                        <p className={"text-end text-blue-500 font-bold"}>$ 10.00</p>
                        <p>By Author</p>
                        <p className={"text-end"}>Comic</p>
                    </div>
                    <button className={"mt-2 bg-green-400 w-full"}>
                        Add To Favourite
                    </button>
                    <button className={"mt-2 bg-cyan-300 w-full"}>
                        Add To Cart
                    </button>
                </div>
                <div className={"border-green-400 border"}>
                    <img src={aboutImg} alt="image" className={"w-3/4 mx-auto mt-8"}/>
                    <div className={"border-pink-400 border mt-10 grid grid-cols-2 pl-5 pr-5"}>
                        <p className={"font-bold"}>Book</p>
                        <p className={"text-end text-blue-500 font-bold"}>$ 10.00</p>
                        <p>By Author</p>
                        <p className={"text-end"}>Comic</p>
                    </div>
                    <button className={"mt-2 bg-green-400 w-full"}>
                        Add To Favourite
                    </button>
                    <button className={"mt-2 bg-cyan-300 w-full"}>
                        Add To Cart
                    </button>
                </div>
                <div className={"border-green-400 border"}>
                    <img src={aboutImg} alt="image" className={"w-3/4 mx-auto mt-8"}/>
                    <div className={"border-pink-400 border mt-10 grid grid-cols-2 pl-5 pr-5"}>
                        <p className={"font-bold"}>Book</p>
                        <p className={"text-end text-blue-500 font-bold"}>$ 10.00</p>
                        <p>By Author</p>
                        <p className={"text-end"}>Comic</p>
                    </div>
                    <button className={"mt-2 bg-green-400 w-full"}>
                        Add To Favourite
                    </button>
                    <button className={"mt-2 bg-cyan-300 w-full"}>
                        Add To Cart
                    </button>
                </div>
                <div className={"border-green-400 border"}>
                    <img src={aboutImg} alt="image" className={"w-3/4 mx-auto mt-8"}/>
                    <div className={"border-pink-400 border mt-10 grid grid-cols-2 pl-5 pr-5"}>
                        <p className={"font-bold"}>Book</p>
                        <p className={"text-end text-blue-500 font-bold"}>$ 10.00</p>
                        <p>By Author</p>
                        <p className={"text-end"}>Comic</p>
                    </div>
                    <button className={"mt-2 bg-green-400 w-full"}>
                        Add To Favourite
                    </button>
                    <button className={"mt-2 bg-cyan-300 w-full"}>
                        Add To Cart
                    </button>
                </div>
                <div className={"border-green-400 border"}>
                    <img src={aboutImg} alt="image" className={"w-3/4 mx-auto mt-8"}/>
                    <div className={"border-pink-400 border mt-10 grid grid-cols-2 pl-5 pr-5"}>
                        <p className={"font-bold"}>Book</p>
                        <p className={"text-end text-blue-500 font-bold"}>$ 10.00</p>
                        <p>By Author</p>
                        <p className={"text-end"}>Comic</p>
                    </div>
                    <button className={"mt-2 bg-green-400 w-full"}>
                        Add To Favourite
                    </button>
                    <button className={"mt-2 bg-cyan-300 w-full"}>
                        Add To Cart
                    </button>
                </div>
                <div className={"border-green-400 border"}>
                    <img src={aboutImg} alt="image" className={"w-3/4 mx-auto mt-8"}/>
                    <div className={"border-pink-400 border mt-10 grid grid-cols-2 pl-5 pr-5"}>
                        <p className={"font-bold"}>Book</p>
                        <p className={"text-end text-blue-500 font-bold"}>$ 10.00</p>
                        <p>By Author</p>
                        <p className={"text-end"}>Comic</p>
                    </div>
                    <button className={"mt-2 bg-green-400 w-full"}>
                        Add To Favourite
                    </button>
                    <button className={"mt-2 bg-cyan-300 w-full"}>
                        Add To Cart
                    </button>
                </div>
                <div className={"border-green-400 border"}>
                    <img src={aboutImg} alt="image" className={"w-3/4 mx-auto mt-8"}/>
                    <div className={"border-pink-400 border mt-10 grid grid-cols-2 pl-5 pr-5"}>
                        <p className={"font-bold"}>Book</p>
                        <p className={"text-end text-blue-500 font-bold"}>$ 10.00</p>
                        <p>By Author</p>
                        <p className={"text-end"}>Comic</p>
                    </div>
                    <button className={"mt-2 bg-green-400 w-full"}>
                        Add To Favourite
                    </button>
                    <button className={"mt-2 bg-cyan-300 w-full"}>
                        Add To Cart
                    </button>
                </div>
                <div className={"border-green-400 border"}>
                    <img src={aboutImg} alt="image" className={"w-3/4 mx-auto mt-8"}/>
                    <div className={"border-pink-400 border mt-10 grid grid-cols-2 pl-5 pr-5"}>
                        <p className={"font-bold"}>Book</p>
                        <p className={"text-end text-blue-500 font-bold"}>$ 10.00</p>
                        <p>By Author</p>
                        <p className={"text-end"}>Comic</p>
                    </div>
                    <button className={"mt-2 bg-green-400 w-full"}>
                        Add To Favourite
                    </button>
                    <button className={"mt-2 bg-cyan-300 w-full"}>
                        Add To Cart
                    </button>
                </div>

            </div>

        </section>
    );
};