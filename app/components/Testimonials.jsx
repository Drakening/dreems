import Image from 'next/image';
import Client1 from '../../public/images/jeffery-erhunse-vp9mRauo68c-unsplash.jpg';
import Client2 from '../../public/images/prince-akachi-LWkFHEGpleE-unsplash.jpg';
import Client3 from '../../public/images/luis-villasmil-hh3ViD0r0Rc-unsplash.jpg';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Emily Johnny',
      image: Client1,
      text:
        "I ordered a custom hoodie with my favorite quote, and I couldn't be happier! The design was exactly what I wanted, and the fabric is so comfy. I've gotten so many compliments, and it's become my favorite piece in my wardrobe. The whole process was smooth, from design to delivery. Can't wait to order more for my friends!",
    },
    {
      name: 'Sarah Lucason',
      image: Client2,
      text:
        "My personalized t-shirt is an absolute gem! The design is stunning, with vibrant colors that pop. It's become my go-to shirt for casual outings, and I always get asked where I got it. Working with Dream was a breeze; they understood my vision perfectly and brought it to life. I'm beyond thrilled!",
    },
    {
      name: 'Michael Smith',
      image: Client3,
      text:
        "I surprised my girlfriend with a custom tee for her birthday, and she absolutely adored it! The print quality was top-notch, with vivid colors that looked amazing. It was the perfect personalized gift, and she wears it proudly. The team at Dream made the process seamless, and I couldn't be happier with the result!",
    },
  ];

  return (
    <section className="px-4 py-8">
      <div className="text-center mb-8">
          <h2 className="uppercase text-[#1f2e3b] text-xl sm:text-2xl lg:text-3xl tracking-normal font-medium text-center pb-2 mb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#1f2e3b]">Testimonials</h2>
          <p className="text-xl text-gray-600">Words from the Wise.</p>
    
      </div>
      <div className="flex flex-wrap justify-center">
        {testimonialsData.map((testimonial, index) => (
          <div 
            key={index} 
            className="relative w-[350px] bg-[#292828] text-white m-4 p-6 rounded-lg transition-all duration-300 ease-in-out"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-[10%] w-full block">
              <div 
                className="relative h-[100px] w-[100px] mx-auto border-8 border-white rounded-full overflow-hidden 
                           transition-all duration-300 ease-in-out hover:saturate-140 hover:scale-95"
              >
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  fill 
                  className="absolute top-0 left-0 rounded-full object-cover"
                />
              </div>
              <h2 className="text-center capitalize tracking-wider py-2">{testimonial.name}</h2>
            </div>
            <p className="mt-[50px] opacity-80 px-2 text-[15px]">
              <span className="text-[30px] block text-left text-[#3b7cf5]">&ldquo;</span>
              {testimonial.text}
              <span className="text-[30px] block text-right text-[#3b7cf5]">&rdquo;</span>
            </p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
