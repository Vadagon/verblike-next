import Link from "../../components/link";
import Layout from "../../components/layout";
import SignButtons from "../../components/account/signButtons";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import Date from "../../components/date";
import Image from "next/image";

export default function SignIn({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Sign In</title>
      </Head>
      <section className="section-grey">
        <div className="flex max-w-lg mx-auto my-16 overflow-hidden bg-white rounded-lg lg:space-x-8 dark:bg-gray-900 lg:max-w-5xl">
          <div className="items-center hidden lg:flex lg:w-1/2">
            <img
              src="https://tailwindcomponents.com/svg/secure-login-animate.svg"
              alt="secure-login-animate.svg"
            />
          </div>{" "}
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
              Welcome Back
            </h2>{" "}
            <p className="mt-2 text-xl text-center text-gray-600 dark:text-gray-200">
              We are <span className="text-primary text-indigo-500">Happy</span>{" "}
              to see you back
            </p>{" "}
            <SignButtons />
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>{" "}
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                or use your email
              </a>{" "}
              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>{" "}
            <form method="POST" action="https://tailwindcomponents.com/login">
              <input
                type="hidden"
                name="_token"
                defaultValue="1XV9qJE0Bb42Iyh4tEtXdjd4DPfMMkJzMIqDo0qi"
              />{" "}
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  E-Mail Address
                </label>{" "}
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40"
                />
              </div>{" "}
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Password
                </label>{" "}
                <input
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40"
                />
              </div>{" "}
              <div className="flex justify-between mt-4">
                <div className="col-md-6 offset-md-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="border-gray-300 rounded shadow-sm dark:bg-gray-900 text-primary focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />{" "}
                    <label
                      htmlFor="remember"
                      className="ml-2 text-gray-700 dark:text-gray-300 mb-0"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>{" "}
                <a
                  href="https://tailwindcomponents.com/password/reset"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Forgot Your Password?
                </a>
              </div>{" "}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-primary hover:bg-teal-300 focus:outline-none focus:bg-teal-300 bg-indigo-400"
                >
                  Sign in
                </button>
              </div>
            </form>{" "}
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>{" "}
              <Link
                href="register"
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                Create an account
              </Link>{" "}
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
