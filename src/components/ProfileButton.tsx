'use client';

import { div } from 'motion/react-client';
import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProfileButton({children}) {
    const [openDialog, setOpenDialog] = useState(false)

    function handleClick() {
        setOpenDialog(prev => !prev)
    }

    return (
        <>
            <div className=''>
                <button onClick={handleClick} className="rounded-full cursor-pointer p-3 bg-(--theme-grey)">
                    {children}
                </button>
            </div>
            {openDialog && (
                <div className='shadow-[0_6px_20px_0_rgba(0,0,0,0.1)] rounded-[20px] bg-white py-3 fixed border-(--colour-border) top-[70px] w-[260px] right-12'>
                    <Link 
                        href="#"
                        className='block px-6 py-2 hover:bg-(--theme-grey)'
                    > 
                        Help Center
                    </Link>
                    <div className='h-[1px] bg-(--colour-border) mx-6 my-1'></div>
                    <Link 
                        href="#"
                        className='block px-6 py-2 flex gap-x-1 hover:bg-(--theme-grey)'
                    > 
                        <div className='border-y-(--colour-border) w-[70%]'>
                            <h4 className='font-semibold'>Become a host</h4>
                            <p className='text-xs'>It's easy to start hosting and earn an extra income</p>
                        </div>
                        <div className='w-[30%]'>
                            <Image src="/house-image.png" alt="House image" width={100} height={100}/>
                        </div>
                    </Link>
                    <div className='h-[1px] bg-(--colour-border) mx-6 my-1'></div>
                    <Link 
                        href="#"
                        className='block px-6 py-2 hover:bg-(--theme-grey)'
                    > 
                        Refer a host
                    </Link>
                    <Link 
                        href="#"
                        className='block px-6 py-2 hover:bg-(--theme-grey)'
                    > 
                        Find a co-host
                    </Link>
                    <Link 
                        href="#"
                        className='block px-6 py-2 hover:bg-(--theme-grey)'
                    > 
                        Gift Cards
                    </Link>
                    <div className='h-[1px] bg-(--colour-border) mx-6 my-1'></div>
                    <Link 
                        href="#"
                        className='block px-6 py-2 hover:bg-(--theme-grey)'
                    > 
                        Login or signup
                    </Link>
                </div>
            )}
        </>
        

    )
}