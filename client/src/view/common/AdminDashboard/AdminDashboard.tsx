import profile from '../../../assests/icons/profile.png';
import {Dashboard} from "../../pages/AdminPages/Dashboard/Dashboard";
import {Product} from "../../pages/Product/Product";
import {Products} from "../../pages/AdminPages/Products/Products";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";


export const AdminDashboard = () => {
    return (
        <div>

            {/*This dashboard sidebar*/}
            <div className="bg-gray-800 text-white h-screen  flex flex-col w-1/6">
                <div className="p-4 mt-4">
                    <span className="text-2xl font-bold">Chapter</span>
                    <span className="text-2xl font-bold text-green-500">ONE</span>
                </div>
                <ul className="flex-1">
                    <li className="p-4 border-b border-gray-700">
                        <Link to={"/admin"} className="flex items-center">
                            <i className="text-xl mr-2"></i>
                            <span className="text-lg">Dashboard</span>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-700">
                        <Link to={"/admin/customer"} className="flex items-center">
                            <i className="text-xl mr-2"></i>
                            <span className="text-lg">Manage Customers</span>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-700">
                        <Link to={"/admin/products"} className="flex items-center">
                            <i className="text-xl mr-2"></i>
                            <span className="text-lg">Manage Products</span>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-700">
                        <Link to={"/admin/orders"} className="flex items-center">
                            <i className="text-xl mr-2"></i>
                            <span className="text-lg">Manage Orders</span>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-700">
                        <Link to={"/admin/payment"} className="flex items-center">
                            <i className="text-xl mr-2"></i>
                            <span className="text-lg">Manage Payments</span>
                        </Link>
                    </li>
                    <li className="p-4 mt-72">
                        <Link to={"/"} className="flex items-center">
                            <i className="text-xl mr-2"></i>
                            <span className="text-lg">Log Out</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/*nav bar*/}
            <div className={"absolute top-0 right-0 w-5/6 z-10"}>
                {/*nav bar*/}
                <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
                    <div className="w-1/3 m-auto">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-3 py-2 w-full bg-gray-700 text-white rounded-md outline-none focus:bg-gray-600"
                        />
                        <i className="bx bx-search text-xl"></i>
                    </div>
                    <div className="profile-details flex items-center">
                        <img
                            src={profile}
                            alt="Profile"
                            className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="admin_name text-lg">Admin</span>
                    </div>
                </nav>
            </div>

            {/*main content*/}
            <div>
                <Routes>
                    <Route path={"admin/"} Component={Dashboard}></Route>
                    <Route path={"admin/products"} Component={Products}></Route>
                </Routes>
            </div>

        </div>
    );
};