import image from '../../../assests/images/about.jpg';

export const ItemTemplate = () => {
    return (
        <section className={"container flex mt-20"}>

            {/*image*/}
            <div className={"w-1/4 border border-green-400 mt-36 ml-auto"}>
                <img src={image} alt="" className={"object-contain ml-36 w-3/4"}/>
            </div>

            {/*description*/}
            <div className={"w-2/4 border border-red-400  mt-28 mr-auto"}>
                <div className={"ml-24 mt-8"}>
                    <h1 className={"text-3xl font-medium underline uppercase"}>Book name</h1>
                    <h3 className={"mt-4 text-[18px] italic"}>In stock</h3>
                    <h3 className={"mt-5 text-3xl font-medium"}>LKR 1000</h3>
                    <h3 className={"mt-5 text-[18px] uppercase font-medium"}>Information</h3>
                    <p className={"mt-3 font-bold"}>+ Language :</p>
                    <p className={"mt-3 font-bold"}>+ Author :</p>
                    <p className={"mt-3 font-bold"}>+ Genre :</p>
                </div>
            </div>

        </section>
    );
};