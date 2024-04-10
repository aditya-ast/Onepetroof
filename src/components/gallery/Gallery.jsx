import React from "react";

const Gallery = () => {
  return (
    <div>
      <section className="flex items-center bg-white font-poppins  ">
        <div className="container justify-center flex-1 px-4 py-4 mx-auto text-left lg:py-10 ">
          <div className="mx-auto max-w-7xl py-11">
            <span className="relative flex justify-center mb-32">
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

              <span className="relative z-10 text-3xl font-bold bg-white px-6">
                Gallery
              </span>
            </span>
            <div className="flex flex-wrap self-start gap-5">
              <div className="w-full lg:w-1/5 md:w-full lg:mb-0">
                <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                  <img
                    src="https://images.unsplash.com/photo-1437957146754-f6377debe171?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                    alt=""
                  />
                  <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                  <div>
                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                      <a
                        href="#"
                        className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-camera"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>
                          <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                      <a
                        href=""
                        className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                      >
                        Onepetroof
                      </a>
                      <p className="mb-0 text-xs text-gray-300">lorem ipsum</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-md shadow-md group">
                  <img
                    src="https://images.unsplash.com/photo-1504006833117-8886a355efbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGN1dGV8ZW58MHx8MHx8fDA%3D"
                    className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                    alt=""
                  />
                  <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                  <div>
                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                      <a
                        href="#"
                        className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-camera"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>
                          <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                      <a
                        href=""
                        className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                      >
                        Onepetroof
                      </a>
                      <p className="mb-0 text-xs text-gray-300">lorem ipsum</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-full lg:w-1/2 lg:mb-0">
                <div className="relative overflow-hidden rounded-md shadow-md group">
                  <img
                    src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0ZXxlbnwwfHwwfHx8MA%3D%3D"
                    className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[625px] w-full transition duration-500"
                    alt=""
                  />
                  <div className="absolute inset-0 h-[620px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                  <div>
                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                      <a
                        href="#"
                        className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-camera"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>
                          <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                      <a
                        href=""
                        className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                      >
                        Onepetroof
                      </a>
                      <p className="mb-0 text-xs text-gray-300">lorem ipsum</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mb-10 lg:w-1/5 md:w-full lg:mb-0">
                <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                  <img
                    src="https://images.unsplash.com/photo-1622641269217-954d3163a1e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGN1dGV8ZW58MHx8MHx8fDA%3D"
                    className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                    alt=""
                  />
                  <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                  <div>
                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                      <a
                        href="#"
                        className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-camera"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>
                          <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                      <a
                        href=""
                        className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                      >
                        Onepetroof
                      </a>
                      <p className="mb-0 text-xs text-gray-300">lorem ipsum</p>
                    </div>
                  </div>
                </div>
                <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                  <img
                    src="https://images.unsplash.com/photo-1514571948039-d3cb9e8f9750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGN1dGV8ZW58MHx8MHx8fDA%3D"
                    className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                    alt=""
                  />
                  <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                  <div>
                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                      <a
                        href="#"
                        className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-camera"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"></path>
                          <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                      <a
                        href=""
                        className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                      >
                        Onepetroof
                      </a>
                      <p className="mb-0 text-xs text-gray-300">lorem ipsum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
