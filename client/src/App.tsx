import React from 'react';
import './App.css';
import {Login} from "./view/pages/Login/Login";
import {Signup} from "./view/pages/Signup/Signup";
import {DefaultView} from "./view/common/DefaultView/DefaultView";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AdminDashboard} from "./view/common/AdminDashboard/AdminDashboard";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/*"} Component={DefaultView}> </Route>
                    <Route path={"/login"} Component={Login}> </Route>
                    <Route path={"/signup"} Component={Signup}> </Route>
                </Routes>
            </BrowserRouter>
            {/*<BrowserRouter>*/}
            {/*    <AdminDashboard></AdminDashboard>*/}
            {/*</BrowserRouter>*/}
        </>
    );
}

export default App;
