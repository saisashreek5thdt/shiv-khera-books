"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Ability() {
    const router = useRouter();

    const nextBtnHandler = (e) => {
        e.preventDefault();
        router.push("/lang/french/chapter1/video/");
    };

    return (
        <>
            <div className="w-full bg-chapterBG bg-cover select-none">
                <div className="h-screen chapter1BG flex flex-col items-center justify-center gap-4 transition-all duration-500">
                    <p className="text-4xl font-medium text-gray-500 text-center scale-in-ver-bottom textAnimation">
                        La capacité nous enseigne comment nous agissons,
                    </p>
                    <p className="text-4xl font-medium text-gray-500 text-center scale-in-ver-bottom textAnimation">
                        la motivation détermine pourquoi nous agissons,
                    </p>
                    <p className="text-4xl font-medium text-gray-500 text-center scale-in-ver-bottom textAnimation">
                        et l&apos;attitude détermine à quel point nous réussissons.
                    </p>
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

export default Ability;