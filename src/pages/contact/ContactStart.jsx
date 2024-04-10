import React from "react";

const ContactStart = () => {
  return (
    <section className="py-32 bg-black flex flex-col justify-center">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative">
            <div className="lg:w-2/3">
              <p className="text-sm font-normal tracking-widest text-gray-300 uppercase" style={{ fontFamily: "Montserrat" }}>
                Welcome to the Contact of Onepetroof
              </p>
              <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                Pet Care like a family at 
                </span>{' '}
                Onepetroof.
              </h1>
              <p className="max-w-lg mt-4 text-l font-normal text-gray-400 sm:mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, mollitia excepturi! Delectus, eligendi impedit tenetur iste id velit molestias consequatur tempora aliquid sint, laudantium a ad laboriosam deserunt alias perferendis.
              </p>
            
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactStart;
