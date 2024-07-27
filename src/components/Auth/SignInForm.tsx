"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';


export default function SignInForm() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignIn = async (event: any) => {
        event.preventDefault();
        setErrorMessage('');

        // Your validation logic here
        const formData = new FormData((event.target as HTMLFormElement));
        var isValid = false;
        if (formData.get('studentId') == 'Student123456' && formData.get('password') == '123456') {
            isValid = true;
        }

        if (isValid) {
            // Assuming successful validation, redirect to the desired page
            router.push('/');
        } else {
            // Handle validation errors
            setErrorMessage('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleSignIn} className="w-full flex flex-col gap-3 items-center">
            <div className={`w-full max-w-xs mx-auto absolute top-4 p-3 bg-red-50 rounded-lg border border-red-400 text-red-600 font-medium ${errorMessage == '' ? 'hidden' : ''}`}>
                {errorMessage}
            </div>
            <legend className="text-4xl font-bold mb-4">Sign In</legend>
            <input
                type="text"
                name="studentId"
                id="studentId"
                required
                autoComplete="username"
                className="w-full max-w-sm mx-auto bg-gray-200 p-3 placeholder:text-gray-600" placeholder="Student ID" />
            <input
                type="password"
                id="password"
                name="password"
                required
                autoComplete="current-password"
                className="w-full max-w-sm mx-auto bg-gray-200 p-3 placeholder:text-gray-600" placeholder="Password" />
            <div className="mt-4 w-full max-w-sm px-6">
                <button
                    type="submit"
                    className="p-3 w-full rounded-full border-none outline-none bg-runss-blue-color hover:bg-runss-second-blue-color text-white">
                    Sign In
                </button>
            </div>
            <div className="w-full max-w-sm mx-auto text-end">
                <a href="/" className="text-sm text-runss-second-blue-color">
                    Forgot password?
                </a>
            </div>
            <div className="w-fit bg-white absolute bottom-0 right-0 py-2 px-3 flex gap-3">
                <a href="/" className="text-sm underline text-runss-second-blue-color">
                    Curriculum
                </a>
                <a href="/" className="text-sm underline text-runss-second-blue-color">
                    Time Table
                </a>
                <a href="/" className="text-sm underline text-runss-second-blue-color">
                    Portal Admin
                </a>
            </div>
        </form>
    );
}