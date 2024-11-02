"use client";
import { useRouter } from "next/navigation";
import React from "react";

function WinnerAttitude() {
    const router = useRouter();

    const indexBtnHandler = (e) => {
        e.preventDefault();
        router.push("/menu");
    };

    return (
        <>
            <div className="w-full chapter1BG select-none">
                <div className="h-screen flex flex-col items-center justify-center gap-4">
                    <h1 className="text-7xl font-medium text-gray-500 scale-in-ver-bottom">
                        Importance of Attitude
                    </h1>
                    <h1 className="text-6xl font-medium text-gray-500 scale-in-ver-bottom">
                        Winner&apos;s Edge
                    </h1>
                </div>
            </div>
            <div
                className="fixed bottom-10 right-0 w-full flex items-center justify-center cursor-pointer select-none"
                onClick={indexBtnHandler}
            >
                <h1 className="text-3xl font-medium text-gray-600">Index</h1>
            </div>
        </>
    );
}

export default WinnerAttitude;
