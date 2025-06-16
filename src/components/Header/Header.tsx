'use client';

import { useEffect, useState, useRef } from "react";
// import SettingButton from "../SettingButtons";
// import Button from "../Buttons/Button";
import SearchIcon  from "../Icons/SearchIcon";
import BreadIcon  from "../Icons/BreadIcon";
import FilterForm from "../FilterForm/FilterForm";
import PagesNav from './PagesNav';
import {Logo, LargeLogo} from '../Icons/Logo';
import { motion, useScroll, useTransform, useMotionValue, animate } from "motion/react"
import { AnimatePresence } from "motion/react"
import ProfileButton from '../ProfileButton'
import GlobeDialog from './GlobeDialog';

export default function Header() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const ticking = useRef(false);

  const rawScaleY = useTransform(scrollY, [0, 5], [2.3, 1], {clamp: true});
  const scaleY = useMotionValue(2.3);

  useEffect(() => {
    const unsubscribe = rawScaleY.on("change", (v: number) => {
      animate(scaleY, v, {
        duration: 0.1,
        ease: "easeOut",
      });
    });

    return () => unsubscribe();
  }, [rawScaleY, scaleY]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest: number) => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          if (latest > 15 && isVisible) {
            setIsVisible(false);
          } else if (latest < 5 && !isVisible) {
            setIsVisible(true);
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    });

    return () => unsubscribe();
  }, [scrollY, isVisible]);

  return (
    <div className="sticky top-0 z-40" >
      <header className="bg-[linear-gradient(180deg,_#ffffff_39.9%,_#f8f8f8_100%)] w-full hidden md:block h-[80px]">
        <div className="relative h-full">
          <div className="hidden relative md:flex w-full h-full items-center justify-between">
            <div className="text-(--theme-colour) z-99 md:ms-8 lg:ms-12 ">
              <span className="hidden lg:block">
                <LargeLogo />
              </span>
              <span className="hidden md:block lg:hidden">
                <Logo />
              </span>
            </div>

            <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center"> 
              {!isVisible && (
                <div className="relative flex items-center filter-box rounded-[40px] py-2 px-2 font-semibold">
                  <div className="flex items-center text-sm">
                    <button className="block">
                      <div className="px-4 py-1">Anywhere</div>
                    </button>
                    <span className="h-[24px] bg-(--colour-border) w-[1px] block"></span>
                    <button className="block">
                      <div className="px-4 py-1">Anytime</div>
                    </button>
                    <span className="h-[24px] bg-(--colour-border) w-[1px] block"></span>
                    <button className="block">
                      <div className="px-4 py-1">Add Guests</div>
                    </button>
                  </div>
                  <button className="" >
                    <span className="rounded-full bg-[#FF385C] p-3 block text-white">
                      <SearchIcon />
                    </span>
                  </button>
                </div>
            )}
              {isVisible && <PagesNav />}
              <motion.div 
                style={{scaleY}}
                className="absolute h-[80px] top-0 left-0 bg-[linear-gradient(180deg,_#f8f8f8_100%,_#ffffff_39.9%)] origin-top w-full -z-10"
              ></motion.div>
            </div>
            
          
            <div className="flex items-center gap-x-4 md:me-8 lg:me-12 z-99">
              <div>
                <a href="#" className="hover:bg-(--theme-grey) hidden xl:block rounded-full p-3 font-semibold">Become a host</a>
              </div>
              <div>
                <GlobeDialog />
              </div>
              <div>
                <ProfileButton>
                  <BreadIcon />
                </ProfileButton>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isVisible && <FilterForm />}
          </AnimatePresence>
          
        </div>
      </header>
      <div className="block md:hidden bg-white shadow-[0_6px_20px_0_rgba(0,0,0,0.1)] w-full">
        <div className="flex gap-x-2 items-center justify-center shadow-[0_6px_20px_0_rgba(0,0,0,0.1)] font-semibold rounded-[40px] bg-white my-4 py-4 mx-6">
          <SearchIcon/>
          <p>Start your search</p>
        </div>
        <div>
          <PagesNav />
        </div>
      </div>
    </div>
  );
}
