"use client";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { FaExclamation } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import {
  BannerList,
  ShortcutList,
  ContentFilterList,
  ContentList,
} from "./list";

export default function HomeRight({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const slideRef = useRef<HTMLDivElement | null>(null);

  const slideStartCheck = () => {
    const slideScrollWidth = slideRef.current?.scrollWidth || 0;
    const currentScroll = slideRef.current?.scrollLeft || 0;
    if (currentScroll == 0) {
      slideRef.current?.scrollTo({
        left: slideScrollWidth,
        behavior: "auto",
      });
    }
  };
  const slideEndCheck = () => {
    const slideWidth = slideRef.current?.clientWidth || 0;
    const slideScrollWidth = slideRef.current?.scrollWidth || 0;
    const currentScroll = slideRef.current?.scrollLeft || 0;
    const MaxScrollLeft = Math.round(
      slideScrollWidth - slideWidth - currentScroll
    );
    if (MaxScrollLeft <= 1 && MaxScrollLeft >= 0) {
      slideRef.current?.scrollTo({
        left: 0,
        behavior: "auto",
      });
    }
  };
  const slideNavPrev = () => {
    slideRef.current?.scrollBy({
      left: -600,
      behavior: "smooth",
    });
    slideStartCheck();
  };
  const slideNavNext = () => {
    slideRef.current?.scrollBy({
      left: 600,
      behavior: "smooth",
    });
    slideEndCheck();
  };

  useEffect(() => {
    const interval = setInterval(slideNavNext, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <div className="h-fit relative">
        <MdNavigateBefore
          className="slideicon absolute w-10 h-10 rounded-md bg-slate-300 left-2 top-[40%] z-10 hover:bg-slate-500"
          onClick={slideNavPrev}
        />
        <MdNavigateNext
          className="slideicon absolute w-10 h-10 rounded-md bg-slate-300 right-2 top-[40%] z-10 hover:bg-slate-500"
          onClick={slideNavNext}
        />
        <div
          ref={slideRef}
          className="h-[22em] flex gap-2 overflow-x-scroll snap-x relative"
        >
          <BannerList imgsrc="/1.png" />
          <BannerList imgsrc="/2.png" />
          <BannerList imgsrc="/3.png" />
          <BannerList imgsrc="/4.png" />
          <BannerList imgsrc="/5.png" />
          <BannerList imgsrc="/6.png" />
        </div>
      </div>
      <div className="bg-white grid grid-cols-6 h-[8.5em] gap-2 rounded-md ">
        <ShortcutList sclogo={FaExclamation} />
        <ShortcutList sclogo={FaExclamation} />
        <ShortcutList sclogo={FaExclamation} />
        <ShortcutList sclogo={FaExclamation} />
        <ShortcutList sclogo={FaExclamation} />
        <ShortcutList sclogo={FaExclamation} />
      </div>
      <div className="flex">
        <button className="w-[8rem] rounded-none">Mới cập nhật</button>
        <ContentFilterList name="Tất cả" />
        <ContentFilterList name="Tuần trước" />
        <ContentFilterList name="Tháng trước" />
        <ContentFilterList name="Mùa trước" />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <ContentList />
      </div>
    </div>
  );
}
