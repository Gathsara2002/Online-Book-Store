import cover from '../../../assests/images/cover.jpg';

export const Home = () => {
    return (
        // home section
        <section className={"w-[100%] mt-[80px]"}>

            {/*outer container*/}
            <div className={"flex h-auto bg-[#def9fc] pb-14"}>

                {/*description container*/}
                <div className={"w-3/5 h-auto"}>
                    <div className={"ml-24 mt-36"}>
                        <h1 className={"text-5xl font-bold"}>Embark on Literary Escapades Online:
                            <span className={"text-[#135aec]"}>
                             Where, Every Click Unveils New Worlds!
                        </span>
                        </h1>

                        <p className={"mt-14 text-[16px]"}>Find and read more books you'll and keep the track of the
                            books you want
                            to read.Be part of the world's largest community of book lovers of Goodreads.Buy your
                            favourite books for best prices</p>

                        <input type="text" placeholder={"Search Book by name"}
                               className={"border border-blue-700 rounded w-80 h-10 mt-14"}/>

                        <button className="transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 w-28 ml-5
                                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                            Search
                        </button>
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