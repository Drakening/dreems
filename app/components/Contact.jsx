import Link from 'next/link';
import ScrollAnimation from './UI/ScrollAnimation';

const Contact = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
      </ScrollAnimation>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl text-gray-600 mb-10">
            {"Got an idea for the perfect custom t-shirt? Reach out to us and let's bring your vision to life with a design that's uniquely yours!"}
          </p>
          
          <Link 
            href="mailto:dreamstudio@gmail.com"
            className="inline-block"
          >
            <button className="bg-[#009ddc] text-white text-lg font-nunito py-3 px-8 rounded-md hover:bg-[#007bb3] transition-colors duration-300 ease-in-out">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;

