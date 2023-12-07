import { Button } from "..";
import { ConvertText, ConvertUrlId } from "../../utils";
import Anchor from "../anchor";
import Image from "../images";

export interface AboutFillPropsImage {
  src: string;
  alt: string;
}
export interface AboutFillProps {
  side: number;
  image: AboutFillPropsImage;
  title: string;
  paragraph: string;
  id?: string | number;
  contactName: string;
}

export default function AboutFill({
  side,
  image,
  paragraph,
  title,
  id,
  contactName,
}: AboutFillProps) {
  if (side === 1) {
    return (
      <div className="container p-6 flex flex-col md:flex-row ">
        <div className="md:w-1/2 md:pr-6">
          <Image
            src={image.src}
            alt={image.alt}
            width="w-full"
            className="rounded-lg"
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center mt-4 md:mt-0">
          <div className="text-center">
            <h1 className="text-2xl font-bold">{ConvertText(title)}</h1>
            <p className="mt-2">{ConvertText(paragraph)}</p>
            <div className="mt-5 mx-auto">
              <Anchor to={ConvertUrlId("/contact", "/contact/", id)}>
                <Button variants="black">{ConvertText(contactName)}</Button>
              </Anchor>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container p-6 flex flex-col md:flex-row ">
        <div className="md:w-1/2 flex flex-col justify-center mb-4 md:mt-0">
          <div className="text-center">
            <h1 className="text-2xl font-bold">{ConvertText(title)}</h1>
            <p className="mt-2">{ConvertText(paragraph)}</p>
            <div className="mt-5 mx-auto">
              <Anchor to={ConvertUrlId("/contact", "/contact/", id)}>
                <Button variants="black">{ConvertText(contactName)}</Button>
              </Anchor>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:pr-6">
          <Image
            src={image.src}
            alt={image.alt}
            width="w-full"
            className="rounded-lg"
          />
        </div>
      </div>
    );
  }
}
