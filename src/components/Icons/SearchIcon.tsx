export default function SearchIcon({size = "12px"}) {
    const searchStyles = {
        display: "block",
        fill: "none",
        height: size,
        width: size,
        stroke: "currentcolor",
        strokeWidth: 5.33333,
        overflow: "visible",
        color: "currentcolor",
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={searchStyles}><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>
    )
}