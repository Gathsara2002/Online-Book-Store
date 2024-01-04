import aboutImg from '../../../assests/images/about.jpg';

export const About = () => {
    return (
        <section>

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
                        every reader finds their next adventure. We're not just a bookstore; we're a community
                        celebrating
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

            <h1 className={"text-center text-3xl font-bold mt-32"}>Our Customers</h1>

            {/*reviews*/}
            <section className={"container mt-16 flex justify-evenly mb-16"}>

                {/*review 1*/}
                <div className="flex items-start w-1/4 border rounded  shadow-lg shadow-gray-400 p-4">
                    <div className="flex-shrink-0">
                        <div className="inline-block relative">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                                     src="https://picsum.photos/id/646/200/200" alt="Profile picture"/>
                                <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                            </div>
                            <svg
                                className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path
                                    d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z"/>
                            </svg>
                        </div>
                    </div>

                    <div className="ml-6">
                        <p className="flex items-baseline">
                            <span className="text-gray-600 font-bold">Mary T.</span>
                            <span className="ml-2 text-green-600 text-xs">Verified Buyer</span>
                        </p>
                        <div className="flex items-center mt-1">
                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                        </div>

                        <div className="flex items-center mt-4 text-gray-600">
                            <div className="flex items-center">
                                <span className="text-sm">Product Quality</span>
                                <div className="flex items-center ml-2">
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                </div>
                            </div>

                            <div className="flex items-center ml-4">
                                <span className="text-sm">Purchasing Experience</span>
                                <div className="flex items-center ml-2">
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
                                magnam porro quasi. Ab aliquam aperiam beatae consectetur doloremque error, et harum
                                minima obcaecati perspiciatis repellendus veniam vero vitae. Accusantium, cumque?</p>
                        </div>

                    </div>
                </div>

                {/*review 2*/}
                <div className="flex items-start w-1/4 border rounded  shadow-lg shadow-gray-400 p-4">
                    <div className="flex-shrink-0">
                        <div className="inline-block relative">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                                     src="https://picsum.photos/id/646/200/200" alt="Profile picture"/>
                                <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                            </div>
                            <svg
                                className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path
                                    d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z"/>
                            </svg>
                        </div>
                    </div>

                    <div className="ml-6">
                        <p className="flex items-baseline">
                            <span className="text-gray-600 font-bold">Mary T.</span>
                            <span className="ml-2 text-green-600 text-xs">Verified Buyer</span>
                        </p>
                        <div className="flex items-center mt-1">
                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                        </div>

                        <div className="flex items-center mt-4 text-gray-600">
                            <div className="flex items-center">
                                <span className="text-sm">Product Quality</span>
                                <div className="flex items-center ml-2">
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                </div>
                            </div>

                            <div className="flex items-center ml-4">
                                <span className="text-sm">Purchasing Experience</span>
                                <div className="flex items-center ml-2">
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
                                magnam porro quasi. Ab aliquam aperiam beatae consectetur doloremque error, et harum
                                minima obcaecati perspiciatis repellendus veniam vero vitae. Accusantium, cumque?</p>
                        </div>

                    </div>
                </div>

                {/*review 3*/}
                <div className="flex items-start w-1/4 border rounded  shadow-lg shadow-gray-400 p-4">
                    <div className="flex-shrink-0">
                        <div className="inline-block relative">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                                     src="https://picsum.photos/id/646/200/200" alt="Profile picture"/>
                                <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                            </div>
                            <svg
                                className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path
                                    d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z"/>
                            </svg>
                        </div>
                    </div>

                    <div className="ml-6">
                        <p className="flex items-baseline">
                            <span className="text-gray-600 font-bold">Mary T.</span>
                            <span className="ml-2 text-green-600 text-xs">Verified Buyer</span>
                        </p>
                        <div className="flex items-center mt-1">
                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                            <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                        </div>

                        <div className="flex items-center mt-4 text-gray-600">
                            <div className="flex items-center">
                                <span className="text-sm">Product Quality</span>
                                <div className="flex items-center ml-2">
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                </div>
                            </div>

                            <div className="flex items-center ml-4">
                                <span className="text-sm">Purchasing Experience</span>
                                <div className="flex items-center ml-2">
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-yellow-600"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                    <svg className="w-3 h-3 fill-current text-gray-400"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
                                magnam porro quasi. Ab aliquam aperiam beatae consectetur doloremque error, et harum
                                minima obcaecati perspiciatis repellendus veniam vero vitae. Accusantium, cumque?</p>
                        </div>

                    </div>
                </div>

            </section>

        </section>

    );
};