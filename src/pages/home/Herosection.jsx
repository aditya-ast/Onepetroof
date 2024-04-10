import React, { useState, useEffect } from "react";
import "./herostyle.css";

import bg1 from "../../assets/hero/bg1.gif";
import bg2 from "../../assets/hero/bg2.gif";
import bg3 from "../../assets/hero/bg3.gif";
import bg4 from "../../assets/hero/bg4.gif";

const Herosection = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slidesData = [
    {
      category: "#Onepetroof ",
      title: "Pawsitively Yours: Where Every Paw Matters!",
      description: "",
      imageUrl: bg1,
      link: "/about",
    },
    {
      category: "#Onepetroof",
      title: "Whiskers and Wagging Tails: Bringing Joy to Every Home",
      description: " ",
      imageUrl: bg2,
      link: "/about",
    },
    {
      category: "#Onepetroof",
      title:
        "Hopeful Tails Society: Bringing Hope to Pets in Need.",
      description: "",
      imageUrl: bg3,
      link: "/about",
    },
    {
      category: "#Onepetroof",
      title: "Pet Guardians Guild: Protecting and Caring for Every Precious Soul.",
      description: "",
      imageUrl: bg4,
      link: "/about",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 6000);

    // Clear previous interval when the component is unmounted or the effect is re-run
    return () => clearInterval(intervalId);
  }, [currentSlideIndex]);

  const setActiveSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  const updatePagination = (index) => {
    const paginationBlocks = document.querySelectorAll(
      ".slide-pagination-block"
    );
    paginationBlocks.forEach((block, i) => {
      block.classList.toggle("active-slide-pagination-block", i === index);
    });
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
    updatePagination(index);
  };

  const goToPrevSlide = () => {
    const newIndex =
      (currentSlideIndex - 1 + slidesData.length) % slidesData.length;
    goToSlide(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentSlideIndex + 1) % slidesData.length;
    goToSlide(newIndex);
  };

  return (
    <div className="hero-banner">
      <section className="hero-banner-slider-section">
        <div id="heroBannerSliderID" className="hero-banner-slider">
          <div className="hero-banner-slides-wrapper">
            {slidesData.map((slide, index) => (
              <div
                key={index}
                className={`hero-banner-slide ${
                  index === currentSlideIndex ? "active-slide" : ""
                }`}
                data-slide-index={index}
                style={{ backgroundImage: `url(${slide.imageUrl})` }}
              >
                <div className="hero-banner-asset brand-02-bckg">
                  <div
                    key={index}
                    className={`hero-banner-slide ${
                      index === currentSlideIndex ? "active-slide" : ""
                    }`}
                    data-slide-index={index}
                    style={{
                      backgroundImage: `url("${slide.imageUrl}")`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="row-fluid page-center page-pad">
                      <div className="span12">
                        <div className="hero-slider-content">
                          <h5 className="brand-03 hero-slider-category">
                            {slide.category}
                          </h5>
                          <div className="row-fluid">
                            <div className="span7 hero-slider-title">
                              <h1 className="mm big-h1 brand-03">
                                {slide.title}
                              </h1>
                            </div>
                          </div>
                          <div className="row-fluid">
                            <div className="span5 body-text brand-03 hero-slider-desc">
                              {slide.description}
                            </div>
                          </div>

                          <button className="">
                            <a
                              class="group relative bg-white border-none mx-2 inline-block overflow-hidden border px-8 py-3 focus:outline-none focus:ring"
                              href="/download"
                            >
                              <span class="absolute inset-x-0 top-0 h-[2px] bg-black transition-all duration-500 group-hover:h-full group-active:bg-white"></span>

                              <span class="relative text-sm font-medium text-black transition-colors group-hover:text-white">
                                Download
                              </span>
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Your pagination components go here
          <ul className="slider-pagination-section">
            <li className="xs-slide-pagination xs-slide-pagination-left brand-03 small-text">
              <span className="xs-pagination-number">{currentSlideIndex + 1}</span>
              <span>/</span>
              <span>{slidesData.length}</span>
            </li>
            {slidesData.map((slide, index) => (
              <li
                key={index}
                data-pagination-index={index}
                className={`slide-pagination-block ${index === currentSlideIndex ? 'active-slide-pagination-block' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <div className="slide-pagination-number">{index + 1}</div>
                <div className="slide-pagination-text">{slide.category}</div>
              </li>
            ))}
            <li className="xs-slide-pagination xs-slide-pagination-right brand-03">
              <div className="small-print-text xs-next-slide" id="nextSlideControl">
                next
              </div>
              <div className="small-text xs-pagination-text">{slidesData[currentSlideIndex + 1]?.category}</div>
            </li>
          </ul> */}
        </div>
      </section>
    </div>
  );
};

export default Herosection;
