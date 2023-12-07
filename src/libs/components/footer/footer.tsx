import { FC } from "react";
import Anchor from "../anchor";

export const Footer: FC = () => {
  return (
    <footer>
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Tyta Service Cleaning. All rights
          reserved.
        </p>
        <p className="mt-2">
          <Anchor to="/contact" className="underline">
            Contact us
          </Anchor>
        </p>
      </div>
    </footer>
  );
};
