import { useContext } from "react"
import { createPortal } from 'react-dom';
import { DialogContext } from "./Dialog"
import DialogClose from "./DialogClose";

export default function DialogContent({ children }) {
    const { showModal } = useContext(DialogContext)
    
    return ( showModal && createPortal(
        <dialog className="fixed w-full max-h-screen h-full inset-0 bg-black/50 flex items-center justify-center z-40 ">
             <div className="fixed p-[40px] bg-white z-50 rounded-lg shadow-lg">
                <DialogClose />
                {children}
             </div>
        </dialog>,
        document.body
    ))
} 