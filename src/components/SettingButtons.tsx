import React from "react";

export default function SettingButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="rounded-full p-3 bg-(--theme-grey)">{children}</button>
  );
}
