"use client";
import Image from "next/image";
import Link from "next/link";
import IMG from "../../../../public/contact.png";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const body = { email, password };

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row">
      <div className="  md:w-1/3 lg:w-2/5">
        <Image src={IMG} alt="" width={500} height={500} />
      </div>

      <div className="  w-full flex items-center justify-center my-5 md:w-2/3 lg:3/5 md:ml-2">
        <form className="w-2/3 container flex-col items-center justify-center p-3 text-sky-700 text-lg border bg- rounded-lg my-3 mx-3 bg-white border-sky-700 shadow-lg">
          <h1 className="text-start font-bold  m-1 text-lg md:text-xl">
            Login Form
          </h1>
          <div className="flex-col items-center justify-center gap-5 w-full">
            <div className="flex justify-start items-center p-1 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
                width={40}
                height={40}
                className="mr-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <input
                type="email"
                id="email"
                name="email"
                className="rounded-md p-0.5 w-3/4 border border-sky-600 "
                required
                onChange={handleEmail}
              />
            </div>
            <div className="flex justify-start items-center p-1 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
                className="mr-5"
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
                className="rounded-md p-0.5 w-3/4 border-sky-600 border"
                onChange={handlePassword}
              />
            </div>
            <div className="flex items-center justify-end mr-4">
              <Link
                href="/forgetpass"
                className="ml-2 border-b text-sm  text-text-sky-600 hover:text-sky-950 duration-200"
              >
                Forget Password?
              </Link>
            </div>
            <div className="flex items-center justify-end m-2">
              <button
                type="submit"
                onClick={handlerSubmit}
                className="bg-sky-600 p-2 m-2 text-lg rounded-md text-white hover:text-sky-600 hover:bg-white duration-300"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
