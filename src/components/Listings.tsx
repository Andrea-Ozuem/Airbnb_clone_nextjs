import ListItem from "./ListItem";
import ListingsData from "@/lib/listingsData.json";
import NavButton from "./NavButton";

export default function Listings() {
    // in real world scenario, i'll use awaut to fetch the listings data from the API
    const cities = ListingsData.cities;
    const cityHeadings = ['Popular homes in', 'Available next month in', 'Stay in', 'Homes in ', 'Places to stay in']

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
        <section className="bg-(--background) px-section py:4 md:py-18">
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
                            <NavButton>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={chevronStyles}><path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path></svg>
                            </NavButton>
                            <NavButton>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={chevronStyles}><path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path></svg>
                            </NavButton>
                        </div>
                    </div>
                    <ul className="flex gap-[12px] no-scrollbar overflow-x-auto">
                        {city.listings.map(listing => (
                            <ListItem key={listing.id} item={listing} />
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}