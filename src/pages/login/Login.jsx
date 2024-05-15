import { useNavigate } from "react-router-dom";
import axios from "../../api";
import React, { useState } from "react";

const Login = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState("atuny0");
    const [password, setPassword] = useState("9uQFF1Lh");

    const handleLogin = (e) => {
        e.preventDefault();

        let user = { username, password };

        axios
            .post("/auth/login", user)
            .then((res) => {
                localStorage.setItem("x-auth-token", res.data.token);
                navigate("/admin/products");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleLogin} action="">
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    name=""
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name=""
                />
                <button>log in</button>
            </form>
        </div>
    );
};

export default Login;
