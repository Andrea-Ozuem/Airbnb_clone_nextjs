"use client";

import SearchIcon from "../Icons/SearchIcon";
import { motion, LayoutGroup } from "motion/react";
import { useState, useEffect, useRef, lazy } from "react";
import React from "react";

const ShowOptions = lazy(() => import("./ShowOptions"));

export default function FilterForm() {
  const [who, setWho] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  type FilterItem = {
    name: string;
    desc: string;
    input: string;
  };

  const filterData: FilterItem[] = [
    {
      name: "Where",
      desc: "Search destinations",
      input: "",
    },
    {
      name: "Check in",
      desc: "Add dates",
      input: "",
    },
    {
      name: "Check out",
      desc: "Add dates",
      input: "",
    },
    {
      name: "Who",
      desc: "Search guests",
      input: "",
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const filterContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterContainerRef.current &&
        !filterContainerRef.current.contains(event.target as Node)
      ) {
        setSelectedFilter(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleFocus(name: string) {
    setSelectedFilter(
      filterData.find((item) => item.name == name)?.name || null
    );
  }

  function updateWho(category: string, value: number) {
    setWho((prev) => ({
      ...prev,
      [category]: value,
    }));
  }

  function getWhoText() {
    const total = who.adults + who.children + who.infants;
    if (total === 0 && who.pets === 0) return null;

    let text = "";
    if (total > 0) {
      text += `${total} guest${total > 1 ? "s" : ""}`;
    }
    if (who.pets > 0) {
      text += text
        ? `, ${who.pets} pet${who.pets > 1 ? "s" : ""}`
        : `${who.pets} pet${who.pets > 1 ? "s" : ""}`;
    }
    return text;
  }

  const isAnySelected = selectedFilter !== null;

  return (
    <div className="max-w-[850px] w-full mx-auto">
      <motion.div className="mt-3 hidden md:block bg-[linear-gradient(180deg,_#f8f8f8_39.9%,_#ffffff_100%,)] w-full border-(--colour-text-tertiary)">
        <div
          ref={filterContainerRef}
          className={`rounded-[100px] border border-[#ebebeb] absolute shadow-[0_6px_20px_0_rgba(0,0,0,0.1)] grid grid-cols-[minmax(0,_2fr)_1px_minmax(0,_1fr)_1px_minmax(0,_1fr)_1px_minmax(0,_2fr)] items-center relative ${
            selectedFilter === null ? "bg-white" : "bg-[#ebebeb]"
          }`}
        >
          <LayoutGroup id={"item"}>
            {filterData.map((filterDetails, idx) => (
              <React.Fragment key={idx}>
                <FilterSection
                  handleFocus={() => handleFocus(filterDetails.name)}
                  key={idx}
                  isSelected={filterDetails.name == selectedFilter}
                  isAnySelected={isAnySelected}
                  name={filterDetails.name}
                  desc={filterDetails.desc}
                  data={filterDetails.name === "Who" ? getWhoText() : null}
                />
                {idx !== 3 && (
                  <div className="bg-(--colour-border) separator h-[32px] w-[1px]"></div>
                )}
              </React.Fragment>
            ))}
          </LayoutGroup>

          <div className="absolute right-2">
            {selectedFilter !== null ? (
              <span className="rounded-full p-4 block text-white bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] text-[16px]">
                <span className="flex gap-x-1">
                  <SearchIcon size="16px" /> Search
                </span>
              </span>
            ) : (
              <span className="rounded-full bg-[#FF385C] p-4 block text-white">
                <SearchIcon size="16px" />
              </span>
            )}
          </div>
          {selectedFilter !== null && (
            <ShowOptions
              name={selectedFilter}
              updateWho={updateWho}
              whoData={who}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}

type FilterSectionProps = {
  name: string;
  desc: string;
  handleFocus: () => void;
  isSelected: boolean;
  isAnySelected: boolean;
  data: string | null;
};

function FilterSection({
  name,
  desc,
  data,
  handleFocus,
  isSelected,
  isAnySelected,
}: FilterSectionProps) {
  return (
    <motion.div
      tabIndex={0}
      onFocus={handleFocus}
      onClick={handleFocus}
      className={`cursor-pointer h-full flex flex-col justify-center relative md:py-3 lg:py-4 px-6 lg:px-8 ${
        isAnySelected ? "hover:bg-(--colour-border)" : "hover:bg-[#ebebeb]"
      } filter-section rounded-full`}
    >
      <span className="relative z-10 bg-transparent w-full font-semibold block text-xs">
        {name}
      </span>
      {name == "Where" ? (
        <input
          className="bg-transparent placeholder:text-[#6a6a6a] relative z-10 focus:border-0 focus:outline-none focus:ring-0"
          type="search"
          name="bg-transparent relative z-10"
          id=""
          placeholder={desc}
        />
      ) : (
        <div className="bg-transparent text-(--colour-text-tertiary) relative z-10">
          {data == null ? desc : data}
        </div>
      )}

      {isSelected ? (
        <motion.div
          className="h-full rounded-full bg-white border border-red-20 absolute inset-x-0"
          layoutId="item"
          id="item"
        />
      ) : null}
    </motion.div>
  );
}
