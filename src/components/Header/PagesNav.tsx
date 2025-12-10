"use client";

import Link from "next/link";
// go back to motion main page for this animatePresence
import * as motion from "motion/react-client";
import { useState } from "react";

const tabs = [
  {
    name: "Home",
    href: "#",
    videoSrc: "/house-selected.mov",
    posterUrl:
      "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-bar-icons/original/4aae4ed7-5939-4e76-b100-e69440ebeae4.png?im_w=240",
  },
  {
    name: "Experience",
    href: "#",
    videoSrc: "/balloon-selected.mov",
    posterUrl:
      "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-bar-icons/original/e47ab655-027b-4679-b2e6-df1c99a5c33d.png?im_w=240",
  },
  {
    name: "Service",
    href: "#",
    videoSrc: "/consierge-selected.mov",
    posterUrl:
      "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-search-bar-icons/original/2bf5d36d-e731-4465-a8ef-91abbf2ae8ce.png?im_w=240",
  },
];

export default function PagesNav() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <nav className="relative px-8 md:p-0">
      <ul className="grid grid-cols-3 gap-x-1">
        {tabs.map((item) => (
          <motion.li
            key={item.name}
            initial={false}
            className="relative"
            onClick={() => setSelectedTab(item)}
          >
            <Link
              href={item.href}
              className="flex items-center flex-col md:flex-row"
            >
              <video
                src={item.videoSrc}
                playsInline
                poster={item.posterUrl}
                className="w-[50px] scale-[1.2] object-contain object-center"
              ></video>
              <span className="text-xs pb-1 md:text-sm text-[#6a6a6a]">
                {item.name}
              </span>
            </Link>
            {item === selectedTab ? (
              <motion.div
                className="h-[3px] bg-(--colour) absolute -bottom-0 inset-x-0 rounded-[5px] md:m-0"
                layoutId="underline"
                id="underline"
              />
            ) : null}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
