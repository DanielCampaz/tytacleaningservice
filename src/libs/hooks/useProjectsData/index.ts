"use client";
import { useParams } from "next/navigation";
import {
  DataProjects,
  DataProjectsType,
} from "../../utils/const/projectsconst";
import { useState } from "react";

export type useDataProjectsReturn = [
  DataProjectsType[],
  DataProjectsType | undefined,
  number | undefined
];

export default function useProjectsData(
  id?: string | number | string[]
): useDataProjectsReturn {
  const ids = Number(id);
  const [data] = useState(DataProjects[ids]);
  return [DataProjects, data, ids];
}
