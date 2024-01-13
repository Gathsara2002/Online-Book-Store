import image from '../../../assests/images/about.jpg';

export const ItemTemplate = () => {
    return (
        <section className={"container flex pt-20 pb-28 bg-slate-100"}>

            {/*image*/}
            <div className={"w-1/4 mt-40 ml-auto z-10"}>
                <img src={image} alt="" className={"object-contain ml-36 w-3/4"}/>
            </div>

            {/*description*/}
            <div className={"w-2/4 mt-28 mr-auto bg-[#dbf6f1] pb-20 rounded-lg shadow-md shadow-teal-700"}>
                <div className={"ml-24 mt-12"}>

                    <h1 className={"text-3xl font-medium underline underline-offset-4 decoration-sky-500 uppercase"}>Book
                        name</h1>
                    <h3 className={"mt-4 text-[18px] italic text-green-500"}>In stock</h3>
                    <h3 className={"mt-5 text-3xl font-medium"}>LKR 1000</h3>
                    <h3 className={"mt-5 text-[18px] uppercase font-medium"}>Information</h3>
                    <p className={"mt-3 font-bold"}>+ Language :</p>
                    <p className={"mt-3 font-bold"}>+ Author :</p>
                    <p className={"mt-3 font-bold"}>+ Genre :</p>

                    <div className={"flex mt-12"}>

                        <div className={"flex h-12 w-60 cursor-pointer rounded text-center text-2xl gap-1"}>
                            <div className={"border-4 border-cyan-300 hover:bg-cyan-300 flex-1 rounded"}>-</div>
                            <div className={"bg-white flex-1 rounded"}>1</div>
                            <div className={"border-4 border-cyan-300 hover:bg-cyan-300 flex-1 rounded"}>+</div>
                        </div>

                        <button
                            className="w-60 ml-8 transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px]
                            active:brightness-90 active:translate-y-[2px]"> BUY NOW
                        </button>
                    </div>

                </div>
            </div>

        </section>
    );
};