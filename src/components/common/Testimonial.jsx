import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import img from '../../assets/Images/bg.jpg'
// import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import awardsBg from '../../assets/Backdrop/awards-bg.png'
// import chairman from '../../assets/testimonials/ashwani-sir.webp'
// import principal from '../../assets/testimonials/principal copy.png'
const Testimonial = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const sections = [
    {
      content: (
        <section className="mb-0 text-center lg:text-left">
          <div className="py-5 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className=" grid items-center lg:grid-cols-2">
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                  <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] md:px-12 lg:-mr-14">
                    <h2 className="mb-5 text-3xl font-bold text-primary">
                      Anshul Chauhan
                    </h2>
                    
                    <p className="mb-6 text-neutral-500">
                      Nunc tincidunt vulputate elit. Mauris varius purus
                      malesuada neque iaculis malesuada. Aenean gravida magna
                      orci, non efficitur est porta id. Donec magna diam.
                    </p>
                    <p className="mb-6 text-neutral-500">
                      Ad, at blanditiis quaerat laborum officia incidunt
                      cupiditate dignissimos voluptates eius aliquid minus
                      praesentium! Perferendis et totam ipsum ex aut earum
                      libero accusamus voluptas quod numquam saepe, consequuntur
                      nihil quia tenetur consequatur. Quis, explicabo deserunt
                      quasi assumenda ea maiores nulla, et dolor saepe
                      praesentium natus error reiciendis voluptas iste. Esse,
                      laudantium ipsum animi, quos voluptatibus atque vero
                      repellat sit eligendi autem maiores quasi cum aperiam.
                      Aperiam rerum culpa accusantium, ducimus deserunt aliquid
                      alias vitae quasi corporis placeat vel maiores explicabo
                      commodi!
                    </p>
                    <ul className="flex justify-center lg:justify-start">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-primary"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-primary"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-primary"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-primary"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-primary"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <img
                    src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGN1dGV8ZW58MHx8MHx8fDA%3D"
                    className="lg:rotate-[6deg] w-3/4 rounded-lg shadow-lg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    {
      content: (
        <section className="mb-32 text-center lg:text-left">
          <div className="py-12 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className=" grid items-center lg:grid-cols-2">
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                  <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] md:px-12 lg:-mr-14">
                    <h2 className="mb-5 text-3xl font-bold text-primary">
                      Anshul Chauhan
                    </h2>
                    
                    <p className="mb-6 text-neutral-500">
                      Nunc tincidunt vulputate elit. Mauris varius purus
                      malesuada neque iaculis malesuada. Aenean gravida magna
                      orci, non efficitur est porta id. Donec magna diam.
                    </p>
                    <p className="mb-6 text-neutral-500">
                      Ad, at blanditiis quaerat laborum officia incidunt
                      cupiditate dignissimos voluptates eius aliquid minus
                      praesentium! Perferendis et totam ipsum ex aut earum
                      libero accusamus voluptas quod numquam saepe, consequuntur
                      nihil quia tenetur consequatur. Quis, explicabo deserunt
                      quasi assumenda ea maiores nulla, et dolor saepe
                      praesentium natus error reiciendis voluptas iste. Esse,
                      laudantium ipsum animi, quos voluptatibus atque vero
                      repellat sit eligendi autem maiores quasi cum aperiam.
                      Aperiam rerum culpa accusantium, ducimus deserunt aliquid
                      alias vitae quasi corporis placeat vel maiores explicabo
                      commodi!
                    </p>
                    <ul className="flex justify-center lg:justify-start">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-primary"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-primary"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-primary"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-primary"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-primary"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <img
                    src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGN1dGV8ZW58MHx8MHx8fDA%3D"
                    className="lg:rotate-[6deg] w-3/4 rounded-lg shadow-lg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    {
        content: (
          <section className="mb-32 text-center lg:text-left">
            <div className="py-12 md:px-12">
              <div className="container mx-auto xl:px-32">
                <div className=" grid items-center lg:grid-cols-2">
                  <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                    <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] md:px-12 lg:-mr-14">
                      <h2 className="mb-5 text-3xl font-bold text-primary">
                        Anshul Chauhan
                      </h2>
                      
                      <p className="mb-6 text-neutral-500">
                        Nunc tincidunt vulputate elit. Mauris varius purus
                        malesuada neque iaculis malesuada. Aenean gravida magna
                        orci, non efficitur est porta id. Donec magna diam.
                      </p>
                      <p className="mb-6 text-neutral-500">
                        Ad, at blanditiis quaerat laborum officia incidunt
                        cupiditate dignissimos voluptates eius aliquid minus
                        praesentium! Perferendis et totam ipsum ex aut earum
                        libero accusamus voluptas quod numquam saepe, consequuntur
                        nihil quia tenetur consequatur. Quis, explicabo deserunt
                        quasi assumenda ea maiores nulla, et dolor saepe
                        praesentium natus error reiciendis voluptas iste. Esse,
                        laudantium ipsum animi, quos voluptatibus atque vero
                        repellat sit eligendi autem maiores quasi cum aperiam.
                        Aperiam rerum culpa accusantium, ducimus deserunt aliquid
                        alias vitae quasi corporis placeat vel maiores explicabo
                        commodi!
                      </p>
                      <ul className="flex justify-center lg:justify-start">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 96 960 960"
                            className="w-5 text-primary"
                          >
                            <path
                              fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                            />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 96 960 960"
                            className="w-5 text-primary"
                          >
                            <path
                              fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                            />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 96 960 960"
                            className="w-5 text-primary"
                          >
                            <path
                              fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                            />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 96 960 960"
                            className="w-5 text-primary"
                          >
                            <path
                              fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                            />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 96 960 960"
                            className="w-5 text-primary"
                          >
                            <path
                              fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                            />
                          </svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:mb-12 lg:mb-0">
                    <img
                      src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGN1dGV8ZW58MHx8MHx8fDA%3D"
                      className="lg:rotate-[6deg] w-3/4 rounded-lg shadow-lg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ),
      },
      {
        content: (
          <section className="mb-32 text-center lg:text-left">
            <div className="py-12 md:px-12">
              <div className="container mx-auto xl:px-32">
                <div className=" grid items-center lg:grid-cols-2">
                  <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                    <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] md:px-12 lg:-mr-14">
                      <h2 className="mb-5 text-3xl font-bold text-primary">
                        Anshul Chauhan
                      </h2>
                      
                      <p className="mb-6 text-neutral-500">
                        Nunc tincidunt vulputate elit. Mauris varius purus
                        malesuada neque iaculis malesuada. Aenean gravida magna
                        orci, non efficitur est porta id. Donec magna diam.
                      </p>
                      <p className="mb-6 text-neutral-500">
                        Ad, at blanditiis quaerat laborum officia incidunt
                        cupiditate dignissimos voluptates eius aliquid minus
                        praesentium! Perferendis et totam ipsum ex aut earum
                        libero accusamus voluptas quod numquam saepe, consequuntur
                        nihil quia tenetur consequatur. Quis, explicabo deserunt
                        quasi assumenda ea maiores nulla, et dolor saepe
                        praesentium natus error reiciendis voluptas iste. Esse,
                        laudantium ipsum animi, quos voluptatibus atque vero
                        repellat sit eligendi autem maiores quasi cum aperiam.
                        Aperiam rerum culpa accusantium, ducimus deserunt aliquid
                        alias vitae quasi corporis placeat vel maiores explicabo
                        commodi!
                      </p>
                      <ul className="flex justify-center lg:justify-start">
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 96 960 960"
                            className="w-5 text-primary"
                          >
                            <path
                              fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                            />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 96 960 960"
                            className="w-5 text-primary"
                          >
                            <path
                              fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                            />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 96 960 960"
                            className="w-5 text-primary"
                          >
                            <path
                              fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                            />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 96 960 960"
                            className="w-5 text-primary"
                          >
                            <path
                              fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                            />
                          </svg>
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 96 960 960"
                            className="w-5 text-primary"
                          >
                            <path
                              fill="currentColor"
                              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                            />
                          </svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:mb-12 lg:mb-0">
                    <img
                      src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGN1dGV8ZW58MHx8MHx8fDA%3D"
                      className="lg:rotate-[6deg] w-3/4 rounded-lg shadow-lg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ),
      },

    // You can add more sections as needed
  ];

  const handleButtonClick = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        activeSection - 1 < 0 ? sections.length - 1 : activeSection - 1;
    } else {
      newIndex = (activeSection + 1) % sections.length;
    }
    setActiveSection(newIndex);
    sliderRef.current.slickGoTo(newIndex);
  };

  return (
    <div className=" w-10/12 m-auto item-start text-center my-10">
      <div class="text-center max-w-xl mx-auto mb-12">
        <h2 class="text-3xl font-medium">Tales of Transformations</h2>
        <p class="text-sm mt-4 leading-relaxed">
          Lets hear from some eminent personalities about their views on working
          with us
        </p>
      </div>
      <div className="w-full m-auto mt-8 ">
      <div className="flex justify-center gap-2">
          <div
            className="bg-[#00112d] w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer"
            onClick={() => handleButtonClick("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-[#fff] inline"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
                data-original="#000000"
              ></path>
            </svg>
          </div>
          <div
            className="bg-[#00112d] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer"
            onClick={() => handleButtonClick("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-[#fff] inline"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
                data-original="#000000"
              ></path>
            </svg>
          </div>
        </div>
      
        <Slider ref={sliderRef} {...settings}>
          {sections.map((section, index) => (
            <div key={index} className="outline-none ">
              {/* <h2 className="text-2xl font-medium mb-4">{section.title}</h2> */}
              <p>{section.content}</p>
            </div>
          ))}
        </Slider>

        
        
      </div>
    </div>
  );
};

export default Testimonial;
