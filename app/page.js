'use client'
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const getInBtnHandler = (e) => {
    e.preventDefault();
    router.push("/menu")
  };

    return (
        <>
            <div className="bg-gray-900 w-full h-screen text-white flex flex-col gap-6 items-center justify-center select-none">
                <h1 className="scale-in-ver-bottom text-3xl font-medium uppercase">
                    You Can
                </h1>
                <h1 className="scale-in-ver-bottom text-4xl font-semibold uppercase">
                    Win
                </h1>
                <p className="scale-in-ver-bottom text-2xl text-center font-medium">
                    Winners don&apos;t do different things, <br /> they do
                    things differently
                </p>
                <h1 className="w-28 h-10 rounded-lg bg-gray-500 text-black font-medium flex items-center justify-center cursor-pointer" onClick={getInBtnHandler}>
                    Get In
                </h1>
            </div>
        </>
    );
}
