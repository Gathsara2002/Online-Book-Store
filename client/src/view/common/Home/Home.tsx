export const Home = () => {
    return (
        // home section
        <section className={"container mt-[80px]"}>

            <div className={"border border-red-600 flex h-auto"}>

                <div className={"w-3/5 border border-black h-auto"}>

                    <div className={"ml-20 mt-40"}>
                        <h1 className={"text-4xl font-bold"}>Embark on Literary Escapades Online: Where, Every Click
                            Unveils New Worlds!</h1>

                        <p className={"mt-12 text-[16px]"}>Find and read more books you'll and keep the track of the
                            books you want
                            to read.Be part of the world's largest community of book lovers of Goodreads.Buy your
                            favourite books for best prices</p>

                        <input type="text" placeholder={"Search Book by name"}
                               className={"border border-blue-700 rounded w-80 h-10"}/>
                        <button>search</button>
                    </div>

                </div>

            </div>

        </section>
    );
};