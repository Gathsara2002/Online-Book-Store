import React, {useState} from "react";
import api from "../../../axios/axios";
import {useNavigate} from "react-router-dom";
import {useAuthContext} from "../../../hooks/useAuthContext";

export const Signup = () => {

    const navigate = useNavigate();
    const {dispatch} = useAuthContext();
    const [errors, setErrors] = useState<Errors>({});

    //This useState hook for gathering input data
    const [inputData, setInputData] = useState({
        'userId': '',
        'name': '',
        'address': '',
        'contact': '',
        'email': '',
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

    interface Errors {
        name?: string;
        address?: string;
        contact?: string;
        email?: string;
        password?: string;
    }

    const validate = (): Errors => {
        let errors: any = {};
        if (!inputData.name.trim()) errors.name = "Full Name is required";
        if (!inputData.address.trim()) errors.address = "Address is required";
        if (!inputData.contact.trim()) errors.contact = "Contact is required";
        else if (!/^\d{10}$/.test(inputData.contact)) errors.contact = "Contact must be a valid 10-digit number";
        if (!inputData.email.trim()) errors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(inputData.email)) errors.email = "Email is invalid";
        if (!inputData.password.trim()) errors.password = "Password is required";
        return errors;
    };

    //submit button action
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(inputData);

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({})

        let newUser = {
            userId: '',
            name: inputData.name,
            address: inputData.address,
            contact: inputData.contact,
            email: inputData.email,
            password: inputData.password
        }

        //send request
        try {
            api
                .post('/user/signup', newUser)
                .then((res: any) => {
                    console.log("Response from API:", res);
                    localStorage.setItem('COnetoken', JSON.stringify(res.data));
                    dispatch({type: 'LOGIN', payload: res.data});
                    alert("Added new user successfully ! ");
                    setInputData({
                        'userId': '',
                        'name': '',
                        'address': '',
                        'contact': '',
                        'email': '',
                        'password': ''
                    });

                    // Redirect to login page
                    navigate('/login');
                })
                .catch(error => {
                    alert(error);
                    console.log(error);
                });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <section className={"w-[100%] bg-slate-100"}>
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
                            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
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
                            {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
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
                            {errors.contact && <p className="text-red-500 text-xs">{errors.contact}</p>}
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
                            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
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
                            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
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