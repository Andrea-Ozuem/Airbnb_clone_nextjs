'use client'
import {useState } from 'react'
import CurrencyData from '@/lib/currency.json';
import { clsx } from 'clsx'

export default function Currencies() {
    const [currencies, setCurrencies] = useState(CurrencyData.currencies)

    function handleClick(shortname: string) {
        setCurrencies(
            prev => {
                return prev.map(cat => {
                    if (cat.hasOwnProperty('selected')) {
                        delete cat.selected
                    }
                    if (cat.shortname === shortname) {
                        return {...cat, selected: true}
                    }
                    return {...cat}
                })
            })
    }
    return (
        <div className='w-full overflow-y-auto'>
            <h2 className='text-title my-4'>Choose a currency</h2>
            <ul className='flex flex-wrap w-full'>
                {currencies.map((curr, idx) => (
                    <li key={idx} className='p-2 md:w-[33.3%] lg:w-[25%] xl:w-[20%]'>
                        <button onClick={() => handleClick(curr.shortname)} className={clsx('block rounded-lg px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-black w-full', curr.selected && 'border-black border')}>
                            <div className="text-left">{curr.fullname}</div>
                            <div className='text-(--colour-very-light-grey) text-left'>{curr.shortname} - {curr.symbol}</div>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}