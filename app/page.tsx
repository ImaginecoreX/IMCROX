import Navbar from "@/components/global/navbar";
import RetroGrid from "@/components/magicui/retro-grid";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ShimmerButton from "@/components/magicui/shimmer-button";

export default function Home() {
  return (
    <>
    <Navbar/>

    <main className="flex min-h-screen w-full flex-col items-center justify-end">

      <div className="min-h-[60vh] w-full flex flex-col justify-center items-center">
        <div className="mt-[140px] flex flex-col items-center">
        <div className="text-[3rem] mobile:text-3xl mobile:w-9/12 mobile:leading-[30px] font-bold w-1/2 text-center leading-[40px]">Tools & Libraries to <span className="text-blue-500 dark:text-blue-400">Accelerate</span> Your Workflow.</div>
        <p className="mt-6 text-center w-1/2 opacity-80 mobile:w-9/12">Empower your projects with cutting-edge <strong>tools</strong> and <strong>libraries</strong> designed to streamline your development process. Enhance <strong className="underline">productivity</strong>, reduce <strong className="underline">complexity</strong>, and bring your ideas to life <strong>faster</strong> than ever before.</p>

        <ShimmerButton className="shadow-2xl mt-4 mobile:mt-5">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Shimmer Button
        </span>
      </ShimmerButton>
        </div>
      </div>

      <div className="relative min-h-[40vh] w-full  flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-medium">IMCROX</div>
          <p className="pt-1 opacity-80 text-[14px]">The back-bone of the ImaginecoreX.</p>
        </div>

        <RetroGrid/>
      </div>

    </main>
    </>
  );
}
