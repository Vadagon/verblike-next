import Link from "../../components/link";
import Layout from "../../components/layout";
import SignButtons from "../../components/account/signButtons";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import Date from "../../components/date";
import Image from "next/image";

export default function RegisterIn({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Welcome</title>
      </Head>
      <section className="section-grey">
        <div className="flex max-w-lg mx-auto my-16 overflow-hidden bg-white rounded-lg lg:space-x-8 dark:bg-gray-900 lg:max-w-5xl">
          <div className="items-center hidden lg:flex lg:w-1/2">
            <img
              src="https://tailwindcomponents.com/svg/queue-animate.svg"
              alt="secure-login-animate.svg"
            />
          </div>{" "}
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
              Welcome
            </h2>{" "}
            <p className="mt-2 text-xl text-center text-gray-600 dark:text-gray-200">
                Manage all Verblike products in one place
            </p>{" "}
            <SignButtons />
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>{" "}
              <a
                className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                or use your email
              </a>{" "}
              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>{" "}
            <form
              method="POST"
              action="https://tailwindcomponents.com/register"
            >
              <input
                type="hidden"
                name="_token"
                defaultValue="3VV7VGJMx7EkQCydSmzZVqvzki8SkpmLM0vcD6l8"
              />
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue=""
                  required={true}
                  autoComplete="name"
                  autoFocus={true}
                  className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  required={true}
                  autoComplete="email"
                  className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required={true}
                  className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password_confirmation"
                  required={true}
                  className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40"
                />
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-primary hover:bg-teal-300 focus:outline-none focus:bg-teal-300"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>{" "}
              <Link
                href="/signin"
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                Do you have an account?
              </Link>{" "}
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
