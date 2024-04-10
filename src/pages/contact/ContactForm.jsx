import React from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <div>
      <div>
        <div className="max-w-screen-xl flex items-center mt-24 px-8 grid gap-24 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-white backdrop-blur-3xl text-gray-900 rounded-lg">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Stay in touch! Contact us
              </h2>
              <div className="text-gray-700 mt-8">
              Have a question? Give us a call or fill out the contact form. We’d love to hear from you
              </div>
            </div>
          </div>
          <div className>
            <div className="mt-8">
              <label
                htmlFor="UserName"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
              >
                <input
                  type="text"
                  id="UserName"
                  required
                  placeholder="Name*"
                  className="peer h-12 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Name
                </span>
              </label>
            </div>
            <div className="mt-8">
              <label
                htmlFor="UserEmail"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
              >
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Email*"
                  required
                  className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Email
                </span>
              </label>
            </div>
            <div className="mt-8">
              <label
                htmlFor="Number"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
              >
                <input
                  type="text"
                  maxLength={10}
                  id="UserNumber"
                  placeholder="Mobile Number*"
                  required
                  className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Mobile Number
                </span>
              </label>
            </div>

            <div className="mt-8">
              <label
                htmlFor="Message"
                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
              >
                <textarea
                  className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  defaultValue={""}
                  placeholder="Message"
                  id="UserMessage"
                  type = "text"
                  required
                />
                <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Message
                </span>
              </label>
            </div>
            <div className="mt-8">
              <Link
                className="group relative inline-block w-full text-center overflow-hidden border border-black px-8 py-3 focus:outline-none focus:ring"
                to="/"
              >
                <span className="absolute inset-y-0 left-0 w-[2px] bg-black duration-500 transition-all group-hover:w-full group-active:bg-black"></span>

                <span className="relative text-sm font-medium text-black transition-colors group-hover:text-white">
                  Send Message
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
