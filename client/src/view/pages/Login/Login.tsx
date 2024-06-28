import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import api from "../../../axios/axios";
import {useAuthContext} from "../../../hooks/useAuthContext";


export const Login = () => {

        const navigate = useNavigate();
        const {dispatch} = useAuthContext();

        //this states for username,password
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');


        //this method is for check login process
        const handleLogin = () => {
            console.log(username);
            console.log(password);

            //navigate to admin
            if (username === 'Admin' && password === '1234') {
                navigate('/admin/db');
            }

            //navigate to user

        }

        const handleUserLogin = () => {
            try {
                api
                    .post('/user/login')
                    .then((res: any) => {
                        console.log("Response from API:", res);
                        localStorage.setItem('COnetoken', JSON.stringify(res.data.token));
                        dispatch({type: 'LOGIN', payload: res.data});
                        alert("Login Success ! ");
                        navigate('/');
                    })
                    .catch(error => {
                        alert(error);
                        console.log(error);
                    });
            } catch (error) {
                console.error('Error submitting data:', error);
            }

        }


        return (
            <section className={"w-[100%] bg-slate-100"}>
                <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                    <div
                        className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-purple-600 lg:max-w-xl">
                        <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                            Login
                        </h1>
                        <form className="mt-6">
                            <div className="mb-2">
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-semibold text-gray-800">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={event => setUsername(event.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-semibold text-gray-800">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <a
                                href="#"
                                className="text-xs text-purple-600 hover:underline">
                                Forget Password?
                            </a>
                            <div className="mt-6">
                                <button
                                    onClick={handleLogin}
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                    Login
                                </button>
                            </div>
                        </form>

                        <p className="mt-8 text-xs font-light text-center text-gray-700">
                            {" "}
                            Don't have an account?{" "}
                            <Link to={"/signup"} className={"font-medium text-purple-600 hover:underline"}>Sign up</Link>
                        </p>
                    </div>
                </div>
            </section>
        )
            ;
    }
;