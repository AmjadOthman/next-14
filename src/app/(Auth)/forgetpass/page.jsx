import Image from "next/image";
import React from "react";
import ForgetImage from "../../../../public/contact.png";
function ForgetPassPage() {
  return (
    <div className="flex items-center justify-around flex-col md:flex-row">
      <div className="flex md:2/5 items-center justify-center w-full md:w-1/3 ">
        <Image src={ForgetImage} alt="" width={400} height={400} />
      </div>
      <div className="flex justify-center items-center mx-3 md:2/3  w-full">
        <form className=" container w-full md:w-3/5 flex-col items-start justify-start p-5 text-sky-700 text-lg border shadow-lg border-sky-700 rounded-lg bg-white">
          <h1 className="text-start font-bold text-lg md:xl  ml-2 ">
            Forgot Password Form
          </h1>
          <p className="text-sm text-start ml-2">
            Enter your email and we'll send link to reset password
          </p>
          <div className="flex-col items-center justify-center gap-5 w-full">
            <div className="flex justify-start items-center p-1 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
                width={40}
                height={40}
                className="mr-3"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>

              <input
                type="email"
                id="email"
                className="rounded-md p-0.5 w-3/4 border border-sky-700"
                required
              />
            </div>
            <div className="flex items-center justify-end m-3">
              <button className="bg-sky-600 p-2 m-2 text-lg rounded-md text-white  hover:text-sky-600 hover:bg-white duration-300">
                Verify
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassPage;
