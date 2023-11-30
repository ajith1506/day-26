import React from 'react'
import th from '../src/image/th.png'

export const DataScience = () => {
  return (
    <div
      name="datascience"
      id="datascience"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                DATA SCIENCE
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <form>
                <img
                  src={th}
                  alt="my profile"
                  className="rounded-2xl mx-auto w-2/3 md:w-full"
                />
              </form>
            </div>
            <div>
              <ul>

                <li> A program designed by IIT Experts & Approved by NASSCOM</li>


                <li>Live Online Classes + Lifetime recorded videos</li>

                <br />
                <li>Unlimited access to practice on CodeKata, Webkata and IDE</li>

                <br />
                <li>One-on-One with Mentors</li>

                <br />
                <li>Ask-me-Anything sessions with Industry Experts</li>

                <br />
                <li>IIT-M CCE Certification for Advanced Programming Professional</li>
                <br />

                <li>100% Job Placement Support & 50+ Interviews Guaranteed</li>
                <br />

                <li>A digital portfolio through "Github"</li>

                <br />
                <li>EMI options available(Upto 12 months) with 7-day Refund Policy</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DataScience;
