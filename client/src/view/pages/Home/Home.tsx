import cover from '../../../assests/images/cover.jpg';

export const Home = () => {
    return (
        // home section
        <section className={"container mt-[80px]"}>

            {/*outer container*/}
            <div className={"border border-red-600 flex h-auto"}>

                {/*description container*/}
                <div className={"w-3/5 border border-black h-auto"}>
                    <div className={"ml-24 mt-36"}>
                        <h1 className={"text-4xl font-bold"}>Embark on Literary Escapades Online: Where, Every Click
                            Unveils New Worlds!</h1>

                        <p className={"mt-12 text-[16px]"}>Find and read more books you'll and keep the track of the
                            books you want
                            to read.Be part of the world's largest community of book lovers of Goodreads.Buy your
                            favourite books for best prices</p>

                        <input type="text" placeholder={"Search Book by name"}
                               className={"border border-blue-700 rounded w-80 h-10 mt-12"}/>
                        <button className={"mt-12 ml-10"}>search</button>
                    </div>
                </div>

                {/*image container*/}
                <div className={"w-2/5"}>
                    <img src={cover} alt="coverImage" className={"w-[300px] ml-36 mt-28 rounded-lg"}/>
                </div>

            </div>

        </section>
    );
};