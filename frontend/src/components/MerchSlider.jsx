import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

// BAHAN BUAT BACKGROUND
import Component1 from '../assets/Component 1.png'
import Component2 from '../assets/Component 2.png'
import Group1000003533 from '../assets/Group 1000003533.png'
import Vector103 from '../assets/Vector 103.png'
import Vector104 from '../assets/Vector 104.png'
import Vector118 from '../assets/Vector 118.png'
import Vector135 from '../assets/Vector 135.png'
import Vector136 from '../assets/Vector 136.png'
import Vector137 from '../assets/Vector 83.png'
import Vector92 from '../assets/Vector 92.png'
import Vector96 from '../assets/Vector 96.png'

//MERCH SLIDER CONTENT
const slides = [
  { color: 'bg-red-400', label: 'MERCH 1' },
  { color: 'bg-blue-400', label: 'MERCH 2' },
  { color: 'bg-green-400', label: 'MERCH 3' },
]

function MerchSlider() {
  return (
    <section className="relative overflow-hidden py-24 px-12 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen">
   
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-transparent to-blue-500/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.2),transparent_50%)] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)] animate-pulse"></div>

      <img 
        src={Vector92} 
        className="absolute top-10 left-10 w-40 opacity-60 animate-bounce" 
        style={{ animationDuration: '3s' }} 
      />
      <img 
        src={Vector103} 
        className="absolute top-20 right-10 w-48 opacity-50 animate-pulse" 
        style={{ animationDuration: '4s' }} 
      />
      <img 
        src={Vector104} 
        className="absolute bottom-10 left-10 w-36 opacity-70 animate-bounce" 
        style={{ animationDuration: '5s' }} 
      />
      <img 
        src={Vector118} 
        className="absolute bottom-1/3 right-1/3 w-28 opacity-60 animate-bounce" 
        style={{ animationDuration: '4s' }} 
      />
      <img 
        src={Vector135} 
        className="absolute top-1/2 left-1/2 w-24 opacity-70 animate-pulse" 
        style={{ animationDuration: '3.5s' }} 
      />
      <img 
        src={Vector136} 
        className="absolute bottom-1/4 left-1/4 w-20 opacity-50 animate-bounce" 
        style={{ animationDuration: '2.5s' }} 
      />
      <img 
        src={Vector137} 
        className="absolute top-3/4 right-1/4 w-16 opacity-60 animate-pulse" 
        style={{ animationDuration: '5s' }} 
      />
      <img 
        src={Vector96} 
        className="absolute bottom-1/2 right-1/2 w-22 opacity-55 animate-bounce" 
        style={{ animationDuration: '3s' }} 
      />

      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-80" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/2 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-70" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-orange-400 rounded-full animate-ping opacity-65" style={{ animationDelay: '2.5s' }}></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight font-ut-staybro-demo text-shadow-lg">
            Don’t forget to check our <br />
            <span className="text-green-400 font-grunge-decade-regular text-shadow-green animate-pulse">
              special merch!
            </span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-10 text-lg md:text-xl font-perandory-semi-condensed tracking-wide">
            FINDMI 2026 merupakan platform pembelian merchandise dari acara
            tahunan di Institut Teknologi Bandung (AMI 2026). Semua kebutuhan
            merchandise & perlengkapan panitia bisa dibeli di FINDMI!
          </p>
          <button className="bg-gradient-to-r from-green-400 to-green-600 text-black px-10 py-4 rounded-full font-grunge-decade-regular font-bold text-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-lg">
            Lihat Katalog!
          </button>
        </div>

        {/* KOTAK MERCH SWIPER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          grabCursor={true}
          className="w-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className={`${slide.color} h-[360px] rounded-3xl flex items-center justify-center text-black text-2xl font-bold transition-all duration-500 hover:scale-110 hover:shadow-2xl shadow-xl backdrop-blur-sm`}
              >
                {slide.label}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default MerchSlider