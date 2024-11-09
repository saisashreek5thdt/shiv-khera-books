"use client";
import VideoPlayer from "@/components/VideoPlayer";
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
            <div className="w-full bg-chapterBG bg-cover select-none">
                <div className="h-screen chapter1BG flex items-center justify-center gap-4 transition-all duration-500">
                <VideoPlayer src={`/Demo.mp4`} />
                </div>
            </div>

            <div
                className="fixed bottom-10 right-0 w-full flex items-center justify-center cursor-pointer select-none"
                onClick={indexBtnHandler}
            >
                <h1 className="text-3xl font-medium text-gray-600">Indice</h1>
            </div>
        </>
    );
}

export default VideoPage;