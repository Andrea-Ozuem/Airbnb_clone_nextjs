import { clsx } from "clsx";
import React from "react";

export default function NavButton({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(disabled && "cursor-not-allowed text-[#c7c7c7]")}
    >
      <span
        className={clsx(
          "ms-2 rounded-full p-2 block",
          !disabled && "bg-[#f2f2f2]",
          disabled && "border border-(#c7c7c7) text-(#c7c7c7)"
        )}
      >
        {children}
      </span>
    </button>
  );
}
