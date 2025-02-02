'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FaEye } from 'react-icons/fa';
import ScrollAnimation from './UI/ScrollAnimation';
import Design1 from '../../public/images/1.webp';
import Design2 from '../../public/images/2.webp';
import Design3 from '../../public/images/3.webp';
import Design4 from '../../public/images/4.webp';
import Design5 from '../../public/images/5.webp';
import Design6 from '../../public/images/6.webp';
import Design7 from '../../public/images/7.webp';
import Design8 from '../../public/images/8.webp';

const Designs = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  const designsData = [
    {
      id: 1,
      name: 'Basic T-shirts',
      info: 'Standard tees for any occasion',
      image: Design1,
    },
    {
      id: 2,
      name: 'Casual Hoodies',
      info: 'Stay cozy with our comfy hoodies',
      image: Design2,
    },
    {
      id: 3,
      name: 'Classic Denim',
      info: 'Timeless denim for everyday wear',
      image: Design3,
    },
    {
      id: 4,
      name: 'Sporty Jackets',
      info: 'Get active with our sporty jackets',
      image: Design4,
    },
    {
      id: 5,
      name: 'Sporty Jackets',
      info: 'Get active with our sporty jackets',
      image: Design5,
    },
    {
      id: 6,
      name: 'Sporty Jackets',
      info: 'Get active with our sporty jackets',
      image: Design6,
    },
    {
      id: 7,
      name: 'Sporty Jackets',
      info: 'Get active with our sporty jackets',
      image: Design7,
    },
    {
      id: 8,
      name: 'Sporty Jackets',
      info: 'Get active with our sporty jackets',
      image: Design8,
    },
  ];

  return (
    <section className="px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
      <ScrollAnimation>
        <h2 className="uppercase text-[#1f2e3b] text-xl sm:text-2xl lg:text-3xl tracking-normal font-medium text-center pb-2 mb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#1f2e3b]">
          Recent Designs
        </h2>
        <p>Discover our latest sold apparel.</p>
      </ScrollAnimation>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
        <ScrollAnimation>
        {designsData.map((design) => (
          <div 
            key={design.id} 
            className="w-full max-w-[280px] shadow-lg hover:cursor-pointer transition-shadow duration-300 hover:shadow-xl" 
            onClick={() => openModal(design.image)}
          >
            <div className="relative">
              <Image 
                src={design.image} 
                alt={design.name} 
                width={280} 
                height={330} 
                className="object-cover w-full h-[330px]" 
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center bg-gray-500/50 text-white text-2xl py-2 flex justify-center items-center">
                <FaEye />
              </div>
            </div>
            <div className="bg-white p-3 text-left">
              <div className="font-semibold text-xl mb-2">{design.name}</div>
              <div className="text-base text-gray-600">{design.info}</div>
            </div>
          </div>
        ))}
        </ScrollAnimation>
      </div>

      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-[999] flex justify-center items-center" 
          onClick={closeModal}
        >
          <div className="relative bg-white max-w-[90%] max-h-[90%] overflow-hidden rounded-lg shadow-2xl flex justify-center items-center">
            <button 
              className="absolute top-2 right-2 text-white bg-black p-2 rounded-md text-2xl font-bold z-10" 
              onClick={closeModal}
            >
              X
            </button>
            <Image 
              src={selectedImage} 
              alt="Selected Design" 
              layout="responsive" 
              objectFit="contain" 
              className="max-h-[90vh] cursor-pointer" 
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Designs;
