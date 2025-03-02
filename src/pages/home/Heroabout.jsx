import React from "react";

const Heroabout = () => {
  return (
    <div>
      <section className="flex items-center mt-20  bg-white font-poppins ">
        <div className="justify-center flex-1 max-w-6xl px-4 mx-auto lg:py-6 md:px-6">
          <span className="relative flex justify-center mb-24">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

            <span className="relative z-10 text-3xl font-bold bg-white px-6">
              About Us
            </span>
          </span>
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
              <div className="flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <img
                    src="https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="object-cover w-full mb-6 rounded-lg h-80"
                  />
                  <img
                    src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="object-cover w-full rounded-lg h-80"
                  />
                </div>
                <div className="w-full px-4 md:w-1/2 xl:mt-11">
                  <img
                    src="https://images.pexels.com/photos/3361746/pexels-photo-3361746.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="object-cover w-full mb-6 rounded-lg h-80"
                  />
                  <img
                    src="https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="object-cover w-full rounded-lg h-80"
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
              <span className="text-sm font-semibold text-black">
                Why choose us
              </span>
              <h2 className="mt-2 mb-4 text-2xl font-bold text-gray-700">
                We are providing a better facility
              </h2>
              <p className="mb-4 text-base leading-7 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <ul className="mb-10">
                <li className="flex items-center mb-4 text-base text-gray-600">
                  <span className="mr-3 text-black ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-6 h-6 bi bi-1-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"
                      />
                    </svg>
                  </span>
                  Lorem ipsum, or lipsum known, is dummy text used
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600">
                  <span className="mr-3 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-6 h-6 bi bi-2-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
                    </svg>
                  </span>
                  The purpose of lorem create a natural looking block of text
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600">
                  <span className="mr-3 text-black ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-6 h-6 bi bi-3-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
                    </svg>
                  </span>
                  The passage experienced in popularity during the 1960s
                </li>
                <li className="flex items-center mb-4 text-base text-gray-600">
                  <span className="mr-3 text-black ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-6 h-6 bi bi-4-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176c-.218.352-.438.703-.657 1.055ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z" />
                    </svg>
                  </span>
                  esktop publishers bundled the text with their software.
                </li>
              </ul>

              <a
                class="group relative inline-block overflow-hidden border border-black px-8 py-3 focus:outline-none focus:ring"
                href="/download"
              >
                <span class="absolute inset-x-0 bottom-0 h-[2px] bg-black duration-500 transition-all group-hover:h-full group-active:bg-black"></span>

                <span class="relative text-sm font-medium text-black transition-colors group-hover:text-white">
                  Download
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heroabout;
