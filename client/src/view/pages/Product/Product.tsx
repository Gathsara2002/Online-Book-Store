export const Product = () => {
    return (
        <section className={"container mt-20"}>

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
        </section>
    );
};