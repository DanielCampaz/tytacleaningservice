"use client";
import AboutFill from "@/libs/components/aboutfill";
import { ServicesComponent } from "../page";
import ErrorPage from "@/app/error";
import useDataService from "@/libs/hooks/useDataServices";
import { useParams } from "next/navigation";

export default function ServiceId() {
  const { id } = useParams();
  const [, data, idD] = useDataService(id);
  if (data !== undefined && idD !== undefined) {
    return (
      <div>
        <AboutFill
          contactName={`Contact For ${data!.name}`}
          id={idD}
          image={{ src: data!.img, alt: data!.name }}
          paragraph={data!.description}
          title={data!.name}
          side={0}
        />
        <div>
          <ServicesComponent />
        </div>
      </div>
    );
  } else {
    return <ErrorPage />;
  }
}
