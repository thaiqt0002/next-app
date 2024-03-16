"use client";
import { useRef } from "react";
import Login from "./login";
import Signup from "./signup";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const formRef = useRef<HTMLDivElement | null>(null);
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const banner2Ref = useRef<HTMLDivElement | null>(null);

  const goLeft = () => {
    formRef.current?.classList.add("translate-x-[-33.3%]");
    bannerRef.current?.classList.add("opacity-0");
    banner2Ref.current?.classList.remove("opacity-0");
  };
  const goRight = () => {
    formRef.current?.classList.remove("translate-x-[-33.3%]");
    bannerRef.current?.classList.remove("opacity-0");
    banner2Ref.current?.classList.add("opacity-0");
  };
  return (
    <div className="flex h-screen justify-center items-center absolute w-full">
      <div className="overflow-x-hidden  w-[55%] h-[30em] mt-20 rounded-xl">
        <div
          ref={formRef}
          className="transition-transform duration-500 w-[150%] h-full bg-white relative flex"
        >
          <div
            ref={bannerRef}
            className="transition-opacity duration-500 flex w-full h-full z-10 absolute"
          >
            <img src="/banner.jpg" alt="banner" />
          </div>
          <div
            ref={banner2Ref}
            className="transition-opacity opacity-0 duration-500 flex translate-x-[10rem] w-full h-full z-10 absolute"
          >
            <img src="/banner2.png" alt="banner" />
          </div>
          <div className="z-20 h-full flex w-full">
            <div className="bg-white w-1/2 p-4 flex flex-col">
              <Login func={goLeft} />
            </div>
            <div className="w-1/2 p-4"></div>
            <div className="bg-white w-1/2 h-full p-4">
              <Signup func={goRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
