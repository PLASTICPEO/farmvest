import { createContext } from "react";
import { useEffect, useState } from "react";

import { ContextProviderTypes, ContextTypes } from "./context.types";

import { message } from "antd";

export const AppContext = createContext<ContextTypes>({
  scrollY: NaN,
  success: () => null,
  error: () => null,
  contextHolder: null,
});

const ContextProvider = ({ children }: ContextProviderTypes) => {
  const [scrollY, setScrollY] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();

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
        contextHolder,
        success,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
