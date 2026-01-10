import { useState } from "react"
import Booth from "../assets/booth.avif"
import BgTxt2 from "../assets/bg texture 2.png"
import LOGO from "../assets/LOGO.png"

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

// VECTORS / DECORATIVE ELEMENTS
import Vector92 from "../assets/Vector 92.png"
import Vector96 from "../assets/Vector 96.png"
import Vector103 from "../assets/Vector 103.png"
import Vector104 from "../assets/Vector 104.png"
import Vector118 from "../assets/Vector 118.png"
import Vector135 from "../assets/Vector 135.png"
import Vector136 from "../assets/Vector 136.png"
import Vector137 from "../assets/Vector 83.png"

// MERCH 2 PNG
import EnamelPin from "../assets/Merch 2/enamel pin.png"
import Keychain from "../assets/Merch 2/keychain.png"
import Kipas from "../assets/Merch 2/kipas.png"
import StickerFishies from "../assets/Merch 2/sticker pack fishies.png"
import StickerHearmony from "../assets/Merch 2/sticker pack hearmony.png"
import StickerSkena from "../assets/Merch 2/sticker pack skena.png"
import StickerSatuan from "../assets/Merch 2/sticker satuan meme.png"

const merchSlides = [
  { img: EnamelPin, name: "Enamel Pin" },
  { img: Keychain, name: "Keychain" },
  { img: Kipas, name: "Kipas" },
  { img: StickerFishies, name: "Sticker Pack Fishies" },
  { img: StickerHearmony, name: "Sticker Pack Hearmony" },
  { img: StickerSkena, name: "Sticker Pack Skena" },
  { img: StickerSatuan, name: "Sticker Satuan" },
]

function HomeContent({ setPage }) {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const vectors = [Vector92, Vector103, Vector104, Vector118, Vector135, Vector136, Vector137, Vector96]

  return (
    <section className="relative overflow-hidden min-h-screen text-white">

      {/* ====================== BACKGROUND ====================== */}
      <div className="absolute inset-0 z-0 bg-black" />
      
      {/* Gradient + Repeating Conic Pattern */}
      <div className="absolute inset-0 bg-[repeating-conic-gradient(from_0deg_at_50%_50%,#3a7d1e_0deg_15deg,#005f34_15deg_30deg,#9e0b28_30deg_45deg,#102a44_45deg_60deg,#004c97_60deg_75deg)] opacity-40" />
      
      {/* Floating vectors */}
      {vectors.map((v, i) => (
        <img
          key={i}
          src={v}
          className="absolute opacity-30 pointer-events-none animate-float"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 5}%`,
            width: `${Math.random() * 60 + 20}px`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${6 + i}s`,
          }}
        />
      ))}

      {/* Banner Logo */}
      <div className="relative z-10 text-center py-45">
        <img src={LOGO} className="mx-auto w-40 md:w-250" alt="logo" />
        <h1 className="mt-6 text-4xl md:text-6xl text-[#f7d154] font-bold font-['Grunge-Decade']">
          <b>To be Loved</b> <b>is To be Heard</b>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 md:px-12 py-30">

        {/* ====================== OUR BOOTH ====================== */}
        <div className="text-center mb-32 relative">
          <h1 className="relative z-10 text-10xl md:text-7xl font-bold tracking-tighter font-ut-staybro-demo text-white drop-shadow-[0_0_15px_#355E3B]">
            OUR <span className="text-[#355E3B] drop-shadow-[0_0_30px_#355E3B]">BOOTH</span>
          </h1>
          <div className="h-1 w-24 bg-[#355E3B] mx-auto mt-4 rounded-full shadow-[0_0_15px_#355E3B]" />
        </div>

        {/* Booth Sections */}
        <div className="space-y-40">
          {[ 
            { title: "Mental Health", desc: "Temukan ketenangan dan ruang aman untuk bereksplorasi diri di sudut healing kami." },
            { title: "Behind The Program", desc: "Melihat lebih dekat proses kreatif dan visi besar di balik AMI 2026." },
            { title: "Interactive Games", desc: "Uji ketangkasanmu dan kumpulkan poin untuk ditukarkan dengan hadiah menarik." }
          ].map((item, i) => (
            <div key={i} className={`group flex flex-col ${i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 md:gap-24 items-center`}>
              
              {/* Image */}
              <div className="relative w-full md:w-1/2">
                <div className="absolute -inset-4 bg-[#355E3B]/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
                <div className="relative aspect-video md:aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
                  <img
                    src={Booth}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Text with box */}
              <div className="w-full md:w-1/2">
                <div className="relative bg-gradient-to-br from-[#002147]/80 to-black/80 backdrop-blur-lg p-6 md:p-8 rounded-3xl shadow-2xl border border-[#355E3B]/40">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{item.title}</h2>
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-perandory-semi-condensed">{item.desc}</p>
                  <div className={`h-0.5 w-16 bg-[#355E3B] mt-4 transform origin-left transition-transform duration-500 scale-x-50 group-hover:scale-x-100`} />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ====================== PERFORMANCE ====================== */}
        <div className="mt-56 text-center relative py-20">
          <h2 className="relative z-10 text-10xl md:text-7xl font-bold mb-4 font-ut-staybro-demo text-white drop-shadow-[0_0_15px_#355E3B]">
            Our Performance?!
          </h2>
          <p className="relative z-10 text-[#355E3B] text-5xl tracking-[0.5em] font-grunge-decade-regular drop-shadow-[0_0_10px_#355E3B] animate-pulse">
            STAY TUNED!
          </p>
        </div>

{/*====================== MERCH ====================== */}
<div className="mt-32 relative z-10">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* TEXT */}
    <div className="relative bg-gradient-to-br from-[#002147]/80 to-black/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-[#355E3B]/40 group hover:shadow-[#355E3B]/30 transition-shadow duration-500">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#355E3B]/15 to-[#002147]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight font-ut-staybro-demo text-transparent bg-clip-text bg-gradient-to-r from-white via-[#355E3B] to-[#355E3B] animate-fade-in">
        Don’t forget to check our <br />
        <span className="text-[#355E3B] font-grunge-decade-regular animate-pulse drop-shadow-lg">special merch!</span>
      </h2>
      <p className="text-gray-300 leading-relaxed mb-10 text-lg md:text-xl font-perandory-semi-condensed animate-fade-in-delay drop-shadow-md">
        HEARMONY merupakan platform yang menghadirkan berbagai merchandise eksklusif. Dari aksesoris unik hingga stiker gemas, semua dibuat supaya pengalamanmu di HEARMONY makin berkesan!
      </p>
      <button
        onClick={() => setPage('merch')}
        className="bg-gradient-to-r from-[#355E3B] to-[#2f5233] text-white px-10 py-4 rounded-full font-grunge-decade-regular font-bold text-lg hover:scale-110 hover:shadow-lg hover:shadow-[#355E3B]/50 transition-all duration-300 animate-bounce-subtle"
      >
        Lihat Katalog!
      </button>
    </div>

    {/* SLIDER 4:3 dengan desain yang lebih menarik */}
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop
        spaceBetween={30}
        slidesPerView={1}
        grabCursor
        className="w-full"
        style={{ height: 'auto' }} // Tinggi otomatis berdasarkan konten
      >
        {merchSlides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-[#355E3B]/40 max-w-md mx-auto bg-gradient-to-br from-[#002147]/20 to-black/20 backdrop-blur-sm">
              {/* Gambar dengan rasio 4:3 */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={slide.img}
                  alt={slide.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              {/* Overlay gradien yang muncul saat hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Nama produk muncul saat hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-xl md:text-2xl font-bold font-grunge-decade-regular drop-shadow-lg">
                  {slide.name}
                </h3>
              </div>
              {/* Efek cahaya halus saat hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#355E3B]/10 to-[#002147]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Indikator tambahan untuk menarik perhatian */}
      <div className="text-center mt-4 text-gray-400 text-sm animate-pulse">
        Geser untuk melihat lebih banyak!
      </div>
    </div>

  </div>
</div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -15px) rotate(2deg); }
          66% { transform: translate(-5px, 10px) rotate(-2deg); }
        }
        .animate-float { animation: float ease-in-out infinite; }
        .animate-fade-in { animation: fadeIn 1s ease-in-out; }
        .animate-fade-in-delay { animation: fadeIn 1s ease-in-out 0.5s both; }
        .animate-bounce-subtle { animation: bounceSubtle 2s infinite; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounceSubtle { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
      `}</style>
    </section>
  )
}

export default HomeContent
