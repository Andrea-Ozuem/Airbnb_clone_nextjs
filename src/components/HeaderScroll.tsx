import { createContext } from "react";

const HeaderScrollContext = createContext(null)

export default function HeaderScroll({ children }: { children: React.ReactNode }) {
    return (
        <HeaderScrollContext.Provider value={{}}>
            {children}
        </HeaderScrollContext.Provider>
    )
}

export { HeaderScrollContext };