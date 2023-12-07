"use client";
import { useState } from "react";
import { ServiceDataType, ServicesData } from "../../utils";

export interface useDataServiceProps {}

export type useDataServiceReturn = [
  ServiceDataType[],
  ServiceDataType | undefined,
  number | undefined
];

export default function useDataService(
  id: string | number | string[]
): useDataServiceReturn {
  const ids = Number(id);
  const [data] = useState(ServicesData[ids]);
  return [ServicesData, data, ids];
}
