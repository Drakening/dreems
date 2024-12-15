import Image from 'next/image';


const Services = () => {
  return (
    <section className="px-4 py-8">
      <div className="text-center mb-8">
          <h2 className="uppercase text-[#1f2e3b] text-xl sm:text-2xl lg:text-3xl tracking-normal font-medium text-center pb-2 mb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#1f2e3b]">What we do</h2>
          <p className="text-xl text-gray-600">Crafting Dreams into Reality: Our Approach.</p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        <div className="max-w-[1080px] w-full mb-4 md:mr-8">
          <video 
            src="/videos/video.mp4" 
            preload="auto" 
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="w-full md:w-auto text-center md:text-left">
          <div className="space-y-6">
            {[
              {
                title: "1. Conceptualization:",
                description: "We begin by discussing your vision for the custom design. we work with you to understand your inspiration."
              },
              {
                title: "2. Sketching and Drafting",
                description: "Next, our skilled artists translate your ideas into preliminary sketches. This stage allows you to visualize the design and make any changes."
              },
              {
                title: "3. Hand-Painting with Fabric Paint",
                description: "Once the design is finalized, our artists hand-paint each detail onto high-quality fabric."
              },
              {
                title: "4. Quality Assurance and Finishing",
                description: "we conduct quality checks to ensure the artwork meets our standards. The final product is then carefully packaged for delivery to you."
              }
            ].map((feature, index) => (
              <div key={index} className="mb-4">
                
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
