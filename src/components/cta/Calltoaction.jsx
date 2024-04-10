import React from "react";
import { Link } from "react-router-dom";

const Calltoaction = () => {
  return (
    <div>
      <section className="flex items-center font-poppins ">
        <div className="justify-center flex-1 px-4 py-4 mx-auto lg:py-10 md:px-7">
          <div className="relative max-w-6xl mx-auto overflow-hidden rounded-md shadow bg-transparent">
            <div className="z-20 w-full px-4 py-12 lg:w-1/2 text-start sm:px-6 lg:py-16 lg:px-8">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Get Started your business from today
              </h2>
              <p className="mb-6 text-base font-medium text-gray-500 md:text-lg">
                Lorem ipsum dor amet set ispisucs ipsum amet dor lorem isodispus
              </p>
              <div className="flex flex-wrap items-center ">
                <Link
                  class="group relative shadow bg-white border-none mx-2 inline-block overflow-hidden border px-8 py-3 focus:outline-none focus:ring"
                  to="/cityhotels"
                >
                  <span class="absolute inset-y-0 left-0 w-[2px] bg-black duration-500 transition-all group-hover:w-full group-active:bg-black"></span>

                  <span class="relative text-sm font-medium text-black transition-colors group-hover:text-white">
                    Pet Hotel
                  </span>
                </Link>
                <Link
                  class="group relative shadow bg-white border-none mx-2 inline-block overflow-hidden border px-8 py-3 focus:outline-none focus:ring"
                  to="/cityngo"
                >
                  <span class="absolute inset-y-0 left-0 w-[2px] bg-black duration-500 transition-all group-hover:w-full group-active:bg-black"></span>

                  <span class="relative text-sm font-medium text-black transition-colors group-hover:text-white">
                    NGO's
                  </span>
                </Link>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/69371/pexels-photo-69371.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="absolute top-0 right-0 hidden w-1/2 h-full lg:block rounded-tr-md rounded-br-md transition duration-500 hover:scale-110 hover:rotate-3"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calltoaction;
