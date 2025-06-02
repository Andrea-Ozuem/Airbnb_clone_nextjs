'use client'

import {useState } from 'react'
import GlobeIcon from '../Icons/GlobeIcon';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
} from '../Dialog'

// turn to lazy loading
import Languages from '../Languages';
import Currencies from '../Currencies';

export default function GlobeDialog() {
    const [buttonCat, setButtonCat] = useState<Array<{name: string, selected?: boolean}>>(
        [
            {
                name: "Language and region",
                selected: true
            },
            {
                name: "Currency"
            }
        ]
    )
    
    function changeSelectedBtn(name: string) {
        setButtonCat(prev => {
            return prev.map(btn => {
                if (btn.hasOwnProperty('selected')) {
                    delete btn.selected
                }
                if (btn.name === name) {
                    return {...btn, selected: true}
                }
                return {...btn}
            })
        })
    }
    return (
        <Dialog>
            <DialogTrigger className="rounded-full p-3 bg-(--theme-grey)">
                <GlobeIcon />
            </DialogTrigger>
            <DialogContent>
                <div className='flex items-center gap-x-3 border-b-(--colour-border) border-b-1'>
                    {buttonCat.map((btn, idx) => (
                        <div key={idx} className='relative'>
                            <button
                                onClick={() => {changeSelectedBtn(btn.name)}}
                                className="font-medium py-3 relative whitespace-nowrap active:scale-[0.96] text-(--colour)"
                            >
                                {btn.name}
                            </button>
                            {btn.selected ? (
                            <div
                                className='h-[2px] bg-(--colour) absolute -bottom-0 inset-x-0 rounded-[5px] md:m-0'
                            />
                        ) : null}
                        </div>
                    ))}
                </div>
                    
                <div>
                    {buttonCat[0].selected ? <Languages /> : <Currencies />}
                </div>    
                
            </DialogContent>
        </Dialog>
    )
}