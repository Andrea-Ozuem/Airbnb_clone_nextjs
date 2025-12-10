import { createContext } from "react";

const HeaderScrollContext = createContext({});

export default function HeaderScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HeaderScrollContext.Provider value={{}}>
      {children}
    </HeaderScrollContext.Provider>
  );
}

export { HeaderScrollContext };
