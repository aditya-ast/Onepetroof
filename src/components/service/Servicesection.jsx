import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const projects = [
    
    {
        title: "Algochurn",
        description:
          "A web app that allows users to practice for front-end and UI interviews.",
        link: "https://algochurn.com",
      },
      {
        title: "Algochurn",
        description:
          "A web app that allows users to practice for front-end and UI interviews.",
        link: "https://algochurn.com",
      },
      {
        title: "Algochurn",
        description:
          "A web app that allows users to practice for front-end and UI interviews.",
        link: "https://algochurn.com",
      },
      {
        title: "Algochurn",
        description:
          "A web app that allows users to practice for front-end and UI interviews.",
        link: "https://algochurn.com",
      },
      {
        title: "Algochurn",
        description:
          "A web app that allows users to practice for front-end and UI interviews.",
        link: "https://algochurn.com",
      },
      {
        title: "Algochurn",
        description:
          "A web app that allows users to practice for front-end and UI interviews.",
        link: "https://algochurn.com",
      },
    // ...rest of the projects
  ];

const Servicesection = () => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-5xl mx-auto px-8">
        <span className="relative flex justify-center my-10">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

            <span className="relative z-10 text-3xl font-bold bg-white px-6">
              Services
            </span>
          </span>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
        {projects.map((project, idx) => (
          <div
            key={project?.link}
            className="relative group  block p-2 h-full w-full "
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-black block  rounded-3xl"
                  layoutId="hoverBackground" // required for the background to follow
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-white hover:bg-black shadow-md cursor-pointer group-hover:border-slate-700 relative z-40">
              <div className="relative z-40">
                <div className="p-4 text-black hover:text-white" >
                  <h4 className=" font-bold tracking-wide mt-4">
                    {project.title}
                  </h4>
                  <p className="mt-8 tracking-wide leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Servicesection