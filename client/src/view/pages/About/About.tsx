import aboutImg from '../../../assests/images/about.jpg';

export const About = () => {
    return (
        <section className={"container mt-20 flex"}>

            {/*image*/}
            <div className={"w-1/2 h-auto border border-black flex justify-center"}>
                <img src={aboutImg} alt="aboutImage" className={"w-2/3 mt-20"}/>
            </div>

            {/*description*/}
            <div className={"w-1/2 h-auto border border-yellow-400"}>

                <h1 className={"mt-28 ml-10 text-5xl font-bold"}>
                    Find Your Favourite
                    <span className={"text-blue-500 block pt-2"}>
                        Book Here !
                    </span>
                </h1>
                <p className={"ml-10 mt-12 text-[17px] mr-20"}>
                    At ChapterOne, we're passionate about books. Our curated collection spans genres to ensure
                    every reader finds their next adventure. We're not just a bookstore; we're a community celebrating
                    the joy of reading through personalized recommendations, author spotlights, and engaging
                    discussions. Join us in exploring the world of literature!
                </p>

                <div className={"ml-10 mt-16 border border-black w-5/6 h-auto flex justify-between"}>

                    <div className={"border border-green-400 w-1/4"}>
                        <h2 className={"text-2xl font-bold"}>1000+</h2>
                        <p className={"text-[16px]"}>Book Listing</p>
                    </div>

                    <div className={"border border-green-400 w-1/4"}>
                        <h2 className={"text-2xl font-bold"}>4000+</h2>
                        <p className={"text-[16px]"}>Register Users</p>
                    </div>

                    <div className={"border border-green-400 w-1/4"}>
                        <h2 className={"text-2xl font-bold"}>1200+</h2>
                        <p className={"text-[16px]"}>PDF Downloaded</p>
                    </div>

                </div>

            </div>

        </section>
    );
};