export interface RoutesIcon {
  dark: string;
  white: string;
  alt: string;
}

export interface RoutesConst {
  path: string;
  name: string;
  icon?: RoutesIcon;
}

export interface RoutesType extends RoutesConst {
  wid?: boolean;
}

export type DateStringLarge =
  `${string}/${string}/${string}T${string}${string}:${string}${string}:${string}${string}.${string}${string}${string}Z`;
export type DateStringLong = `${string}/${string}/${string}`;
export type DateString = DateStringLong | DateStringLarge;

export type ComPage = "page" | "component";
