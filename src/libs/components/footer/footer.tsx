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
        <div className="flex justify-center mt-2">
          <Anchor to="/contact" className="mr-4 underline">
            Contact us
          </Anchor>
          <Anchor
            to="https://www.instagram.com/tytacleaningservice/?hl=es"
            target="_blank"
            className="mr-4 underline"
            type="a"
          >
            Instagram
          </Anchor>
          <Anchor
            to="https://www.facebook.com/profile.php?id=61553239627553"
            target="_blank"
            className="mr-4 underline"
            type="a"
          >
            Facebook
          </Anchor>
          <Anchor
            to="https://wa.me/19544771076"
            className="mr-4 underline"
            target="_blank"
            type="a"
          >
            WhatsApp
          </Anchor>
        </div>
      </div>
    </footer>
  );
};
