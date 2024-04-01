'use client'
import { useState } from 'react';
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            // Handle successful login, e.g., redirect to dashboard
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className={'h-screen w-screen bg-[#EDF1D6]'}>
            <NavBar displayHome={true}/>
            <main className={'grid-cols-2 grid items-center my-auto h-[93.25vh]'}>
                <div className={'items-center justify-center flex align-middle h-full'}>
                    <Image src={'/Something in Japanese.png'} alt={'A Japanese Logo'} width={640} height={640} className={'opacity-50'} />
                </div>
                <div className={'px-[7rem]'}>
                    <h1
                        className={'font-semibold text-7xl leading-[130%] text-center text-[#40513B] mb-12'}>
                        Aether<br/>Emporium
                    </h1>
                    <p
                        className={'font-[700] text-center text-3xl  text-[#525252]'}>
                        Login To Your Account
                    </p>
                    <p
                        className={'text-[#525252] text-center font-[400] text-md mb-3'}>
                        Buy Pots and Planters and Coffee and Beans.<br/> All
                        in one place. Welcome to Aether Emporium!
                    </p>
                    {error && <p className="text-red-500">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className={'px-10 my-5'}>
                            <p className={'text-left'}>Email</p>
                            <input
                                type="text"
                                placeholder={'Your Email Address'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={'w-full p-2 rounded-md border-2 border-[#E0E0E0] bg-[#00000000]'}/>
                        </div>
                        <div className={'px-10'}>
                            <p>Password</p>
                            <input
                                type="password"
                                placeholder={'Your Secret Password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={'w-full p-2 rounded-md border-2 border-[#E0E0E0] bg-[#00000000] mb-2'}/>
                        </div>
                        <div className={'flex justify-between px-10'}>
                            <div className={'flex flex-row'}>
                                <input type="checkbox"/>
                                <p className={'text-[#A1A1A1] font-[400] ml-1'}>Remember Me</p>
                            </div>
                            <div>
                                <a
                                    href="/forgotpassword" className={'text'}>Forgot Password?</a>
                            </div>
                        </div>
                        <div className={'px-10 rounded-md'}>
                            <button type="submit"
                                    className={'w-full justify-center h-12 flex items-center bg-[#609966] rounded-md mt-5 font-bold text-white'}>Login
                            </button>
                        </div>
                    </form>
                    <div className={'flex flex-row justify-center px-10 mt-2'}>
                        <p className={'mx-1'}>Not registered yet?</p>
                        <a href="/signup" className={'mx-1'}>Create an account</a>
                    </div>
                </div>
            </main>
        </div>
    );
}
