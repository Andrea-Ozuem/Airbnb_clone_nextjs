export default function Button({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <button 
            className="active:bg-[var(--colour-btn-active)] hover:bg-[var(--colour-btn-active)] rounded-[8px] py-1 px-2 flex items-center gap-2 font-semibold"> 
            {children}
        </button>
    ) 
}
