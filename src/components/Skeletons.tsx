const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function ListItemSkeleton() {
  return (
    <div>
      <div
        className={`${shimmer} overflow-hidden rounded-[20px] aspect-20/19 w-[140px] md:w-[175px] lg:w-[188px] bg-(--colour-border)`}
      ></div>
      <p
        className={`${shimmer} mt-2 w-[75%] h-[13px] rounded-[8px] bg-(--colour-border)`}
      ></p>
      <p
        className={` ${shimmer} mt-2 w-half h-[13px] rounded-[8px] bg-(--colour-border)`}
      ></p>
    </div>
  );
}

export function ListingsSkeleton() {
  return (
    <div className="py-12">
      <div className="px-section mb-12">
        <div
          className={`${shimmer} h-[20px] overflow-hidden w-[150px] rounded-[8px] mt-12 mb-3 bg-(--colour-border)`}
        ></div>
        <div
          className={`${shimmer} flex gap-[12px] no-scrollbar overflow-hidden`}
        >
          <ListItemSkeleton />
          <ListItemSkeleton />
          <ListItemSkeleton />
          <ListItemSkeleton />
          <ListItemSkeleton />
          <ListItemSkeleton />
          <ListItemSkeleton />
          <ListItemSkeleton />
        </div>
      </div>

      <div className="px-section mt:18">
        <div
          className={`${shimmer} h-[20px] overflow-hidden w-[150px] rounded-[8px] mt-5 mb-3 bg-(--colour-border)`}
        ></div>
        <div
          className={`${shimmer} flex gap-[12px] no-scrollbar overflow-hidden`}
        >
          <ListItemSkeleton />
          <ListItemSkeleton />
          <ListItemSkeleton />
          <ListItemSkeleton />
          <ListItemSkeleton />
          <ListItemSkeleton />
          <ListItemSkeleton />
          <ListItemSkeleton />
        </div>
      </div>
    </div>
  );
}
