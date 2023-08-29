import { useState } from "react";

export const useDropDown = () => {
  const [dropDownToggle, setToggle] = useState(false);
  const [selecterTitle, setSelected] = useState("What is FarmVest ?");

  const selected = (title: any) => {
    setSelected(title);
    setToggle(!dropDownToggle);
  };
  return {
    selected,
    setSelected,
    setToggle,
    selecterTitle,
    dropDownToggle,
  };
};
