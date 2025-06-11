'use client'

import ListItem from "./ListItem";
import ListingsData from "@/lib/listingsData.json";
import NavButton from "./NavButton";
import { useRef, useState, useEffect } from "react";

export default function Listings() {
    const cities = ListingsData.cities;
    const cityHeadings = ['Popular homes in', 'Available next month in', 'Stay in', 'Homes in ', 'Places to stay in']

    // Create refs and state for each city
    const scrollRefs = useRef<(HTMLUListElement | null)[]>([]);
    const [scrollStates, setScrollStates] = useState(
        cities.map(() => ({ canScrollLeft: false, canScrollRight: true }))
    );

    const checkScrollButtons = (cityIndex: number) => {
        const scrollContainer = scrollRefs.current[cityIndex];
        if (scrollContainer) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
            
            setScrollStates(prev => prev.map((state, index) => 
                index === cityIndex 
                    ? {
                        canScrollLeft: scrollLeft > 0,
                        canScrollRight: scrollLeft < scrollWidth - clientWidth
                    }
                    : state
            ));
        }
    };

    // Scroll by container width for specific city
    const scroll = (direction: string, cityIndex: number) => {
        const scrollContainer = scrollRefs.current[cityIndex];
        
        if (scrollContainer) {
            // Get the actual rendered item width from the first child
            const firstItem = scrollContainer.querySelector('li') as HTMLElement;
            
            if (firstItem) {
                const itemWidth = firstItem.offsetWidth;
                const gap = parseInt(getComputedStyle(scrollContainer).columnGap) || 16;
                
                const scrollAmount = (itemWidth + gap) * 1;
                
                scrollContainer.scrollBy({
                    left: direction === 'left' ? -scrollAmount : scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                // Fallback if no items found
                const scrollAmount = scrollContainer.clientWidth;
                scrollContainer.scrollBy({
                    left: direction === 'left' ? -scrollAmount : scrollAmount,
                    behavior: 'smooth'
                });
            }

            setTimeout(() => {
                checkScrollButtons(cityIndex);
            }, 300);
        }
    };

    // Check scroll buttons on mount and resize
    useEffect(() => {
        // Check all scroll containers on mount
        cities.forEach((_, index) => {
            checkScrollButtons(index);
        });

        const handleResize = () => {
            cities.forEach((_, index) => {
                checkScrollButtons(index);
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [cities.length]);

    const svgStyles = {
        display: "block",
        fill: "none",
        height: "12px",
        width: "24px",
        stroke: "currentcolor",
        strokeWidth: 5.33333,
        overflow: "visible"
    }

    const chevronStyles = {
        display: "block",
        fill: "none",
        height: "12px",
        width: "12px",
        stroke: "currentcolor",
        strokeWidth: 4,
        overflow: "visible"
    }

    return (
        <section className="bg-(--background) px-section py:4 md:pt-24 pb-12">
            {cities.map((city, index) => (
                <div key={city.name}>
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold md:mt-8 mt-6 md:mb-4 mb-3 text-lg md:text-2xl flex items-center">
                            {`${cityHeadings[index]} ${city.name}`}
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={svgStyles}><path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path></svg>
                            </span>
                        </h2>
                        <div className="hidden md:block">
                            <NavButton
                                onClick={() => scroll('left', index)}
                                disabled={!scrollStates[index]?.canScrollLeft}
                                aria-label="Scroll left"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={chevronStyles}><path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path></svg>
                            </NavButton>
                            <NavButton
                                onClick={() => scroll('right', index)}
                                disabled={!scrollStates[index]?.canScrollRight}
                                aria-label="Scroll right"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={chevronStyles}><path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path></svg>
                            </NavButton>
                        </div>
                    </div>
                    <ul 
                        className="grid grid-flow-col gap-x-(--contentscroller_gap) grid-auto-cols-content-scroller no-scrollbar overflow-x-auto"
                        ref={(el) => scrollRefs.current[index] = el}
                        onScroll={() => checkScrollButtons(index)}
                    >
                        {city.listings.map(listing => (
                            <ListItem key={listing.id} item={listing} />
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}

export async function fetchListings() {
    console.log('Fetching listings data...');
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    return ListingsData.cities;
}