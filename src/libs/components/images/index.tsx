export interface ImageProps {
  src: string;
  alt: string;
  width: string;
  className?: string;
}

const getClassName = (width: string, classc?: string) => {
  if (classc !== undefined) return width + " max-w-none " + classc;
  else return width + " max-w-none";
};

export default function ImageCC({ alt, src, width, className }: ImageProps) {
  return <img src={src} alt={alt} className={getClassName(width, className)} />;
}
