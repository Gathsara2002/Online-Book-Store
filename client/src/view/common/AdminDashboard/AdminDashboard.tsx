import profile from '../../../assests/icons/profile.png';
import {Dashboard} from "../../pages/AdminPages/Dashboard/Dashboard";
import {Products} from "../../pages/AdminPages/Products/Products";
import {Link, useParams} from "react-router-dom";
import {CustomerPage} from "../../pages/AdminPages/Customers/CustomerPage";
import {PaymentPage} from "../../pages/AdminPages/Payment/PaymentPage";
import {OrderPage} from "../../pages/AdminPages/Orders/OrderPage";

export const AdminDashboard = () => {
    const {para} = useParams();
    console.log(para);

    const setComponent = () => {
        switch (para) {
            case 'db':
                return <Dashboard/>;
            case 'products':
                return <Products/>;
            case 'customer':
                return <CustomerPage/>;
            case 'payment':
                return <PaymentPage/>;
            case 'orders':
                return <OrderPage/>;
            default:
                return <div>Welcome to the Admin Dashboard</div>;
        }
    };

    return (
        <div className="relative h-screen flex">
            {/* Sidebar */}
            <div className="bg-gray-800 text-white h-full w-1/6 fixed top-0 left-0 flex flex-col">
                <div className="p-4 mt-4">
                    <span className="text-2xl font-bold">Chapter</span>
                    <span className="text-2xl font-bold text-green-500">ONE</span>
                </div>
                <ul className="flex-1">
                    <li className="p-4 border-b border-gray-700">
                        <Link to="/admin/db" className="flex items-center">
                            <i className="text-xl mr-2"></i>
                            <span className="text-lg">Dashboard</span>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-700">
                        <Link to="/admin/customer" className="flex items-center">
                            <i className="text-xl mr-2"></i>
                            <span className="text-lg">Manage Customers</span>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-700">
                        <Link to="/admin/products" className="flex items-center">
                            <i className="text-xl mr-2"></i>
                            <span className="text-lg">Manage Products</span>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-700">
                        <Link to="/admin/orders" className="flex items-center">
                            <i className="text-xl mr-2"></i>
                            <span className="text-lg">Manage Orders</span>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-gray-700">
                        <Link to="/admin/payment" className="flex items-center">
                            <i className="text-xl mr-2"></i>
                            <span className="text-lg">Manage Payments</span>
                        </Link>
                    </li>
                    <li className="p-4 mt-80">
                        <Link to="/" className="flex items-center">
                            <i className="text-xl mr-2"></i>
                            <span className="text-lg">Log Out</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Navbar */}
            <div className="fixed top-0 right-0 w-5/6 z-10 bg-gray-800 text-white p-4">
                <nav className="flex justify-between items-center">
                    <div className="w-1/3">
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

            {/* Main Content */}
            <div className="absolute right-0 mt-16 w-5/6 h-auto overflow-auto">
                {setComponent()}
            </div>
        </div>
    );
};
