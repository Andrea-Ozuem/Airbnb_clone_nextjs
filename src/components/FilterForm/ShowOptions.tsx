'use client'

import Image from 'next/image'

// Define types for the component props
type WhoData = {
    adults: number;
    children: number;
    infants: number;
    pets: number;
};

type ShowOptionsProps = {
    name: string;
    updateWhere?: (value: string) => void;
    updateWho?: (category: string, value: number) => void;
    whoData?: WhoData;
};

export default function ShowOptions({ name, updateWhere, updateWho, whoData}: ShowOptionsProps) {
    function renderOption() {
        if (name == 'Where' && updateWhere) {
            return <WhereOptions updateWhere={updateWhere} />
        } else if (name == 'Who' && updateWho && whoData) {
            return <WhoOption updateWho={updateWho} whoData={whoData} />
        }
        return null;
    }
    
    return (
        <div className='w-full bg-transparent h-auto absolute top-full mt-4'>
            {renderOption()}
        </div>
    )
}

function WhereOptions({updateWhere}: {updateWhere: (value: string) => void}) {
    function handleClick(name: string) {
        updateWhere(name)
    }
    return (
        <div className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.14)] absolute">
            <div className='bg-white [clip-path:inset(0_round_32px)] py-5 ps-5'>
                <div className='overflow-y-auto thumb-only-scrollbar h-[487px] w-[425px] mx-1'>
                    <h3 className='text-xs mb-2 mt-4 px-2'>Suggested destinations</h3>
                    <button onClick={() => handleClick('Nearby')} className="flex gap-x-3 me-5 hover:bg-(--theme-grey) rounded-[10px] p-2">
                        <div className="w-[56px] h-[56px] ">
                            <Image
                                src="/destination.png"
                                width={56}
                                height={56}
                                alt="Picture of the destination"
                                />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className='font-semibold'>Nearby</div>
                            <div className='text-(--colour-text-tertiary)'>Find what&apos;s around you</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}


function WhoOption({updateWho, whoData}: {updateWho: (category: string, value: number) => void, whoData: WhoData}) {
    return (
        <div className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.14)] absolute right-0">
            <div className='bg-white w-[425px] [clip-path:inset(0_round_32px)] py-4 px-8'>
                <div className='divide-y divide-gray-200'>
                    <WhoCategories updateWho={updateWho} name="Adults" desc="Ages 13 or above" value={whoData?.adults || 0} />
                    <WhoCategories updateWho={updateWho} name="Children" desc="Ages 2 – 12" value={whoData?.children || 0} />
                    <WhoCategories updateWho={updateWho} name="Infants" desc="Under 2" value={whoData?.infants || 0} />
                    <WhoCategories updateWho={updateWho} name="Pets" desc="Bringing a service animal?" value={whoData?.pets || 0} />
                </div>
            </div>
        </div>
    );
}

function WhoCategories({name, desc, updateWho, value}: {name: string, desc: string, updateWho: (category: string, value: number) => void, value: number}) {
    const handleIncrement = () => {
        updateWho(name.toLowerCase(), value + 1);
    };

    const handleDecrement = () => {
        if (value > 0) {
            updateWho(name.toLowerCase(), value - 1);
        }
    };

    const isPets = name === "Pets";

    return (
        <div className="flex items-center justify-between py-6">
            <div className="flex-1">
                <div className="font-medium text-base">{name}</div>
                <div className={`text-gray-500 text-sm ${isPets ? 'underline cursor-pointer' : ''}`}>
                    {desc}
                </div>
            </div>
            <div className="flex items-center gap-3">
                <button 
                    onClick={handleDecrement}
                    disabled={value === 0}
                    className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400 transition-colors ${
                        value === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-50'
                    }`}
                >
                    <span className="text-lg leading-none">−</span>
                </button>
                <span className="min-w-[2rem] text-center text-[16px] font-medium">{value}</span>
                <button 
                    onClick={handleIncrement}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                    <span className="text-lg leading-none">+</span>
                </button>
            </div>
        </div>
    );
}