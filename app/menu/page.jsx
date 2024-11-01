import Image from "next/image";
import React from "react";

function Menu() {
    return (
        <>
            <div className="bg-[#e1dcd8] max-w-[85rem] h-screen mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                    <div>
                        <Image
                            width={1000}
                            height={400}
                            className="w-96 object-cover"
                            src="/navBG.png"
                            alt="Hero Image"
                        />
                    </div>
                    <div>
                        <div className="mt-8 flex flex-col gap-5">
                            <div className="flex flex-col gap-2 cursor-pointer">
                                <h1 className="text-lg font-medium">Chapter 1</h1>
                                <h1 className="text-3xl font-semibold">Importance of Attitude</h1>
                                <h1 className="text-2xl font-medium">Winner&apos;s Edge</h1>
                            </div>
                            <div className="flex flex-col gap-2 cursor-pointer">
                                <h1 className="text-lg font-medium">Chapter 2</h1>
                                <h1 className="text-3xl font-semibold">Buil A Positive Attitude</h1>
                                <h1 className="text-2xl font-medium">Reaching Your Destination</h1>
                            </div>
                            <div className="flex flex-col gap-2 cursor-pointer">
                                <h1 className="text-lg font-medium">Chapter 3</h1>
                                <h1 className="text-3xl font-semibold">Success</h1>
                                <h1 className="text-2xl font-medium">Winning Strategies</h1>
                            </div>
                            <div className="flex flex-col gap-2 cursor-pointer">
                                <h1 className="text-lg font-medium">Chapter 4</h1>
                                <h1 className="text-3xl font-semibold">Attribute of Success</h1>
                                <h1 className="text-2xl font-medium">Path of Success</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;
