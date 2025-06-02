import { createContext, useState} from "react"

const DialogContext = createContext(false)

export default function Dialog({ children }: Readonly<{ children: React.ReactNode }>) {
    const [showModal, setShowModal] = useState(false)

    return (
        <DialogContext.Provider value={{ showModal, setShowModal }}>
            {children}
        </DialogContext.Provider>
    )
}

export { DialogContext }