"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import { Languages } from "lucide-react";
import Modal from "@/components/Modal";
import Lang from "@/components/Languages";

function Menu() {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const chapterOneLinkHandler = (e) => {
    e.preventDefault();
    router.push("/chapters/chapter1/winner/");
  };

  return (
    <>
      <div className="bg-[#e1dcd8] w-full h-screen mx-auto px-4 sm:px-6 lg:px-8 overflow-y-hidden">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-9 md:items-center">
          <div>
            <div
              className="mt-4 flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 shadow-lg cursor-pointer animate-pulse"
              onClick={() => setShowModal(true)}
            >
              <Languages className="text-lg text-slate-800 font-medium" />
            </div>
            <Image
              width={1000}
              height={400}
              className="w-[28rem] object-cover"
              src="/navBG.png"
              alt="Hero Image"
            />
          </div>
          <div>
            <div className="mt-3 flex flex-col gap-3">
              <div
                className="flex flex-col gap-2 cursor-pointer"
                onClick={chapterOneLinkHandler}
              >
                <h1 className="text-lg font-medium">Chapter 1</h1>
                <h1 className="text-3xl font-semibold">
                  Importance of Attitude
                </h1>
                <h1 className="text-2xl font-medium">Winner&apos;s Edge</h1>
              </div>
              <hr className="rounded-lg h-2 shadow-lg bg-gradient-to-r from-teal-500 from-10% via-green-500 via-30% to-gray-100 to-90%" />
              <div className="flex flex-col gap-2 cursor-pointer">
                <h1 className="text-lg font-medium">Chapter 2</h1>
                <h1 className="text-3xl font-semibold">
                  Build A Positive Attitude
                </h1>
                <h1 className="text-2xl font-medium">
                  Reaching Your Destination
                </h1>
              </div>
              <hr className="rounded-lg h-2 shadow-lg bg-gradient-to-r from-cyan-500 from-10% via-sky-500 via-30% to-gray-100 to-90%" />
              <div className="flex flex-col gap-2 cursor-pointer">
                <h1 className="text-lg font-medium">Chapter 3</h1>
                <h1 className="text-3xl font-semibold">Success</h1>
                <h1 className="text-2xl font-medium">Winning Strategies</h1>
              </div>
              <hr className="rounded-lg h-2 shadow-lg bg-gradient-to-r from-neutral-500 from-10% via-stone-500 via-30% to-gray-100 to-90%" />
              <div className="flex flex-col gap-2 cursor-pointer">
                <h1 className="text-lg font-medium">Chapter 4</h1>
                <h1 className="text-3xl font-semibold">Attribute of Success</h1>
                <h1 className="text-2xl font-medium">Path of Success</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Select Your Language"
        body={<Lang />}
      />
    </>
  );
}

export default Menu;
