'use client';

import { useState } from 'react'
import { clsx } from 'clsx';
import inspirationData from '@/lib/inspirationCategories.json';
import CategoryItemsSubMenu from '@/components/CategoryItemsSubMenu';
import { Category } from '@/types/definitions';

export default function InspirationSection() {
    const [data, setData] = useState<Category[]>(inspirationData.categories)

    const isAnySelected = data.find(cat => cat.hasOwnProperty('selected'))
    if (!isAnySelected) {
        Object.assign(data[0], {selected: true})
    }

    function changeSubMenu(name: string) {
        setData(prev => {
            return prev.map(cat => {
                if (cat.hasOwnProperty('selected')) {
                    delete cat.selected
                }
                if (cat.name === name) {
                    return {...cat, selected: true}
                }
                return {...cat}
            })
        })
    }

    const selectedItems = data.find(cat => cat.hasOwnProperty('selected'))!.items

    return (
        <section className="bg-(--background-secondary) px-section pt-8 text-sm">
            <h2 className="font-semibold mb-3 text-2xl">Inspiration for future getaways</h2>
            <div className="border-b-[1px] text-(--colour-text-tertiary) flex border-(--colour-border) no-scrollbar overflow-x-auto ">
                {data.map((category, index) => {
                    const isFirst = index === 0
                    return (
                        <button onClick={() => changeSubMenu(category.name)} className={clsx(' font-medium px-3 py-3 relative whitespace-nowrap active:scale-[0.96]', category.selected && "after:content-[''] after:absolute after:bg-[#222222] after:h-[2px] after:w-3/4 after:start-3 after:bottom-0 text-(--colour)", isFirst && '-ml-3')} key={index}>{category.name}</button>
                    )
                })}
            </div>
            <CategoryItemsSubMenu items={selectedItems} />
            
        </section>
    );
}