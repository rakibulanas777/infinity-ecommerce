/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loading-icons";

const Login = () => {

    const [loading, setLoading] = useState(false);
    const handleLogin = async (event) => {
        setLoading(true);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const userData = { email, password };
        const response = await fetch("http://localhost:3000/api/v1/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });
        const userRes = await response.json();
        if (userRes.status === "success") {
            // const user = userRes.data.user;
            // localStorage.setItem("user", JSON.stringify({ user, expirationTime }));
            // dispatch(loginSuccess(user));
            toast.success(userRes.message);
            form.reset();
            // router.push("/");
        } else {
            toast.error(userRes.message);
        }
        setLoading(false);
    };

    return (
        <>
            {/* <Navbar /> */}
            <div className="overflow-x-hidden">
                <div className="w-[100vw] h-[100vh]  flex flex-col items-center justify-center bg ">
                    <div className="w-[35rem]  shadow-md shadow-gray-100 rounded-[5px] bg-[#F3F7FA]">
                        <h1 className="text-center mt-[2rem] mb-[2rem] text-black text-[26px] font-semibold">
                            Login Here
                        </h1>
                        <form onSubmit={handleLogin} className="w-[80%] mx-auto">
                            <div className="mb-[2rem] text-xl">
                                <label
                                    className="block ml-[5px] font-semibold text-[18px] mb-[8px] mt-[8px]"
                                    htmlFor="name"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-[100%] rounded-[6px] border-1 outline-none py-4 px-2"
                                    name="email"
                                    placeholder="Enter your email "
                                    autoSave="false"
                                />
                            </div>
                            <div className="mb-[1.5rem]">
                                <label
                                    className="block ml-[5px] font-semibold text-[18px] mb-[8px] mt-[8px]"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="w-[100%] rounded-[6px] border-1 outline-none py-4 px-2"
                                    name="password"
                                    placeholder="Enter your Password"
                                />
                                <div
                                    // onClick={() => {
                                    //     router.push("/forgetpassword");
                                    // }}
                                    className="text-right text-xl mt-[1rem] cursor-pointer font-bold text-red-500 "
                                >
                                    Forgot Password?
                                </div>
                            </div>

                            {!loading && (
                                <button className="w-[100%] mb-[2rem] rounded-[6px] font-bold text-white bg-red-500 px-3 py-3">
                                    Login
                                </button>
                            )}
                            {loading && (
                                <button
                                    type="button"
                                    disabled
                                    className="w-[100%] cursor-not-allowed mb-[2rem] rounded-[6px] font-bold text-white bg-red-500 px-3 py-3"
                                >
                                    <ThreeDots className="w-[30px] mx-auto text-center h-[30px]" />
                                </button>
                            )}
                        </form>
                        <div className="text-center text-xl font-semibold mb-[3rem] ">
                            <span>Don't have account? </span>
                            <span
                                // onClick={() => {
                                //     router.push("/signin");
                                // }}
                                className="text-red-600 cursor-pointer"
                            >
                                Sign Up Now
                            </span>
                        </div>
                    </div>
                </div>

                <ToastContainer position="top-center" />
            </div>

        </>
    );
};

export default Login;
