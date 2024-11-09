"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Ability() {
    const router = useRouter();

    const nextBtnHandler = (e) => {
        e.preventDefault();
        router.push("/chapters/chapter1/video/");
    };

    return (
        <>
            <div className="w-full bg-chapterBG bg-cover select-none">
                <div className="h-screen chapter1BG flex flex-col items-center justify-center gap-4 transition-all duration-500">
                    <p className="text-4xl font-medium text-gray-500 text-center scale-in-ver-bottom textAnimation">
                        Ability teaches us how we do,
                    </p>
                    <p className="text-4xl font-medium text-gray-500 text-center scale-in-ver-bottom textAnimation">
                        motivation determines why we do,
                    </p>
                    <p className="text-4xl font-medium text-gray-500 text-center scale-in-ver-bottom textAnimation">
                        and attitude decides how well we do.
                    </p>
                </div>
            </div>
            <div
                className="fixed bottom-10 right-0 w-full flex items-center justify-center cursor-pointer select-none"
                onClick={nextBtnHandler}
            >
                <h1 className="text-3xl font-medium text-gray-600">Next</h1>
            </div>
        </>
    );
}

export default Ability;