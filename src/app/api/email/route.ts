import { Inputs } from "@/libs/components/contactform";
import SendEmail from "@/libs/email";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Inputs;
    const respo = await SendEmail(data);
    if (respo instanceof Error) {
      return new NextResponse(JSON.stringify(respo));
    }
    return new NextResponse(JSON.stringify({ response: respo }));
  } catch (error) {
    return new NextResponse(JSON.stringify(error));
  }
}
