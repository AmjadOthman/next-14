import Image from "next/image";
import React from "react";
import RegisterImage from "../../../../public/about.png";
function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-around md:flex-row">
      <div className="flex items-center justify-center w-full m-5 md:2/3">
        <form className="container w-full flex-col items-center justify-center p-5 text-sky-700 text-lg border-sky-700 border rounded-lg  shadow-lg bg-white ">
          <h1 className="text-start font-bold text-2xl m-1">Register Form</h1>
          <div className="flex-col items-center justify-center gap-5 w-full">
            <div className="flex justify-start items-center p-1 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
                className="mr-3"
                width={40}
                height={40}
              >
                <path
                  fill-rule="evenodd"
                  d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                  clip-rule="evenodd"
                />
                <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
              </svg>

              <input
                type="text"
                id="name"
                className="rounded-md p-0.5 w-3/4 border-sky-700 border"
                required
                placeholder="Name"
              />
            </div>
            <div className="flex justify-start items-center p-1 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
                className="mr-3"
                width={40}
                height={40}
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>

              <input
                type="email"
                id="email"
                required
                className="rounded-md p-0.5 w-3/4 border-sky-700 border"
                placeholder="email"
              />
            </div>

            <div className="flex justify-start items-center p-1 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
                className="mr-3"
                width={40}
                height={40}
              >
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path
                  fill-rule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                  clip-rule="evenodd"
                />
              </svg>

              <input
                type="password"
                id="password"
                required
                className="rounded-md p-0.5 w-3/4 border-sky-700 border"
                placeholder="password"
              />
            </div>

            <div className="flex justify-start items-center p-1 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
                className="mr-3"
                width={40}
                height={40}
              >
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path
                  fill-rule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                  clip-rule="evenodd"
                />
              </svg>

              <input
                type="password"
                id="cpassword"
                required
                className="rounded-md p-0.5 w-3/4 border-sky-700 border"
                placeholder="confirm password"
              />
            </div>

            <div className="flex items-center justify-end m-2">
              <button className="bg-sky-600 p-2 m-2 text-lg rounded-md text-white  hover:text-sky-600 hover:bg-white duration-300">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="flex w-full items-center justify-center">
        <Image src={RegisterImage} alt="" width={500} height={500} />
      </div>
    </div>
  );
}

export default RegisterPage;
