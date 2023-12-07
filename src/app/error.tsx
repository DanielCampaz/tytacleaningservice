"use client";
import { Button } from "@/libs/components";
import Anchor from "@/libs/components/anchor";
import { LogosTheme } from "@/libs/utils";

export default function ErrorPage() {
  return (
    <div
      id="error-page"
      className="bg-slate-200 flex items-center justify-center h-screen"
    >
      <div>
        <div className="flex justify-center items-center">
          <img src={LogosTheme(0)} alt="Tyta Cleaning Service" />
          <div className="m-10 justify-center items-center">
            <h1 className="text-5xl mt-3 mb-3">Oops!</h1>
            <p className="text-lg">Sorry, an unexpected error has occurred.</p>
            <div>
              <p className="text-xs mt-2 mb-2">
                <i>440</i>
                <br />
                <i>No Mathes Route</i>
              </p>
              <Button>
                <Anchor to={"/"}>Go to Home</Anchor>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
