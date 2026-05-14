import React from "react";

interface GlitchTextProps {
  text: string;
}

export const GlitchText = ({ text }: GlitchTextProps) => {
  return (
    <span className="glitch-text text-[#fff] tracking-tighter">{text}</span>
  );
};
