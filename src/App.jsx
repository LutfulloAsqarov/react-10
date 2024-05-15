import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Products from "./pages/admin/products/Products";
import Users from "./pages/admin/users/Users";
import Posts from "./pages/admin/posts/Posts";
import Auth from "./pages/auth/Auth";
import Login from "./pages/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/" element={<Auth />}>
                    <Route path="admin" element={<Admin />}>
                        <Route path="products" element={<Products />}></Route>
                        <Route path="users" element={<Users />} />
                        <Route path="posts" element={<Posts />} />
                    </Route>
                </Route>
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;
