"use client";
import { useRouter } from "next/navigation";
import React from "react";

function WinnerAttitude() {
    const router = useRouter();

    const nextBtnHandler = (e) => {
        e.preventDefault();
        router.push("/lang/french/chapter1/ability");
    };

    return (
        <>
            <div className="w-full bg-chapterBG bg-cover sm:overflow-y-hidden md:overflow-hidden select-none">
                <div className="h-screen chapter1BG flex flex-col items-center justify-center gap-4 transition-all duration-500">
                    <h1 className="text-7xl font-medium text-gray-500 text-center scale-in-ver-bottom textAnimation">
                        Importance de l&apos;attitude
                    </h1>
                    <h1 className="text-6xl font-medium text-gray-500 text-center scale-in-ver-bottom textAnimation">
                        L&apos;Avantage du Gagnant
                    </h1>
                </div>
            </div>
            <div
                className="fixed bottom-10 right-0 w-full flex items-center justify-center cursor-pointer select-none"
                onClick={nextBtnHandler}
            >
                <h1 className="text-3xl font-medium text-gray-600">Suivant</h1>
            </div>
        </>
    );
}

export default WinnerAttitude;
