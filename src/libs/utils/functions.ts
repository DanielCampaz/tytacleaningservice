import { DateString } from "@/app/types";

export const LogosTheme = (theme: 0 | 1) => {
  const lthe = ["tytaLogo.ico", "tytaLogo-white.ico"];

  return lthe[theme];
};

export const ConvertText = (text: string) => {
  return `${text.slice(0, 1).toUpperCase()}${text.slice(1, text.length)}`;
};

export const ConvertUrlId = (
  urlWhitOutID: string,
  urlWhitID?: string,
  id?: string | number
) => {
  if (id !== undefined && urlWhitID !== undefined) {
    return urlWhitID + id;
  } else {
    return urlWhitOutID;
  }
};

export const GetDate = (separator = "-") => {
  const date = new Date();

  return `${date.getDay()}${separator}${date.getMonth()}${separator}${date.getFullYear()}`;
};

export const GetDateFormat = (datef: DateString, separator = "-") => {
  const date = new Date(datef);

  return `${date.getDate()}${separator}${
    date.getMonth() + 1
  }${separator}${date.getFullYear()}`;
};

export const TextShortener = (texto: string, longitudMaxima: number = 100) => {
  if (texto.length > longitudMaxima) {
    return texto.slice(0, longitudMaxima) + "...";
  } else {
    return texto;
  }
};
