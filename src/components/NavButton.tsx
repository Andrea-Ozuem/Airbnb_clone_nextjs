import { clsx } from 'clsx'
export default function NavButton({onClick, disabled, children}) {
    const styles = {
        display: "block",
        fill: "rgba(0, 0, 0, 0.5)",
        height: "24px",
        width: "24px",
        stroke: "#fff",
        strokeWidth: 2,
        overflow: "visible"
    }


    return (
        <button onClick={onClick} disabled={disabled} className={clsx(disabled && 'cursor-not-allowed text-[#c7c7c7]')}>
            <span className={clsx('ms-2 rounded-full p-2 block', !disabled && 'bg-[#f2f2f2]', disabled && 'border border-(#c7c7c7) text-(#c7c7c7)')}>
                {children}
            </span>
        </button>
    )
}