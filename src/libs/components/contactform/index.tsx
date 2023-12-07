"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "..";
import useDataService from "../../hooks/useDataServices";
import { useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";

export interface Inputs {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  phone: number;
}

export default function ContactForm() {
  const { id } = useParams();
  const [, data] = useDataService(id);
  const [valueSubject] = useState(
    data !== undefined ? `I need a service related to "${data.name}"` : ""
  );
  const [valueMessage] = useState(
    data !== undefined
      ? `Hello, my name is 'your name', I live in Maimi, and I need a service related to "${data.name}"`
      : ""
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.response.accepted.length === 1) {
          toast.success("Email Sent");
        }
      })
      .catch(() => {
        toast.error("Error To Send Message");
      });
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-slate-300 focus:shadow-md"
              {...register("fullName")}
            />
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              placeholder="1234465789"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-slate-300 focus:shadow-md"
              {...register("phone")}
            />
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-slate-300 focus:shadow-md"
              {...register("email")}
            />
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Enter your subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-slate-300 focus:shadow-md"
              {...register("subject", { value: valueSubject })}
            />
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-slate-300 focus:shadow-md"
              {...register("message", { value: valueMessage })}
            ></textarea>
          </div>
          {errors.email && <span>This field is required</span>}
          <div>
            <Button
              variants="black"
              className="hover:shadow-form rounded-md bg-slate-950 py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
