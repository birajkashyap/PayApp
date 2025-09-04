"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md text-sm px-5 py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
    >
      {children}
    </button>
  );
};
