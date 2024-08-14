import Image from "next/image";
import { Inter } from "next/font/google";
import { useRef, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const fullName = useRef();
  const companyName = useRef();
  const emailAddress = useRef();
  const phoneNumber = useRef();
  const message = useRef();
  const state = useRef();

  return (
    <div className="max-w-sm m-auto p-2">
      <form action="">
        <nav className="text-center  text-white font-bold">Registration</nav>
        <nav className="flex justify-center p-2">
          <img src="/logo.png" className="w-1/4" alt="" />
        </nav>
        <div className="flex flex-col p-4 gap-4 text-xs ">
          <div className="flex flex-col gap-1 ">
            <span className="text-white">Full Name</span>
            <input type="text" className="bg-white p-1" ref={fullName} />
          </div>
          <div className="flex flex-col gap-1 ">
            <span className="text-white">Company Name</span>
            <input type="text" className="bg-white p-1" ref={companyName} />
          </div>
          <div className="flex flex-col gap-1 ">
            <span className="text-white">Email Address</span>
            <input type="text" className="bg-white p-1" ref={emailAddress} />
          </div>
          <div className="flex flex-col gap-1 ">
            <span className="text-white">Phone Number</span>
            <input type="text" className="bg-white p-1" ref={phoneNumber} />
          </div>
          <div className="flex  gap-1 items-start">
            <span className="text-white font-bold text-center">
              Do you have any questions or topic you would like to see covered
              at the event?
            </span>
          </div>
          <textarea
            name=""
            id=""
            className="rounded-md p-2"
            ref={message}
          ></textarea>
          <div className="flex  gap-1 items-start">
            <input
              type="checkbox"
              className="bg-white p-1"
              ref={state}
              onChange={() => {
                console.log(state.current.checked);
              }}
            />{" "}
            <span className="text-white">
              would you like to receive updates and follow-up information after
              the event?
            </span>
          </div>
          <div className="flex justify-center">
            <button
              className="p-1 px-6 bg-white rounded-md"
              onClick={(e) => {
                e.preventDefault();

                const user = {
                  fullName: fullName.current.value,
                  companyName: companyName.current.value,
                  emailAddress: emailAddress.current.value,
                  phoneNumber: phoneNumber.current.value,
                  message: message.current.value,
                  notification: state.current.checked,
                };

                axios
                  .post("/api/register", user)
                  .then(({ data }) => {
                    console.log(data);
                  })
                  .catch(() => {});
                console.log(user);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
