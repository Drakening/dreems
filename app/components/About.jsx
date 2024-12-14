'use client'
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';
import aboutImg from '../../public/images/about.webp';

const About = () => {
  const openSocialMedia = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">About Us</h2>
        <p className="text-xl text-gray-600">Sharing Our Journey, Values, and Passion.</p>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <Image 
            src={aboutImg} 
            alt="About Us" 
            className="w-full rounded-lg shadow-lg object-cover"
            layout="responsive"
            priority
          />
        </div>
        
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-2xl font-bold text-gray-700 mb-4">
            At Dreem, we are all about helping you express yourself!
          </p>
          
          <p className="text-xl text-gray-600 mb-8">
            Our journey began with a love for art and a knack for turning blank 
            canvases (or in this case, blank tees!) into your favorite 
            anime character, or a portrait of your beloved pet.
          </p>
          
          <div className="flex justify-center lg:justify-start space-x-6 mt-6">
            <SocialIcon Icon={Facebook} color="blue" url="https://facebook.com" />
            <SocialIcon Icon={Instagram} color="pink" url="https://instagram.com" />
            <SocialIcon Icon={TikTokIcon} color="black" url="https://tiktok.com" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ Icon, color, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      text-gray-400 hover:text-${color}-500
      transform transition-all duration-300 ease-in-out
      hover:scale-110 hover:-translate-y-1
    `}
  >
    <Icon className="w-8 h-8" />
  </a>
);

// Custom TikTok icon as it's not available in Lucide React
const TikTokIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default About;

