"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Icons } from "@/components/icons";
import { Home, PlugZap } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ComingSoon = () => {
  const router = useRouter();
  return (
    <section>
      <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center px-6 py-12">
        <div className="mx-auto flex mobile:max-w-[80%] flex-col items-center text-center">
          <p className="rounded-full bg-blue-50 p-3 text-sm font-medium dark:bg-[#00000052] border">
            <PlugZap className=""/>
          </p>
          <h1 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Coming Soon...
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
          The page you are looking for is currently under development.
          </p>

          <div className="group mt-6  flex w-fit shrink-0 items-center gap-x-3 sm:w-auto">
            <button
              onClick={() => router.back()}
              className={`flex items-center gap-1 rounded-[6px]`}
            >
              <Icons.chevronLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <span>Go back</span>
            </button>
            <Separator orientation="vertical" />
            <Link href="/" className={`flex items-center gap-2`}>
              <Home height={16} width={16}/> Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComingSoon