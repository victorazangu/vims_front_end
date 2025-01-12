"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";
import { Input, Submit } from "@/components";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleSignInClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Image className="w-20 h-20 mr-2" src={Logo} alt="Logo" priority />

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#d9d9d9]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSignInClick}
            >
              <Input
                label="Email"
                name="email"
                type="text"
                value=""
                placeholder="Enter Email"
              />
              <Input
                label="Password"
                name="password"
                type="password"
                value=""
                placeholder="Enter Password"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember">Remember me</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <Submit name="Sign In" onClick={handleSignInClick} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
