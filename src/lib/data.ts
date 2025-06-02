export async function fetchInspirationCat() {
    console.log('Fetching inspiration categories and thie submenu...');
    return (
        {
            "categories": [
                {
                "name": "Unique stays",
                "items": [
                    { "title": "Cabins", "location": "United States" },
                    { "title": "Treehouses", "location": "United States" },
                    { "title": "Glamping", "location": "United States" },
                    { "title": "Tiny Houses", "location": "United States" },
                    { "title": "Beach Houses", "location": "United States" },
                    { "title": "Campers and RVs", "location": "United States" },
                    { "title": "Lakehouses", "location": "United States" },
                    { "title": "Yurt Rentals", "location": "United States" },
                    { "title": "Yurt Rentals", "location": "United Kingdom" },
                    { "title": "Castle Rentals", "location": "United States" },
                    { "title": "Houseboats", "location": "United States" },
                    { "title": "Holiday Caravans", "location": "United Kingdom" },
                    { "title": "Private Island Rentals", "location": "United States" },
                    { "title": "Farm Houses", "location": "United States" },
                    { "title": "Farm Cottages", "location": "United Kingdom" },
                    { "title": "Cabin Rentals", "location": "Australia" },
                    { "title": "Luxury Cabins", "location": "United Kingdom" },
                    { "title": "Luxury Cabins", "location": "United States" }
                ]
                },
                {
                "name": "Categories",
                "items": [
                    { "title": "Beach" },
                    { "title": "Cabins" },
                    { "title": "Tiny homes" },
                    { "title": "Lake" },
                    { "title": "National parks" },
                    { "title": "Trending" },
                    { "title": "Farms" },
                    { "title": "Castles" }
                ]
                },
                {
                "name": "Travel tips & inspiration",
                "items": [
                    { "title": "Travel guides", "desc": "Expert advice for travelers" },
                    { "title": "Seasonal getaways", "desc": "Perfect for any weather" },
                    { "title": "Road trips", "desc": "Scenic drives worth taking" },
                    { "title": "Travel tips", "desc": "Make trips smoother" },
                    { "title": "Family travel", "desc": "Fun for all ages" },
                    { "title": "Pet-friendly travel", "desc": "Bring furry friends along" }
                ]
                },
                {
                "name": "Airbnb-friendly apartments",
                "items": [
                    { "title": "Apartments in Atlanta", "location": "United States" },
                    { "title": "Apartments in Dallas", "location": "United States" },
                    { "title": "Apartments in Houston", "location": "United States" },
                    { "title": "Apartments in Phoenix", "location": "United States" },
                    { "title": "Apartments in Seattle", "location": "United States" }
                ]
                }
            ]
        }
    )
}