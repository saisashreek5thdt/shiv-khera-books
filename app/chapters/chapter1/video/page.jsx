"use client";
import { useRouter } from "next/navigation";
import React from "react";

function VideoPage() {
    const router = useRouter();

    const indexBtnHandler = (e) => {
        e.preventDefault();
        router.push("/menu");
    };

    return (
        <>
            <div className="w-full chapter1BG select-none">
                <div className="h-screen flex items-center justify-center gap-4 transition-all duration-500">
                    <video
                        className="w-full max-w-2xl rounded-lg shadow-lg"
                        controls
                        controlsList="nodownload"
                    >
                        <source src="/Demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
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

export default VideoPage;