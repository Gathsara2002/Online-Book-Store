import React, {useState} from "react";

export const Signup = () => {

    //This useState hook for gathering input data
    const [inputData, setInputData] = useState({
        'userId': '',
        'name': '',
        'address': '',
        'contact': '',
        'email': '',
        'username': '',
        'password': ''
    });

    //handle input data
    const handleInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {name, value} = e.target;
        setInputData({
            ...inputData,
            [name]: value
        })
    }

    //submit button action
    const handleSubmit = () => {
        console.log(inputData);
    };


    return (
        <section className={"container bg-slate-100"}>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">

                <div
                    className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-purple-600 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                        Sign Up
                    </h1>

                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold text-gray-800">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name='name'
                                onChange={handleInputData}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="address"
                                className="block text-sm font-semibold text-gray-800">
                                Address
                            </label>
                            <input
                                type="text"
                                name='address'
                                onChange={handleInputData}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="contact"
                                className="block text-sm font-semibold text-gray-800">
                                Contact
                            </label>
                            <input
                                type="number"
                                name='contact'
                                onChange={handleInputData}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800">
                                Email
                            </label>
                            <input
                                type="email"
                                name='email'
                                onChange={handleInputData}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="username"
                                className="block text-sm font-semibold text-gray-800">
                                Username
                            </label>
                            <input
                                type="text"
                                name='username'
                                onChange={handleInputData}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800">
                                Password
                            </label>
                            <input
                                type="password"
                                name='password'
                                onChange={handleInputData}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                        </div>
                        <div className="mt-6">
                            <button onClick={handleSubmit}
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Sign Up
                            </button>
                        </div>
                    </form>

                </div>

            </div>
        </section>
    );
};