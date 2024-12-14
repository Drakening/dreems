'use client'
import Image from 'next/image';
import BackgroundImage from '../../public/images/bg_char_001_pc.png';

const Pricing = () => {
  const scrollToContact = () => {
    const Section = document.getElementById('contact');
    if (Section) {
      Section.scrollIntoView({ behavior: 'smooth', block: 'start', duration: 500 });
    }
  };

  const priceItems = [
    {
      title: 'Basic',
      price: 'Price: R300',
      description: 'one side of the apparel',
      features: [
        'Black and white colors',
        'Personalized design',
        'Standard-quality T-shirt',
        'Sizes options(S-L)',
      ],
      buttonStyle: 'bg-transparent border border-[#009ddc] text-[#009ddc]',
    },
    {
      title: 'Pro',
      price: 'Price: R500',
      description: 'both sides of the apparel',
      features: [
        'Full color spectrum',
        'Complex design creation',
        'High-quality T-shirt',
        'Sizes options(S-XXL)',
      ],
      buttonStyle: 'bg-[#009ddc] text-white',
    },
  ];

  return (
    <section 
      className="relative w-full h-full px-4 mb-16 bg-cover bg-no-repeat" 
      style={{backgroundImage: `url(${BackgroundImage.src})`}}
    >
      <div className="text-center mb-8">
       
          <h2 className="uppercase text-[#1f2e3b] tracking-normal font-medium text-center pb-2 mb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#1f2e3b]">
            Pricing
          </h2>
          <p>Unbeatable Deals: Explore Our Low Prices.</p>
        
      </div>
      
      <div className="bg-[#292828] text-[#cccccc] font-nunito w-[70%] md:w-[90%] sm:w-full rounded-lg p-[5%] mx-auto flex flex-row md:flex-col justify-around">
        {priceItems.map((item, index) => (
          <div 
            key={index} 
            className="px-[10%] py-[5%] flex-1 border-r border-white/10 text-left last:border-r-0 md:border-r-0"
          >
            <h2 className="font-semibold">{item.title}</h2>
            <h4 className="font-normal m-0">{item.price}</h4>
            <span className="font-light">{item.description}</span>
            
            <ul className="my-[20%] md:my-[5%] text-left">
              {item.features.map((feature, i) => (
                <li key={i} className="font-light mt-5">{feature}</li>
              ))}
            </ul>
            
            <button 
              onClick={scrollToContact} 
              className={`outline-none border-none w-full h-[50px] rounded-md font-nunito cursor-pointer text-base ${item.buttonStyle}`}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
