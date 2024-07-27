"use client"
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Banner() {
    const [imageSize, setImageSize] = useState({ width: 250, height: 200 });

    useEffect(() => {
        if (typeof window !== 'undefined') {
        setImageSize({
            width: window.innerWidth > 540 ? 400 : 280,
            height: window.innerWidth > 540 ? 300 : 200,
        });
        }
    }, []);
    return (
        <div className="banner w-full h-full flex items-center">
            <div className={`w-[${imageSize.width}] px-6 absolute z-20 text-end`}>
                <Image
                    src='/assets/images/logo.png'
                    alt="RUNSS Logo"
                    width={imageSize.width}
                    height={imageSize.height}
                />
                <div className="text-white text-md font-medium pr-6">Student Payment Portal</div>
            </div>
        </div>
    );
}