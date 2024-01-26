export const AdminDashboard = () => {
    return (
        <div>
            {/*This dashboard sidebar*/}
            <div className="bg-gray-800 text-white h-screen w-64 flex flex-col">
                <div className="p-4 mt-4">
                    <span className="text-2xl font-bold">Chapter</span>
                    <span className="text-2xl font-bold text-green-500">ONE</span>
                </div>
                <ul className="flex-1">
                    <li className="p-4 border-b border-gray-700">
                        <a href="#" className="flex items-center">
                            <i className="bx bx-grid-alt text-xl mr-2"></i>
                            <span className="text-lg">Dashboard</span>
                        </a>
                    </li>
                    <li className="p-4 border-b border-gray-700">
                        <a href="#" className="flex items-center">
                            <i className="bx bxs-user text-xl mr-2"></i>
                            <span className="text-lg">Manage Customers</span>
                        </a>
                    </li>
                    <li className="p-4 border-b border-gray-700">
                        <a href="#" className="flex items-center">
                            <i className="bx bx-user-circle text-xl mr-2"></i>
                            <span className="text-lg">Manage Products</span>
                        </a>
                    </li>
                    <li className="p-4 border-b border-gray-700">
                        <a href="#" className="flex items-center">
                            <i className="bx bx-car text-xl mr-2"></i>
                            <span className="text-lg">Manage Orders</span>
                        </a>
                    </li>
                    <li className="p-4 border-b border-gray-700">
                        <a href="#" className="flex items-center">
                            <i className="bx bxs-arrow-to-left text-xl mr-2"></i>
                            <span className="text-lg">Manage Payment</span>
                        </a>
                    </li>
                    <li className="p-4 mt-72">
                        <a href="#" className="flex items-center">
                            <i className="bx bx-log-out text-xl mr-2"></i>
                            <span className="text-lg">Log out</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};