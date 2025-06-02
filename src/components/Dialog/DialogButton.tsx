import { useContext} from "react"
import { DialogContext } from "./Dialog"

export default function DialogButton({ children }) {
    const { setShowModal } = useContext(DialogContext)
    
    return (
        <div onClick={() => setShowModal(true)}>
            {children}
        </div>
    )
} 