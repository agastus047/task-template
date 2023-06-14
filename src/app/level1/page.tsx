import LeveloneCard from "@/components/Levelonecard/Levelonecard";
import Link from "next/link";

export default function Level1() {
    return(
        <div className="bg-black min-h-screen text-white font-sans p-5 pt-20">
            <div className="flex justify-center">
                <div className="md:w-[75%] flex flex-col">
                    <div className="flex gap-4 md:gap-12 justify-center mb-10 md:mb-14">
                        <button className="flex items-center gap-2 border-4 border-[#229544] rounded-md text-[#229544] hover:text-black hover:bg-[#229544] py-2 px-6"><span className="text-3xl">+</span> POST</button>
                        <button className="border-2 border-gray-600 hover:border-[#229544] bg-[#121212] hover:bg-[rgba(8,84,0,0.3)] py-2 px-8 rounded-full">Yesterday</button>
                    </div>
                    <div className="flex flex-col gap-6 md:gap-10">
                        <LeveloneCard/>
                        <LeveloneCard/>
                        <LeveloneCard/>
                    </div>
                    <Link href="/" className="hover:text-[#229544] hover:underline underline-offset-2 mt-8 md:mt-14">Back to home</Link>
                </div>
            </div>
        </div>
    );
}
