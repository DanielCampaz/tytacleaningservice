import { FC, ReactNode } from "react";
import Image from "../images";
import Anchor from "../anchor";
import { RoutesIcon } from "@/app/types";

export interface NavItemProps {
  to: string;
  icon?: RoutesIcon;
  children: ReactNode;
  cls: 1 | 0;
}

const classNames = ["p-2 hover:bg-slate-300 hover:rounded-xl m-2", "p-2 m-2"];

export const NavItem: FC<NavItemProps> = ({
  cls,
  children,
  to,
  icon,
}: NavItemProps) => {
  return (
    <Anchor to={to} className={classNames[cls]}>
      {icon !== undefined ? (
        <Image src={icon.white} alt={icon.alt} width="w-[36px]" />
      ) : (
        <div>{children}</div>
      )}
    </Anchor>
  );
};
