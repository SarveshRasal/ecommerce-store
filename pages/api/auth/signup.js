import { useState } from 'react';
import { useRouter } from 'next/router';
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function SignIn() {
    const router = useRouter();
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
            console.log(data)

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            // Redirect to home page on successful login
            await router.push('/');
            console.log('Redirecting')
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
                <div>
                    <h1>Aether Emporium</h1>
                    <p>Login To Your Account</p>
                    {error && <p className="text-red-500">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <p>Email</p>
                            <input type="text" placeholder={'Your Email Address'} value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <p>Password</p>
                            <input type="password" placeholder={'Your Secret Password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <div>
                                <input type="checkbox"/>
                                <p>Remember Me</p>
                            </div>
                            <div>
                                <a href="/forgotpassword">Forgot Password?</a>
                            </div>
                        </div>
                        <button type="submit" className={'w-full justify-center h-12 flex items-center bg-[#609966]'}>Login</button>
                    </form>
                    <div>
                        <p>Not registered yet?</p>
                        <a href="/signup">Create an account</a>
                    </div>
                </div>
            </main>
        </div>
    );
}
