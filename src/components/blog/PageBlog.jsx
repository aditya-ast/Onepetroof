import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import bg1 from "../../assets/hero/bg1.gif";
import bg2 from "../../assets/hero/bg2.gif";
import bg3 from "../../assets/hero/bg3.gif";
const PageBlog = () => {
  // Sample data for three blog cards
  const blogData = [
    {
      title: "The Future of AI in Software Development",
      description:
        "Explore the impact and potential of Artificial Intelligence in shaping the future of software development.",
      imageUrl: bg1,
      content: `
                <p>Artificial Intelligence (AI) is rapidly transforming the landscape of software development. As businesses seek more efficient and intelligent solutions, AI is becoming a cornerstone in driving innovation.</p>
                
                <p>From automating mundane tasks to enhancing complex decision-making processes, AI is playing a pivotal role. In this blog, we delve into the future of AI in software development and how it is poised to revolutionize the industry.</p>
    
                <h2>The Rise of Machine Learning</h2>
                <p>Machine Learning, a subset of AI, is at the forefront of this revolution. It enables systems to learn from data and improve their performance over time. Developers are leveraging machine learning algorithms to create smart applications that can adapt and evolve.</p>
    
                <!-- More content goes here -->
            `,
      author: "Anshul Chauhan",
      linkedIn: "https://www.linkedin.com/in/anshul-chauhan-996591178/",
    },
    {
      title: "Embracing DevOps for Efficient Software",
      description:
        "Discover the benefits of adopting DevOps practices to streamline software development and enhance collaboration.",
      imageUrl: bg2,
      content: `
                <p>DevOps, a combination of development and operations, has become a game-changer in the software development lifecycle. It emphasizes collaboration, automation, and efficiency throughout the development process.</p>
                
                <p>In this blog, we explore the key benefits of embracing DevOps practices. From faster release cycles to improved collaboration between development and operations teams, DevOps is reshaping how software is built and delivered.</p>
    
                <h2>Continuous Integration and Continuous Deployment (CI/CD)</h2>
                <p>CI/CD pipelines automate the building, testing, and deployment of software, ensuring a seamless and reliable process. DevOps teams are adopting CI/CD practices to achieve faster time-to-market and higher code quality.</p>
    
                <!-- More content goes here -->
            `,
      author: "Anshul Chauhan",
      linkedIn: "https://www.linkedin.com/in/anshul-chauhan-996591178/",
    },
    {
      title: "The Evolution of Web Development Frameworks",
      description:
        "Explore the journey of web development frameworks and how they have evolved over the years, shaping the way we build modern web applications.",
      imageUrl: bg3,
      content: `
                <p>Web development frameworks have come a long way, adapting to the changing needs of developers and the demands of the digital era. This blog takes you on a journey through the evolution of web development frameworks and their impact on the development community.</p>
                
                <h2>From jQuery to React and Angular</h2>
                <p>Starting with the days of jQuery for simplifying JavaScript, to the rise of component-based libraries like React and Angular, we explore how these frameworks have revolutionized the way we create interactive and dynamic web applications.</p>
    
                <!-- More content goes here -->
            `,
      author: "Anshul Chauhan",
      linkedIn: "https://www.linkedin.com/in/anshul-chauhan-996591178/",
    },
  ];

  return (
    <div className="py-10 h-auto lg:h-[100vh] flex flex-col justify-center">
      <div className="w:full lg:w-4/5 mx-auto">
        <p className="section-title text-4xl">Unveiling the Tech Odyssey</p>

        <div className="flex flex-wrap mt-8">
          {blogData.map((blog, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 h-[100%] p-4">
              <div
                className="bg-cover bg-center h-64"
                style={{ backgroundImage: `url(${blog.imageUrl})` }}
              ></div>
              <div
                className="bg-white p-4 mt-4"
                style={{ borderLeft: "1px solid #00112d50" }}
              >
                <h2 className="text-l font-semibold">{blog.title}</h2>
                <p className="text-sm line-clamp-2">{blog.description}</p>
                <div className="mt-4">
                  <Link
                    class="group relative shadow bg-white border-none mx-2 inline-block overflow-hidden border px-8 py-3 focus:outline-none focus:ring"
                    to={`/blogs`}
                  >
                    <span class="absolute inset-y-0 left-0 w-[2px] bg-black duration-500 transition-all group-hover:w-full group-active:bg-black"></span>

                    <span class="relative text-sm font-medium text-black transition-colors group-hover:text-white">
                      Read More <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Link>
                </div>
                <div className="flex justify-between mt-5">
                  <p className="text-md font-medium">{blog.author}</p>
                  <p className="text-[#00112d]">
                    <a href={blog.linkedIn} target="_blank">
                      {" "}
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Link to="/blogs" style={{ textDecoration: "none" }}>
            Read More <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageBlog;
