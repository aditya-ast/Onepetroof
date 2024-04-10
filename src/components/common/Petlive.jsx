import React from "react";
import { Link } from "react-router-dom";

// import images black
import chennaib from "../../assets/City-Black/Chennaib.png";
import hydrabadb from "../../assets/City-Black/Hydrabadb.png";
import delhib from "../../assets/City-Black/Delhib.png";
import jaipurb from "../../assets/City-Black/Jaipurb.png";
import kolkatab from "../../assets/City-Black/Kolkatab.png";
import mumbaib from "../../assets/City-Black/mumbaib.png";
import suratb from "../../assets/City-Black/Suratb.png";
import agrab from "../../assets/City-Black/tajmahal.png";

const Petlive = () => {
  return (
      <div className=" w-10/12 mt-24 m-auto item-start text-center my-10">
      <div class="text-center max-w-xl mx-auto mb-12">
        <h2 class="text-3xl font-medium">Select Your City</h2>
        <p class="text-sm mt-4 leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, laboriosam!
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <div className=" p-4">
          <Link
            className="flex justify-center rounded  bg-transparent px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-white"
            to="/hotels"
          >
            <span class="absolute inset-y-0 left-0 w-[2px] bg-black transition-all duration-500 group-hover:w-full group-active:bg-black"></span>

            <span class="relative text-sm font-medium">
              <img src={delhib} className=" w-24 h-24" alt="" />
              <p className="mx-7  text-black transition-colors group-hover:text-white">
                Delhi
              </p>
            </span>
          </Link>
        </div>
        <div className=" p-4">
          <Link
            className="flex justify-center rounded bg-transparent px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-white"
            to="/hotels"
          >
            <span class="absolute inset-y-0 left-0 w-[2px] bg-black transition-all duration-500 group-hover:w-full group-active:bg-black"></span>

            <span class="relative text-sm font-medium">
              <img src={jaipurb} className=" w-24 h-24" alt="" />
              <p className="mx-7  text-black transition-colors group-hover:text-white">
                Jaipur
              </p>
            </span>
          </Link>
        </div>
        <div className=" p-4">
          <Link
            className="flex justify-center rounded bg-transparent px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-white"
            to="/hotels"
          >
            <span class="absolute inset-y-0 left-0 w-[2px] bg-black transition-all duration-500 group-hover:w-full group-active:bg-black"></span>

            <span class="relative text-sm font-medium">
              <img src={suratb} className=" w-24 h-24" alt="" />
              <p className="mx-7  text-black transition-colors group-hover:text-white">
                Surat
              </p>
            </span>
          </Link>
        </div>
        <div className=" p-4">
          <Link
            className="flex justify-center rounded bg-transparent px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-white"
            to="/hotels"
          >
            <span class="absolute inset-y-0 left-0 w-[2px] bg-black transition-all duration-500 group-hover:w-full group-active:bg-black"></span>

            <span class="relative text-sm font-medium">
              <img src={hydrabadb} className=" w-24 h-24 mx-2.5" alt="" />
              <p className="mx-7  text-black transition-colors group-hover:text-white">
                Hydrabad
              </p>
            </span>
          </Link>
        </div>
        <div className=" p-4">
          <Link
            className="flex justify-center rounded bg-transparent px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-white"
            to="/hotels"
          >
            <span class="absolute inset-y-0 left-0 w-[2px] bg-black transition-all duration-500 group-hover:w-full group-active:bg-black"></span>

            <span class="relative text-sm font-medium">
              <img src={agrab} className=" w-24 h-24" alt="" />
              <p className="mx-7  text-black transition-colors group-hover:text-white">
                Agra
              </p>
            </span>
          </Link>
        </div>
        <div className=" p-4">
          <Link
            className="flex justify-center rounded bg-transparent px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-white"
            to="/hotels"
          >
            <span class="absolute inset-y-0 left-0 w-[2px] bg-black transition-all duration-500 group-hover:w-full group-active:bg-black"></span>

            <span class="relative text-sm font-medium">
              <img src={mumbaib} className=" w-24 h-24 mx-1.5" alt="" />
              <p className="mx-7  text-black transition-colors group-hover:text-white">
                Mumbai
              </p>
            </span>
          </Link>
        </div>
        <div className=" p-4">
          <Link
            className="flex justify-center rounded bg-transparent px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-white"
            to="/hotels"
          >
            <span class="absolute inset-y-0 left-0 w-[2px] bg-black transition-all duration-500 group-hover:w-full group-active:bg-black"></span>

            <span class="relative text-sm font-medium">
              <img src={kolkatab} className=" w-24 h-24 mx-1" alt="" />
              <p className="mx-7  text-black transition-colors group-hover:text-white">
                Kolkata
              </p>
            </span>
          </Link>
        </div>
        <div className=" p-4">
          <Link
            className="flex justify-center rounded bg-transparent px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-white"
            to="/hotels"
          >
            <span class="absolute inset-y-0 left-0 w-[2px] bg-black transition-all duration-500 group-hover:w-full group-active:bg-black"></span>

            <span class="relative text-sm font-medium">
              <img src={chennaib} className=" w-24 h-24 mx-1.5" alt="" />
              <p className="mx-7  text-black transition-colors group-hover:text-white">
                Chennai
              </p>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Petlive;
