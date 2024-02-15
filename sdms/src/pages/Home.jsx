import React from 'react';
import { Link } from 'react-router-dom';
import EventList from '../components/EventList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div>
    <section className="bg-black text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
          <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">SDMS</h1>
          <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Sports: The Endless Infinity</h2>
          <p className="text-sm md:text-base text-gray-50 mb-4">Create and Explore your favorite tournaments. register now to showcase talent to the World</p>
          <Link to="#" className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
            Explore Now
          </Link>
        </div>
        <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
          <div className="h-48 flex content-center items-center">
            <div>
              <img width="300" height="400" className="inline-block mt-24 hidden xl:block" src="/images/pexels-photo1.png" alt="Image 1" />
            </div>
            <div>
              <img width="300" height="400" className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="/images/pexels-photo2.png" alt="Image 2" />
            </div>
            <div>
              <img width="300" height="400" className="inline-block mt-24 hidden lg:block" src="/images/pexels-photo3.png" alt="Image 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="p-4 md:p-12 bg-black text-white py-20 flex items-center justify-center">
    <div className="flex flex-wrap mx-auto md:flex-nowrap">
  
      <a href="#" className="w-full md:w-80 m-1">
        <div className="relative flex flex-col items-start transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
          <img className="w-full rounded-t-xl lg:h-48 md:h-36 object-cover object-center" src="/images/scoreboard.jpg" alt="blog" />
          <div className="px-6 py-8">
            <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
              <span className="">Live scores</span>
            </h4>
            <p className="mt-4 text-base font-normal text-gray-500 leading-relaxed">Follow live scores of the team you are following up on as results are updated by the organiser of the event real time. Never miss a moment of an exciting tournament.</p>
          </div>
        </div>
      </a>
  
      <a href="#" className="w-full md:w-80 m-1">
        <div className="relative flex flex-col items-start transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
          <img className="w-full rounded-t-xl lg:h-48 md:h-36 object-cover object-center" src="/images/Tournament Brackets.jpg" alt="blog" />
          <div className="px-6 py-8">
            <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
              <span className="">Play unlimited number of draws</span>
            </h4>
            <p className="mt-4 text-base font-normal text-gray-500 leading-relaxed">You can have unlimited number of teams in a tournament, either Odd or Even, and the elimination method will lead the tournament to the final of the tournament. </p>
          </div>
        </div>
      </a>
  
      <a href="#" className="w-full md:w-80 m-1">
        <div className="relative flex flex-col items-start transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
          <img className="w-full rounded-t-xl lg:h-48 md:h-36 object-cover object-center" src="/images/pngwing.com.png" alt="blog" />
          <div className="px-6 py-8">
            <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
              <span className="">Play any Sport</span>
            </h4>
            <p className="mt-4 text-base font-normal text-gray-500 leading-relaxed"> we support registration of any competetive sport that involves two players or teams playing against each other. The system will automatically create the draws for the sport </p>
          </div>
        </div>
      </a>
  
    </div>
  </section>
  <section className="p-4 md:p-12 bg-gray-800 text-white">
  <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
    {/* About Us */}
    <div className="flex flex-col lg:flex-row justify-between gap-8">
      <div className="w-full lg:w-5/12 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4">About Us</h1>
        <p className="font-normal text-base leading-6">
        Our journey with the Tournament Bracket application began as a collective passion for simplifying and enhancing the tournament management experience. Inspired by the thrill of competitions and the desire to create a seamless platform for organizers and participants, we embarked on this project to bring innovation to the world of sports and gaming events. We invite you to explore our creation and experience the result of our hard work and dedication. Your feedback is valuable as we continue to evolve and improve our application.


        </p>
        <br>
        </br>
        <h2 className="text-3xl lg:text-4xl font-bold leading-9 pb-4">Our Project Repository</h2>
        <div className="flex mt-2">
                <a href="https://github.com/RichardMiruka/SDMS-Frontend" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
        </div>
      </div>
      <div className="w-full lg:w-8/12">
        <img className="w-full h-full rounded-md" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A group of People" />
      </div>
    </div>

    {/* Our Story */}
    <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
      <div className="w-full lg:w-5/12 flex flex-col justify-center">
      </div>
      <div className="w-full lg:w-8/12 lg:pt-8">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
          {/* Team Member 1 */}
          <div className="p-4 pb-6 flex justify-center flex-col items-center">
            <p className="font-medium text-xl leading-5 mt-4">samwel</p>
            <div className="flex mt-2">
                <a href="https://www.linkedin.com/in/samwel-aboki/" target="_blank" rel="noopener noreferrer" className="mr-2">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/abokiey" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </div>
          </div>

          {/* Team Member 2 */}
          <div className="p-4 pb-6 flex justify-center flex-col items-center">
            <p className="font-medium text-xl leading-5 mt-4">Alphonce</p>
            <div className="flex mt-2">
                <a href="https://www.linkedin.com/in/Alphonce/" target="_blank" rel="noopener noreferrer" className="mr-2">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/Mcrymbo" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </div>
          </div>

          {/* Team Member 3 */}
          <div className="p-4 pb-6 flex justify-center flex-col items-center">
<p className="font-medium text-xl leading-5 mt-4">Richard</p>
<div className="flex mt-2">
                <a href="https://www.linkedin.com/in/richard-miruka-05083b147/" target="_blank" rel="noopener noreferrer" className="mr-2">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/RichardMiruka" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
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

export default Home;