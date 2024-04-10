import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactDetails() {
  return (
    <section className="text-gray-600 flex items-center justify-center body-font md:px-20 px-5 lg:px-40 border-b border-gray-200">
      <div className="container px-5 pt-24">
        <div className="flex flex-col  w-full lg:w-2/3">
          <div className="flex">
            <h2 className="text-lg text-[#4e286e] tracking-widest font-medium title-font mb-1">
              Contact to connect
            </h2>{' '}
            <div className="lg:ml-3 invisible lg:visible bg-[#4e286e] mt-3 h-[2px] lg:w-[200px]"></div>
          </div>
          <h1 className="sm:text-5xl mt-2 text-2xl leading-9  title-font text-gray-900">
            Don't hesitate to inquire about a solution.
          </h1>
        </div>
        <div className="text-gray-600 body-font">
          <div className="container flex flex-wrap py-20 mx-auto items-center">
            <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
              <p className="leading-relaxed text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sit consequuntur, neque beatae fugit consequatur, aliquid quae ea ad ullam velit incidunt rem eligendi nobis explicabo sint quibusdam maxime numquam?
              </p>
              <p className="leading-relaxed text-base mt-8">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus consectetur adipisci placeat commodi eum nostrum ut earum accusantium excepturi ipsum? Quia praesentium nemo eius, enim ullam explicabo atque laudantium ipsum.
              </p>
            </div>
            <div className="flex flex-wrap flex-row md:w-1/2 md:pl-12 text-center">
              <div className="w-full md:w-1/3 px-3 flex flex-col my-3 ">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-4xl   mb-2" />
                <h4 className="sm:text-center text-md text-black font-medium">Address:</h4>
                <p className="text-sm">
                  i'm Groot 
                </p>
              </div>
              <div className="w-full md:w-1/3 px-3 flex flex-col my-3 ">
                <FontAwesomeIcon icon={faPhone} className="text-4xl mb-2" />
                <h4 className="sm:text-center text-md text-black font-medium">Contact:</h4>
                <p className="text-sm">
                  +91 77778-77668 |
                  <br />
                  +91 95222-01390
                </p>
              </div>
              <div className="w-full md:w-1/3 px-3 flex flex-col my-3 ">
                <FontAwesomeIcon icon={faEnvelope} className="text-4xl mb-2  " />
                <h4 className="sm:text-center text-md text-black font-medium">E-mail:</h4>
                <p className="text-sm">chauhangirl2222@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default ContactDetails;
