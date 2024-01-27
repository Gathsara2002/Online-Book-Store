import profile from '../../../assests/icons/profile.png';
import upArrow from '../../../assests/icons/up-arrow.png';
import user from '../../../assests/icons/user.png';


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

            {/*display content*/}
            <div className={"absolute bottom-0 right-0 bg-slate-100 w-5/6 h-[666px]"}>
                <div className={"m-10 h-[586px]"}>

                    <div className={"flex items-center justify-between flex-wrap px-5 mb-[26px]"}>
                        <div
                            className={"flex items-center justify-center  w-1/4 bg-white p-[14px] m-5 rounded-2xl shadow shadow-gray-400"}>
                            <div className={"mr-3"}>
                                <div className={"text-[20px] font-medium"}>Registered Users</div>
                                <div className="inline-block text-3xl font-medium">66</div>
                                <div className="flex justify-center">
                                    <img src={upArrow} alt="img" className={"mt-2"}/>
                                    <span className="text-[12px] mt-3">Up from today</span>
                                </div>
                            </div>
                            <img src={user} alt="user" className={"w-[50px] ml-4"}/>
                        </div>
                        <div
                            className={"flex items-center justify-center  w-1/4 bg-white p-[14px] m-5 rounded-2xl shadow shadow-gray-400"}>
                            <div className={"mr-3"}>
                                <div className={"text-[20px] font-medium"}>Registered Users</div>
                                <div className="inline-block text-3xl font-medium">66</div>
                                <div className="flex justify-center">
                                    <img src={upArrow} alt="img" className={"mt-2"}/>
                                    <span className="text-[12px] mt-3">Up from today</span>
                                </div>
                            </div>
                            <img src={user} alt="user" className={"w-[50px] ml-4"}/>
                        </div>
                        <div
                            className={"flex items-center justify-center  w-1/4 bg-white p-[14px] m-5 rounded-2xl shadow shadow-gray-400"}>
                            <div className={"mr-3"}>
                                <div className={"text-[20px] font-medium"}>Registered Users</div>
                                <div className="inline-block text-3xl font-medium">66</div>
                                <div className="flex justify-center">
                                    <img src={upArrow} alt="img" className={"mt-2"}/>
                                    <span className="text-[12px] mt-3">Up from today</span>
                                </div>
                            </div>
                            <img src={user} alt="user" className={"w-[50px] ml-4"}/>
                        </div>
                    </div>
                    <div className={"flex items-center justify-between flex-wrap px-5 mb-[26px]"}>
                        <div
                            className={"flex items-center justify-center  w-1/4 bg-white p-[14px] m-5 rounded-2xl shadow shadow-gray-400"}>
                            <div className={"mr-3"}>
                                <div className={"text-[20px] font-medium"}>Registered Users</div>
                                <div className="inline-block text-3xl font-medium">66</div>
                                <div className="flex justify-center">
                                    <img src={upArrow} alt="img" className={"mt-2"}/>
                                    <span className="text-[12px] mt-3">Up from today</span>
                                </div>
                            </div>
                            <img src={user} alt="user" className={"w-[50px] ml-4"}/>
                        </div>
                        <div
                            className={"flex items-center justify-center  w-1/4 bg-white p-[14px] m-5 rounded-2xl shadow shadow-gray-400"}>
                            <div className={"mr-3"}>
                                <div className={"text-[20px] font-medium"}>Registered Users</div>
                                <div className="inline-block text-3xl font-medium">66</div>
                                <div className="flex justify-center">
                                    <img src={upArrow} alt="img" className={"mt-2"}/>
                                    <span className="text-[12px] mt-3">Up from today</span>
                                </div>
                            </div>
                            <img src={user} alt="user" className={"w-[50px] ml-4"}/>
                        </div>
                        <div
                            className={"flex items-center justify-center  w-1/4 bg-white p-[14px] m-5 rounded-2xl shadow shadow-gray-400"}>
                            <div className={"mr-3"}>
                                <div className={"text-[20px] font-medium"}>Registered Users</div>
                                <div className="inline-block text-3xl font-medium">66</div>
                                <div className="flex justify-center">
                                    <img src={upArrow} alt="img" className={"mt-2"}/>
                                    <span className="text-[12px] mt-3">Up from today</span>
                                </div>
                            </div>
                            <img src={user} alt="user" className={"w-[50px] ml-4"}/>
                        </div>
                    </div>
                    <div className={"flex items-center justify-between flex-wrap px-5 mb-[26px]"}>
                        <div
                            className={"flex items-center justify-center  w-1/4 bg-white p-[14px] m-5 rounded-2xl shadow shadow-gray-400"}>
                            <div className={"mr-3"}>
                                <div className={"text-[20px] font-medium"}>Registered Users</div>
                                <div className="inline-block text-3xl font-medium">66</div>
                                <div className="flex justify-center">
                                    <img src={upArrow} alt="img" className={"mt-2"}/>
                                    <span className="text-[12px] mt-3">Up from today</span>
                                </div>
                            </div>
                            <img src={user} alt="user" className={"w-[50px] ml-4"}/>
                        </div>
                        <div
                            className={"flex items-center justify-center  w-1/4 bg-white p-[14px] m-5 rounded-2xl shadow shadow-gray-400"}>
                            <div className={"mr-3"}>
                                <div className={"text-[20px] font-medium"}>Registered Users</div>
                                <div className="inline-block text-3xl font-medium">66</div>
                                <div className="flex justify-center">
                                    <img src={upArrow} alt="img" className={"mt-2"}/>
                                    <span className="text-[12px] mt-3">Up from today</span>
                                </div>
                            </div>
                            <img src={user} alt="user" className={"w-[50px] ml-4"}/>
                        </div>
                        <div
                            className={"flex items-center justify-center  w-1/4 bg-white p-[14px] m-5 rounded-2xl shadow shadow-gray-400"}>
                            <div className={"mr-3"}>
                                <div className={"text-[20px] font-medium"}>Registered Users</div>
                                <div className="inline-block text-3xl font-medium">66</div>
                                <div className="flex justify-center">
                                    <img src={upArrow} alt="img" className={"mt-2"}/>
                                    <span className="text-[12px] mt-3">Up from today</span>
                                </div>
                            </div>
                            <img src={user} alt="user" className={"w-[50px] ml-4"}/>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};