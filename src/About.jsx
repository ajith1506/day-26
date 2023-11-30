import React from "react";
import hr from '../src/image/hr.png'

const About = () => {
  return (
    <div
      name="fb"
      id="fb"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                FULL STACK DEVELOPMENT
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <form>
              <img
            src={hr}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
              </form>
            </div>
            <div>
              <ul>
                
                <li className="text-4xl  font-bold text-white">Front-End Development</li>
                Get a deeper understanding of Client Side Programming or in other words the front end development by developing highly responsive web pages across languages.

                <li className="text-4xl  font-bold text-white">Back-End Development</li>
                Learn the industry leading ways to design back end development with least response time, which in turn helps in the fast loading of web applications. You’ll learn to connect databases with servers.

                <li className="text-4xl  font-bold text-white">DataStructures And Scalability</li>
                Learn Data Structures & Algorithms to write an efficient, robust, & optimized code. Learn how to build robust & scalable web servers with a thorough understanding of AWS.

                <li className="text-4xl  font-bold text-white">Build your Portfolio</li>
                Build your Full stack developer Portfolio and demonstrate your knowledge by developing an end-to-end Full-stack Application.
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;