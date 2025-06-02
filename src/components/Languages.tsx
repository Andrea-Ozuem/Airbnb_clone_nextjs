'use client';

import { useState } from 'react'
import languagesData from '@/lib/language.json';
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { clsx } from 'clsx'

export default function Languages() {
    const suggested = languagesData.languages.slice(0, 5)
    const [translate, setTranslate] = useState(false)

    function toggleTranslate() {
        setTranslate(prev => !prev)
    }

    return (
        <div className='w-full h-[70vh] max-h-[875px] overflow-y-auto thumb-only-scrollbar'>
            <div className='flex align-center justify-between px-4 py-4 w-[50%] rounded-lg my-12 bg-(--colour-muted-grey)'>
                <div>
                    <h3 className='text-[16px]'>Transalation</h3>
                    <p className='text-(--colour-very-light-grey)'>Automatically translate descriptions and reviews to English.
                    </p>
                </div>
                <div>
                    <button onClick={toggleTranslate}>
                        {translate ? <FaToggleOn className="w-12 h-12" /> : <FaToggleOff className="w-12 h-12" />}
                    </button>
                </div>
            </div>
            <h2 className='text-title mb-6'>Suggested languages and regions</h2>
            <ul className='flex flex-wrap w-full'>
                {suggested.map((lang, idx) => (
                    <li key={idx} className='p-2 md:w-[33.3%] lg:w-[25%]'>
                        <a href={lang.link} className='block rounded-md px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-black w-full'>
                            <div>{lang.name}</div>
                            <div className='text-(--colour-very-light-grey)'>{lang.country}</div>
                        </a>
                    </li>
                ))}
            </ul>
            <h2 className='text-title'>Choose a language and region</h2>
            <ul className='flex flex-wrap w-full'>
                {languagesData.languages.map((lang, idx) => (
                    <li key={idx} className='p-2 md:w-[33.3%] lg:w-[25%]'>
                        <a href={lang.link} className={clsx('block rounded-md px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-black w-full', lang.selected && 'border-black border')}>
                            <div>{lang.name}</div>
                            <div className='text-(--colour-very-light-grey)]'>{lang.country}</div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}