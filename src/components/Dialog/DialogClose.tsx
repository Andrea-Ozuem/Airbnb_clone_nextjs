import { useContext} from "react"
import { DialogContext } from "./Dialog"
import Button from '@/components/Buttons/Button'

export default function DialogClose() {
    const { setShowModal } = useContext(DialogContext)
    
    return (
        <div onClick={() => setShowModal(false)}>
            <Button>x</Button>
        </div>
    )
} 