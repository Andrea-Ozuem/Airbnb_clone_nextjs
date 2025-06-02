import { CategoryItemsSubMenuProps } from '@/types/definitions';

export default function CategoryItemsSubMenu({items}: CategoryItemsSubMenuProps) {
    return (
        <ul className="grid pt-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-(--spacing-mid) gap-x-(--spacing-sm)">
            {items.map(item => (
                <li key={item.title + item.subtitle}>
                    <a href="#">
                        <span className="block text-(--colour) font-semibold">{item.title}</span>
                        {item.subtitle}
                    </a>
                </li>
            ))}
        </ul>
    )
}