'use client'
import Image from 'next/image'
import BackgroundImage from '../../public/images/bg_char_001_pc.png'
import { Check } from 'lucide-react'

const Pricing = () => {
  const scrollToContact = () => {
    const Section = document.getElementById('contact')
    if (Section) {
      Section.scrollIntoView({ behavior: 'smooth', block: 'start', duration: 500 })
    }
  }

  const priceItems = [
    {
      title: 'Basic T-shirt design',
      price: 'R300',
      description: 'one side of the apparel',
      features: [
        'Black and white colors',
        'Personalized design',
        'Standard-quality T-shirt',
        'Sizes options(S-L)',
      ],
    },
    {
      title: 'Pro T-shirt design',
      price: 'R500',
      description: 'both sides of the apparel',
      features: [
        'Full color spectrum',
        'Complex design creation',
        'High-quality T-shirt',
        'Sizes options(S-XXL)',
      ],
      isPopular: true,
    },
    {
      title: 'self potrait',
      price: 'R800',
      description: 'Custom self potrait of your desire',
      features: [
        'Full color spectrum',
        'Complex design creation',
        'Quality frame',
        'Sizes options(M-L)',
      ],
    },
  ]

  return (
    <section 
      className="relative w-full h-full px-4 py-16 bg-cover bg-no-repeat" 
      style={{backgroundImage: `url(${BackgroundImage.src})`}}
    >
      <div className="text-center mb-12">
        <h2 className="uppercase text-[#1f2e3b] text-xl sm:text-2xl lg:text-3xl tracking-normal font-medium text-center pb-2 mb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#1f2e3b]">
          Pricing
        </h2>
        <p>Unbeatable Deals: Explore Our Low Prices.</p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {priceItems.map((item, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-200 hover:shadow-xl ${
                item.isPopular ? 'ring-2 ring-cyan-200 bg-cyan-50/50' : ''
              }`}
            >
              {item.isPopular && (
                <span className="absolute -top-4 right-4 rounded-full bg-cyan-200 px-3 py-1 text-sm font-semibold">
                  Popular
                </span>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-500">{item.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {item.price}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-cyan-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

