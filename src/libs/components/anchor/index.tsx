import { FC, ReactNode } from "react";
import Link from "next/link";

export interface AnchorProps {
  to: string;
  children: ReactNode;
  className?: string;
  type?: "a" | "link";
  target?: "_blank" | "_self";
}

const Anchor: FC<AnchorProps> = ({
  children,
  to,
  className,
  type = "link",
  target = "_self",
}) => {
  if (type === "a") {
    return (
      <a href={to} className={className} target={target}>
        {children}
      </a>
    );
  }
  return (
    <Link href={to} className={className}>
      {children}
    </Link>
  );
};

export default Anchor;
