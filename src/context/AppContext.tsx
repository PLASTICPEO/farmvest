import { createContext } from "react";
import { useEffect, useState } from "react";

import { ContextProviderTypes, ContextTypes } from "./context.types";

export const AppContext = createContext<ContextTypes>({
  scrollY: NaN,
});

const ContextProvider = ({ children }: ContextProviderTypes) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <AppContext.Provider
      value={{
        scrollY,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
