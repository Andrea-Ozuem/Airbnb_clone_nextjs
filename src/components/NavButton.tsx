export default function LikeButton({children}) {
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
        <button>
            <span className="ms-2 rounded-full p-2 block bg-[#f2f2f2]">
                {children}
            </span>
        </button>
    )
}