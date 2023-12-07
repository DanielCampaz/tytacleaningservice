"use client";
import { ImageDateProjectType } from "@/libs/utils/const/projectsconst";
import { DateString } from "../types";
import Anchor from "@/libs/components/anchor";
import useArrayTransform from "@/libs/hooks/useArrayTransform";
import useProjectsData from "@/libs/hooks/useProjectsData";
import { GetDateFormat, TextShortener } from "@/libs/utils";
import ImageCC from "@/libs/components/images";

export interface ProjectsCardProps {
  index: number | string;
  date: DateString;
  image: ImageDateProjectType;
  title: string;
  desc: string;
}

export function ProjectsCard({
  date,
  index,
  image,
  title,
  desc,
}: ProjectsCardProps) {
  return (
    <div className="max-w-[30%] rounded-lg shadow">
      <Anchor to={`/projects/${index}`}>
        <ImageCC
          className="rounded-t-lg"
          src={image.original}
          alt={title}
          width="w-full"
        />
      </Anchor>
      <div className="p-5">
        <Anchor to={`/projects/${index}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
          <i>{GetDateFormat(date)}</i>
        </Anchor>
        <p className="mb-3 font-normal">{TextShortener(desc, 50)}</p>
        <Anchor
          to={`/projects/${index}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          See Project
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Anchor>
      </div>
    </div>
  );
}

export interface ProjectsProps {
  slice?: number;
}

export default function Projects() {
  const [dataProjects] = useProjectsData();
  return (
    <div>
      <div className="container flex items-center justify-center flex-wrap w-full  gap-4">
        {dataProjects.map((data, index) => (
          <ProjectsCard
            key={`PorjectCars-${index}-oiu`}
            index={index}
            image={data.images[0]}
            {...data}
          />
        ))}
      </div>
    </div>
  );
}

export function ProjectsComponent({ slice }: ProjectsProps) {
  const [dataProjectsW] = useProjectsData();
  const dataProjects = useArrayTransform(dataProjectsW, slice);
  return (
    <div>
      <div className="container flex items-center justify-center flex-wrap w-full  gap-4">
        {dataProjects.map((data, index) => (
          <ProjectsCard
            key={`PorjectCars-${index}-oiu`}
            index={index}
            image={data.images[0]}
            {...data}
          />
        ))}
      </div>
    </div>
  );
}
