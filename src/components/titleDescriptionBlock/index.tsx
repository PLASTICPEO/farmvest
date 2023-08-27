import { TitleDescriptionTypes } from "./titleDescriptionBlock.types";
import React from "react";

const TitleDescriptionBlock: React.FC<TitleDescriptionTypes> = ({
  title,
  specialWord,
  description,
  titleAdditionalStyle,
  descripAddStyle,
}) => {
  // Create a function to replace the special word in the text with a styled <span>
  const highlightSpecialWord = (text: string) => {
    return text.replace(
      new RegExp(specialWord, "gi"), // gi for global and case-insensitive match
      (match) => `<span class="text-[#23B123]">${match}</span>`
    );
  };

  return (
    <div>
      <p
        className={`text-[#FFFFFF] text-5xl font-Lora p-4 ${titleAdditionalStyle}`}
        dangerouslySetInnerHTML={{ __html: highlightSpecialWord(title) }}
      ></p>
      <p className={`text-[#FFFFFF] text-sm font-thin p-4 ${descripAddStyle}`}>
        {description}
      </p>
    </div>
  );
};

export default TitleDescriptionBlock;
