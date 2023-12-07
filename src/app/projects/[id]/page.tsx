"use client";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import useProjectsData from "@/libs/hooks/useProjectsData";
import Anchor from "@/libs/components/anchor";
import { Button } from "@/libs/components";
import ErrorPage from "@/app/error";
import { GetDateFormat } from "@/libs/utils";
import { useParams } from "next/navigation";

export default function ProjectId() {
  const { id } = useParams();
  const [, data, ida] = useProjectsData(id);
  if (data !== undefined && ida !== undefined) {
    return (
      <div>
        <div>
          <ImageGallery
            items={data.images}
            showNav={false}
            showPlayButton={false}
          />
        </div>
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <i>{GetDateFormat(data.date)}</i>
        <p>{data.desc}</p>
        <div className="mt-4">
          <Anchor to="/">
            <Button variants="black">Back To Home</Button>
          </Anchor>
        </div>
      </div>
    );
  } else {
    return <ErrorPage />;
  }
}
