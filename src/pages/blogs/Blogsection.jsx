import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Blogsection = () => {
  const blogData = [
    {
      title: "The Future of AI in Software Development",
      description:
        "Explore the impact and potential of Artificial Intelligence in shaping the future of software development.",
      imageUrl:
        "https://www.nagarro.com/hubfs/Predictive-Product-Management-AI-M.webp",
      content: `
                <p>Artificial Intelligence (AI) is rapidly transforming the landscape of software development. As businesses seek more efficient and intelligent solutions, AI is becoming a cornerstone in driving innovation.</p>
                
                <p>From automating mundane tasks to enhancing complex decision-making processes, AI is playing a pivotal role. In this blog, we delve into the future of AI in software development and how it is poised to revolutionize the industry.</p>
    
                <h2>The Rise of Machine Learning</h2>
                <p>Machine Learning, a subset of AI, is at the forefront of this revolution. It enables systems to learn from data and improve their performance over time. Developers are leveraging machine learning algorithms to create smart applications that can adapt and evolve.</p>
    
                <!-- More content goes here -->
            `,
    },
    {
      title: "Embracing DevOps for Efficient Software Delivery",
      description:
        "Discover the benefits of adopting DevOps practices to streamline software development and enhance collaboration.",
      imageUrl:
        "https://www.nagarro.com/hubfs/Predictive-Product-Management-AI-M.webp",
      content: `
                <p>DevOps, a combination of development and operations, has become a game-changer in the software development lifecycle. It emphasizes collaboration, automation, and efficiency throughout the development process.</p>
                
                <p>In this blog, we explore the key benefits of embracing DevOps practices. From faster release cycles to improved collaboration between development and operations teams, DevOps is reshaping how software is built and delivered.</p>
    
                <h2>Continuous Integration and Continuous Deployment (CI/CD)</h2>
                <p>CI/CD pipelines automate the building, testing, and deployment of software, ensuring a seamless and reliable process. DevOps teams are adopting CI/CD practices to achieve faster time-to-market and higher code quality.</p>
    
                <!-- More content goes here -->
            `,
    },
    {
      title: "The Evolution of Web Development Frameworks",
      description:
        "Explore the journey of web development frameworks and how they have evolved over the years, shaping the way we build modern web applications.",
      imageUrl:
        "https://www.nagarro.com/hubfs/Predictive-Product-Management-AI-M.webp",
      content: `
                <p>Web development frameworks have come a long way, adapting to the changing needs of developers and the demands of the digital era. This blog takes you on a journey through the evolution of web development frameworks and their impact on the development community.</p>
                
                <h2>From jQuery to React and Angular</h2>
                <p>Starting with the days of jQuery for simplifying JavaScript, to the rise of component-based libraries like React and Angular, we explore how these frameworks have revolutionized the way we create interactive and dynamic web applications.</p>
    
                <!-- More content goes here -->
            `,
    },
    {
      title: "Cybersecurity Best Practices for Software Developers",
      description:
        "Learn essential cybersecurity best practices for software developers to ensure the protection of sensitive data and maintain the integrity of applications.",
      imageUrl:
        "https://www.nagarro.com/hubfs/Predictive-Product-Management-AI-M.webp",
      content: `
                <p>Cybersecurity is a critical aspect of software development, and developers play a crucial role in building secure applications. This blog outlines key cybersecurity best practices that every software developer should be aware of to protect against potential threats and vulnerabilities.</p>
                
                <h2>Secure Coding and Code Reviews</h2>
                <p>Implementing secure coding practices and conducting regular code reviews are essential steps in fortifying your software against cyber threats. We explore how developers can proactively address security concerns in the codebase.</p>
    
                <!-- More content goes here -->
            `,
    },
    {
      title: "The Impact of Microservices Architecture on Scalability",
      description:
        "Examine the benefits and challenges of adopting a microservices architecture and understand how it contributes to the scalability of modern software systems.",
      imageUrl:
        "https://www.nagarro.com/hubfs/Predictive-Product-Management-AI-M.webp",
      content: `
                <p>Microservices architecture has become a popular choice for building scalable and resilient software systems. In this blog, we delve into the impact of microservices on scalability, exploring the advantages it brings to modern applications.</p>
                
                <h2>Decomposition of Monolithic Applications</h2>
                <p>We discuss the decomposition of monolithic applications into smaller, independent services and how this architectural shift enables organizations to scale specific components of their applications independently, enhancing overall system scalability.</p>
    
                <!-- More content goes here -->
            `,
    },
    {
      title: "The Role of DevSecOps in Modern Software Development",
      description:
        "Explore how integrating security practices into the DevOps process enhances software development, fostering a culture of security from the outset.",
      imageUrl:
        "https://www.nagarro.com/hubfs/Predictive-Product-Management-AI-M.webp",
      content: `
                <p>DevSecOps, the integration of security into the DevOps workflow, is a critical approach to building secure and resilient software. In this blog, we examine the role of DevSecOps in modern software development, emphasizing the importance of addressing security concerns throughout the entire development lifecycle.</p>
                
                <h2>Automated Security Testing and Continuous Monitoring</h2>
                <p>We delve into the significance of automated security testing and continuous monitoring to identify and mitigate security vulnerabilities early in the development process. Adopting a DevSecOps mindset ensures that security is not an afterthought but an integral part of the development pipeline.</p>
    
                <!-- More content goes here -->
            `,
    },
    {
      title: "The Era of Cloud-Native Applications",
      description:
        "Discover the principles and advantages of cloud-native application development, and how it empowers organizations to build scalable, resilient, and efficient software solutions.",
      imageUrl:
        "https://www.nagarro.com/hubfs/Predictive-Product-Management-AI-M.webp",
      content: `
                <p>Cloud-native application development is reshaping the way software is designed, built, and deployed. This blog explores the fundamental principles of cloud-native development and its impact on enhancing scalability, reliability, and efficiency in modern applications.</p>
                
                <h2>Containers, Microservices, and Serverless Architectures</h2>
                <p>We discuss the use of containers, microservices, and serverless architectures as key components of cloud-native applications. Embracing these technologies enables organizations to achieve greater flexibility, faster deployments, and improved resource utilization.</p>
    
                <!-- More content goes here -->
            `,
    },
    {
      title: "Harnessing the Power of Artificial Intelligence in Testing",
      description:
        "Learn how integrating Artificial Intelligence and Machine Learning into software testing processes can improve efficiency, accuracy, and overall test coverage.",
      imageUrl:
        "https://www.nagarro.com/hubfs/Predictive-Product-Management-AI-M.webp",
      content: `
                <p>Artificial Intelligence (AI) is not only transforming software development but also revolutionizing software testing. In this blog, we explore how harnessing the power of AI in testing processes can lead to more efficient, accurate, and comprehensive test coverage.</p>
                
                <h2>AI-Powered Test Automation and Intelligent Test Case Generation</h2>
                <p>We discuss the implementation of AI-powered test automation tools and the use of machine learning algorithms for intelligent test case generation. These advancements contribute to faster testing cycles and improved detection of complex software defects.</p>
    
                <!-- More content goes here -->
            `,
    },
    // Add more blogs as needed
  ];

  return (
    <div className="py-20 h-auto flex flex-col justify-center">
      <div className="w:full lg:w-4/5 mx-auto">
        <p className="section-title text-4xl">Unveiling the Tech Odyssey</p>

        <div className="flex flex-wrap mt-8">
          {blogData.map((blog, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div
                className="bg-cover bg-center h-64"
                style={{ backgroundImage: `url(${blog.imageUrl})` }}
              ></div>
              <div
                className="bg-white p-4 mt-4"
                style={{ borderLeft: "1px solid #00112d50" }}
              >
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-sm line-clamp-2">{blog.description}</p>
                <div className="mt-4">
                  <Link
                    class="group relative shadow bg-white border-none mx-2 inline-block overflow-hidden border px-8 py-3 focus:outline-none focus:ring"
                    to={`/blogs/${encodeURIComponent(blog.title)}`}
                  >
                    <span class="absolute inset-y-0 left-0 w-[2px] bg-black duration-500 transition-all group-hover:w-full group-active:bg-black"></span>

                    <span class="relative text-sm font-medium text-black transition-colors group-hover:text-white">
                      Read More <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogsection;
