import React, { use, useRef, useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { TbLogin2 } from "react-icons/tb";
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { toast, Bounce } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const { googleLogin, setUser, loginUser } = use(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef();

    const [showPassword, setShowPassword] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    const handleGoogleLogin = () => {
        googleLogin()
            .then((userCredential) => {
                setUser(userCredential.user);

                toast.success(`Login successful!`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch((error) => {
                toast.error(`Login failed: ${error.message}`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
    }

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                setUser(userCredential.user);

                toast.success(`Login successful!`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                toast.error(`Login failed: ${error.message}`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
    };

    const handleForgotPassword = () => {
        const email = emailRef.current.value;

        if (!email) {
            toast.error(`Please enter your email first.`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            return;
        }

        navigate(`/forgot-password?email=${encodeURIComponent(email)}`);
    };

    return (
        <div>
            <Helmet>
                <title>DwellMate | Login</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from white to via-violet-300 py-30">
                <div className=" max-w-md p-8 rounded-2xl shadow-2xl backdrop-blur-md bg-white/10 border border-white/30 mx-auto w-11/12">
                    <h2 className="text-3xl font-bold text-black text-center mb-6">Login</h2>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-4 text-black" />
                            <input
                                ref={emailRef}
                                name='email'
                                type="email"
                                required
                                onFocus={() => setEmailFocused(true)}
                                onBlur={(event) => setEmailFocused(event.target.value !== '')}
                                className="w-full pl-10 pr-10 pt-6 pb-2 bg-white/20 text-black placeholder-transparent focus:outline-none border-b border-black focus:border-primary"
                            />
                            <label
                                className={`absolute left-10 text-black transition-all duration-300 ${emailFocused ? 'top-1 text-xs' : 'top-4 text-sm'
                                    }`}
                            >
                                Email
                            </label>
                        </div>

                        <div className="relative">
                            <FaLock className="absolute left-3 top-4 text-black" />
                            <input
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                                required
                                onFocus={() => setPasswordFocused(true)}
                                onBlur={(event) => setPasswordFocused(event.target.value !== '')}
                                className="w-full pl-10 pr-10 pt-6 pb-2 bg-white/20 text-black placeholder-transparent focus:outline-none border-b border-black focus:border-primary"
                            />
                            <label
                                className={`absolute left-10 text-black transition-all duration-300 ${passwordFocused ? 'top-1 text-xs' : 'top-4 text-sm'
                                    }`}
                            >
                                Password
                            </label>
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-4 text-black cursor-pointer"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <div className="flex items-center justify-between text-sm text-black font-semibold">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-xs checkbox-primary" />
                                Remember Me
                            </label>
                            <Link onClick={handleForgotPassword} className="hover:underline cursor-pointer text-primary">
                                Forgot Password?
                            </Link>
                        </div>

                        <div className="form-control mt-4">
                            <button type='submit' className="btn w-full rounded-full btn-neutral transition-all duration-300">
                                Login <TbLogin2 size={20} />
                            </button>
                        </div>

                        <div className="relative my-5">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className='space-y-3 mt-5'>
                            <button onClick={handleGoogleLogin} className='btn w-full rounded-full btn-outline btn-primary'><FaGoogle size={15} /> Login with Google</button>
                        </div>
                    </form>

                    <p className="text-black text-sm text-center mt-6 font-semibold">
                        Don’t have an account?{' '}
                        <Link to="/register" className="cursor-pointer text-primary hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;