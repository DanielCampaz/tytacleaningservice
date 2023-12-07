import { FC, ReactNode } from "react";
import Link from "next/link";

export interface AnchorProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const Anchor: FC<AnchorProps> = ({ children, to, className }) => {
  return (
    <Link href={to} className={className}>
      {children}
    </Link>
  );
};

export default Anchor;
