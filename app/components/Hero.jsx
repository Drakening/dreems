'use client'
import Image from 'next/image';
import HeroPic from '../../public/images/custom-t.webp';

const Hero = () => {
  const scrollToContact = () => {
    const Section = document.getElementById('pricing');
    if (Section) {
      Section.scrollIntoView({ behavior: 'smooth', block: 'start', duration: 500 });
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-8">
        <div className="w-full lg:w-1/2">
          <Image 
            src={HeroPic} 
            alt="Custom T-Shirt" 
            layout="responsive"
            className="object-contain"
            priority
          />
        </div>

        <div className="w-full lg:w-1/2 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-antonio mb-4">
            Custom <span className="block text-3xl sm:text-4xl lg:text-5xl relative">
              T-Shirts
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="#1f2e3b" 
                viewBox="0 0 145 8" 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[175px] h-2"
              >
                <path d="M141 8H4C1.8 8 0 6.2 0 4s1.8-4 4-4h137c2.2 0 4 1.8 4 4s-1.8 4-4 4z"/>
              </svg>
            </span>
          </h1>

          <p className="text-base sm:text-lg mb-8">
            Unleash your individuality with our unique, tailored t-shirt designs.
          </p>

          <button 
            onClick={scrollToContact} 
            className="w-full max-w-xs mx-auto block bg-[#009ddc] text-white text-lg font-medium py-4 px-8 rounded-lg border-3 border-white hover:bg-[#007bb3] transition-colors duration-300"
          >
            Get started now
          </button>

          <div className="mt-8">
            <ul className="space-y-2 inline-block text-left">
              <li className="flex items-center pl-7 relative">
                <span className="absolute left-0 top-1 w-5 h-5 bg-[url('../public/images/check-blue.svg')] bg-no-repeat bg-contain"></span>
                Free Shipping <span className="text-sm font-light ml-2">(orders over R999)</span>
              </li>
              <li className="flex items-center pl-7 relative">
                <span className="absolute left-0 top-1 w-5 h-5 bg-[url('../public/images/check-blue.svg')] bg-no-repeat bg-contain"></span>
                No Minimums
              </li>
              <li className="flex items-center pl-7 relative">
                <span className="absolute left-0 top-1 w-5 h-5 bg-[url('../public/images/check-blue.svg')] bg-no-repeat bg-contains"></span>
                Quality Guaranteed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
