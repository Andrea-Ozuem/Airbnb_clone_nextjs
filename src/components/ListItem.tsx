import LikeButton from "./Buttons/LikeButton"

export default function ListItem({ item }) {
    return (
        <li>
            <a href="#"></a>
            <div className="flex flex-col">
                <div 
                    className="bg-(--colour-border) px-[12px] pt-[12px] rounded-[20px] bg-cover no-repeat aspect-20/19 "
                    // w-[140px] md:w-[175px] lg:w-[188px]
                    style={{backgroundImage: `url(${item.bannerImage})`}}
                >
                    <div className="flex justify-between gap-[8px] items-start">
                        {item.guestFavorite ? (
                            <div className="text-xs bg-[rgba(255,255,255,0.8)] px-[8px] py-[4px] rounded-[14px] border border-[rgba(255,255,255,0.5)] font-semibold leading-4">Guest favorite</div>
                        ) : <div></div>}
                        <div>
                            <LikeButton />
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <p className="text-sm font-semibold mt-2">{ item.title }</p>
                <div>
                    <p className="text-[12px]">${item.price} for {item.nights} nights <span>{item.rating}</span></p>
                </div>
            </div>
        </li>
    )
}