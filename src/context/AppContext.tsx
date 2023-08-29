import { createContext } from "react";
import { useEffect, useState } from "react";

import { ContextProviderTypes, ContextTypes } from "./context.types";

import { message } from "antd";

export const AppContext = createContext<ContextTypes>({
  scrollY: NaN,
  success: () => null,
  error: () => null,
  scrollPositionTop: () => null,
  contextHolder: null,
  lightMode: () => "",
  darkMode: () => "",
});

const ContextProvider = ({ children }: ContextProviderTypes) => {
  const [scrollY, setScrollY] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();
  const [backgroundMode, setBackgroundMode] = useState("bg-[#263238]");

  const lightMode = () => {
    return "bg-[#FFFFFF]";
  };

  const darkMode = () => {
    return "bg-[#263238]";
  };

  const scrollPositionTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const success = (e: any) => {
    messageApi.open({
      type: "success",
      content: `${e}`,
    });
  };

  const error = (e: any) => {
    messageApi.open({
      type: "error",
      content: `${e}`,
    });
  };
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <AppContext.Provider
      value={{
        scrollY,
        contextHolder,
        success,
        error,
        scrollPositionTop,
        lightMode,
        darkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
