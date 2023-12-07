"use client";

import { FC, MouseEvent, ReactNode } from "react";

const Variants = {
  default: "rounded text-sm p-1.5 bg-white text-black",
  black: "rounded text-sm p-1.5 bg-slate-950 text-white",
};

const GetVariants = (className: string) => {
  return {
    default: Variants.default + className,
    black: Variants.black + className,
  };
};

export interface BottonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  children: ReactNode;
  variants?: keyof typeof Variants;
  className?: string;
}

export const Button: FC<BottonProps> = ({
  variants = "default",
  children,
  onClick,
  className = "",
}: BottonProps) => {
  return (
    <button className={GetVariants(className)[variants]} onClick={onClick}>
      {children}
    </button>
  );
};
