'use client';


import SearchIcon  from "./Icons/SearchIcon";
import { motion } from "motion/react"

export default function FilterForm() {
    return (
            <motion.div
                className="hidden md:flex justify-center bg-[linear-gradient(180deg,_#f8f8f8_39.9%,_#ffffff_100%,)] w-full border-(--colour-text-tertiary)">
                <div className="rounded-[100px] absolute bg-white shadow-[0_6px_20px_0_rgba(0,0,0,0.1)] grid grid-cols-[minmax(0,_2fr)_1px_minmax(0,_1fr)_1px_minmax(0,_1fr)_1px_minmax(0,_2fr)] gap-[2px] items-center max-w-[850px] relative md:mx-6 "
            >
                    <div className="py-3 px-6">
                        <span className="w-full font-semibold block text-xs">Where</span>
                        <input type="search" name="" id="" placeholder="Search destinations"/>
                    </div>
                    <div className="bg-(--colour-border) h-[32px] w-[1px]"></div>

                    <div className="py-3 px-6">
                        <span className="w-full font-semibold block text-xs">Check in</span>
                        <input type="search" name="" id="" placeholder="Add dates"/>
                    </div>
                    <div className="bg-(--colour-border) h-[32px] w-[1px]"></div>

                    <div className="py-3 px-6">
                        <span className="w-full font-semibold block text-xs">Check in</span>
                        <input type="search" name="" id="" placeholder="Add dates"/>
                    </div>
                    <div className="bg-(--colour-border) h-[32px] w-[1px]"></div>

                    <div className="py-3 px-6 flex items-center justify-between">
                        <div>
                        <span className="w-full font-semibold block text-xs">Who</span>
                        <input type="search" name="" id="" placeholder="Add guests"/>
                        </div>
                    </div>
                    <div className="absolute right-2">
                        <span className="rounded-full bg-[#FF385C] p-4 block text-white">
                        <SearchIcon size="16px" />
                        </span>
                    </div>
                </div>
        </motion.div>
    )
}