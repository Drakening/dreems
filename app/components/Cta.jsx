'use client'
import Image from 'next/image';
import bgImage from '../../public/images/bg_news_pc.jpg';
import MaskText from '../components/UI/MaskText';

const Cta = () => {
  const scrollToContact = () => {
    const Section = document.getElementById('pricing');
    if (Section) {
      Section.scrollIntoView({ behavior: 'smooth', block: 'start', duration: 500 });
    }
  };

  return (
    <div className="relative w-full h-[330px] md:h-[250px] sm:h-[220px] overflow-hidden mb-16 mt-16 md:mb-8 md:mt-8 sm:mb-8">
      <Image 
        src={bgImage} 
        alt="Background" 
        fill 
        className="absolute inset-0 object-cover z-0" 
        priority 
      />
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-8">
        <h3 className="text-black font-light text-[44px] md:text-[40px] sm:text-[32px] max-w-[380px] leading-[110%] mb-8 sm:mb-6">
          <MaskText>
          Ready to raise
          <br />
          your T-shirt game?
          </MaskText>
        </h3>
        
        <div className="flex justify-center">
          <button 
            onClick={scrollToContact} 
            className="bg-[#292828] text-white text-base sm:text-sm uppercase tracking-wider py-5 sm:py-4 px-8 sm:px-6 rounded-lg hover:bg-[#3a3a3a] transition-colors duration-300"
          >
            Begin your order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
