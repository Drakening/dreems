'use client'
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import ScrollAnimation from './UI/ScrollAnimation';

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="px-4 mb-0">
      <ScrollAnimation>
        <h2 className="uppercase text-[#1f2e3b] text-xl sm:text-2xl lg:text-3xl tracking-normal font-medium text-center pb-2 mb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#1f2e3b]">
          Frequently asked questions
        </h2>
        <p className="text-center">Answers Await: Your FAQs Answered Here.</p>
        </ScrollAnimation>
      <div className="py-16 px-8 sm:px-2 sm:py-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {faqData.map((faq, index) => (
            <div key={index} className="w-full">
              <button
                className={`
                  w-full py-6 text-2xl cursor-pointer bg-transparent border-none outline-none text-left 
                  transition-all duration-500 ease-linear flex items-center justify-between 
                  sm:text-xl sm:py-4
                `}
                onClick={() => accordion(index)}
              >
                <span>{faq.question}</span>
                <ChevronRight 
                  className={`
                    text-[#009ddc] transition-transform duration-300 
                    ${openIndex === index ? 'rotate-90' : ''}
                  `} 
                  size={24} 
                />
              </button>
              <div
                className={`
                  w-[80%] mx-auto overflow-hidden transition-all duration-300 ease-in-out 
                  border-b border-gray-300 
                  sm:w-[90%]
                  ${openIndex === index ? 'max-h-[1000px] py-4' : 'max-h-0 py-0'}
                `}
              >
                <p className="text-2xl text-black/75 text-left w-full sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: 'How long does it take to receive my custom t-shirt?',
    answer:
      'Our typical turnaround time for custom orders is 7-10 business days. This includes the design process, printing, and shipping. However, complex designs or bulk orders may take a bit longer. Rest assured, we strive to get your unique piece to you as quickly as possible!',
  },
  {
    question: 'Can I wash my custom apparel like regular clothing?',
    answer:
      'Absolutely! We use high-quality fabric paints that are durable and washable. To ensure the longevity of your design, we recommend washing your custom t-shirt inside out in cold water and air drying or using low heat in the dryer.',
  },
  {
    question: 'Do you offer size options for our custom t-shirts?',
    answer:
      "Yes, we offer a range of sizes to accommodate all body types. If you're unsure, feel free to reach out to us, and we'll be happy to assist you in selecting the right size for your custom apparel.",
  },
  {
    question: "Can I see a proof of my design before it's printed?",
    answer:
      "Absolutely! Once you've placed your order and submitted your design, our team will create a digital proof for your approval. We want to ensure that you're completely satisfied with the design before we proceed with printing. You'll have the opportunity to review the proof and request any adjustments if needed.",
  },
];

export default Questions;
