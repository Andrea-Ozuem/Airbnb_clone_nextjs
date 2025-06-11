import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle
} from '../Dialog'

import Currencies from '../Currencies';

export default function CurrencyDialog() {
    return (
        <Dialog>
            <DialogTrigger className="active:bg-(--colour-btn-active) hover:bg-(--colour-btn-active) rounded-[9px] py-1 px-3 flex items-center gap-2 font-semibold">
                $<span>USD</span>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle className='sr-only'>Curreny Dialog</DialogTitle>
                <div className='border-b border-b-(--colour-border)'></div>
                <Currencies />
            </DialogContent>
        </Dialog>
    )
}