import React from 'react'
import ak from '../src/image/ak.png'

const Contact = () => {
  return (
    
    <div
      name="cyber"
      id="cyber"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                CYBER SECURITY
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <form>
                <img
                  src={ak}
                  alt="my profile"
                  className="rounded-2xl mx-auto w-2/3 md:w-full"
                />
              </form>
            </div>
            <div>
              <ul>
              <li className="text-4xl  font-bold text-white">Pre-requisites</li>
Basic knowledge in Programming
<li className="text-4xl  font-bold text-white">Description</li>
Cybersecurity, also known as information technology security, protects computer systems and networks from malicious attacks.It is practiced by individuals and enterprises to safeguard their computerized systems against unauthorized access. In this course, You'll learn how to monitor systems and alleviate threats when they happen.This course will help you implement technical strategies, tools, and techniques to secure data and information. Get expertise in Offensive Security, Cloud Security Architecture, Security Systems Architecture, Security Teams Management, etc. Get on - hands tutorial with exclusive case studies, and exciting quizzes.
<h2>Job opportunities</h2>
Chief Information security officer
Security engineer / architect / analyst
Cryptographer / Cryptanalyst
Security Consultant
Ethical Hacker


              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Contact