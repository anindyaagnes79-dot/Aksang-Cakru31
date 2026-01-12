import { useState } from "react";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/pagination";
import "./style/HomeContent.css";

//elements
import Component1 from "../assets/Component 1.png";
import Component2 from "../assets/Component 2.png";
import elementBehindPrg from "../assets/elementbehindprg.png";
import elementFuture from "../assets/elementfuture.png";
import elementMakeIt from "../assets/elementmakeit.png";
import Group1000003533 from "../assets/Group 1000003533.png";
import LOGO from "../assets/LOGO.png";
import tanganhijau from "../assets/tanganhijau.png";
import Vector103 from "../assets/Vector 103.png";
import Vector104 from "../assets/Vector 104.png";
import Vector112 from "../assets/Vector 112.png";
import Vector118 from "../assets/Vector 118.png";
import Vector135 from "../assets/Vector 135.png";
import Vector136 from "../assets/Vector 136.png";
import Vector137 from "../assets/Vector 137.png";
import Vector92 from "../assets/Vector 92.png";
import Vector96 from "../assets/Vector 96.png";
import Booth from "../assets/booth.avif";
import BgTxt2 from "../assets/bg texture 2.png";

//merch yg gajadi kepake soalnya ganti desain
import EnamePin from "../assets/Merch/Enamel Pin.jpg";
import Kechain from "../assets/Merch/Keychain.jpg";
import Kpas from "../assets/Merch/Kipas.jpg";
import StckerFishies from "../assets/Merch/Sticker Pack Fishies.jpg";
import StckerHearmony from "../assets/Merch/Sticker Pack Hearmony.jpg";
import StckerSkena from "../assets/Merch/Sticker Pack Skena.jpg";
import StckerSatuan from "../assets/Merch/Sticker Satuan.jpg";
// MERCH 2 PNG
import EnamelPin from "../assets/Merch 2/enamel pin.png";
import Keychain from "../assets/Merch 2/keychain.png";
import Kipas from "../assets/Merch 2/kipas.png";
import StickerFishies from "../assets/Merch 2/sticker pack fishies.png";
import StickerHearmony from "../assets/Merch 2/sticker pack hearmony.png";
import StickerSkena from "../assets/Merch 2/sticker pack skena.png";
import StickerSatuan from "../assets/Merch 2/sticker satuan meme.png";

const merchSlides = [
  { img: EnamelPin, name: "Enamel Pin" },
  { img: Keychain, name: "Keychain" },
  { img: Kipas, name: "Kipas" },
  { img: StickerFishies, name: "Sticker Pack Fishies" },
  { img: StickerHearmony, name: "Sticker Pack Hearmony" },
  { img: StickerSkena, name: "Sticker Pack Skena" },
  { img: StickerSatuan, name: "Sticker Satuan" },
];

function HomeContent({ setPage = () => {} }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const vectors = [
    Vector92,
    Vector103,
    Vector104,
    Vector118,
    Vector135,
    Vector136,
    Vector137,
    Vector96,
  ];

  //mw nngis
  return (
    <>
      <div
        className="
      bg-gradient-to-br from-black via-gray-900 to-black min-h-screen]
      relative 
      overflow-hidden
      text-white
      font-['Perandory-Semi-Condensed']
      tracking-[1px]
      md:tracking-[2px]
      "
      >
        {/*element bg*/}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#004c97,transparent_80%)] animate-[pulse_2.5s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_90%,#3a7d1e,transparent_80%)] animate-[pulse_2.5s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75"></div>

        <div
          className="absolute top-3/4 right-1/4 w-5 h-5 bg-blue-400 rounded-full animate-ping opacity-60"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-80"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/2 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-50"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-pink-400 rounded-full animate-ping opacity-70"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/38left-2/3 w-5 h-5 bg-orange-400 rounded-full animate-ping opacity-65"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute top-1/6 left-1/6 w-4 h-4 bg-red-400 rounded-full animate-ping opacity-70"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="absolute top-1/8 right-1/5 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-60"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute top-1/3 left-3/4 w-4 h-4 bg-blue-300 rounded-full animate-ping opacity-50"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute top-2/5 right-2/5 w-5 h-5 bg-purple-300 rounded-full animate-ping opacity-65"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-3/5 left-1/5 w-3 h-3 bg-pink-300 rounded-full animate-ping opacity-75"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-4/5 right-1/6 w-6 h-6 bg-yellow-300 rounded-full animate-ping opacity-60"
          style={{ animationDelay: "2.3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/8 w-4 h-4 bg-indigo-400 rounded-full animate-ping opacity-55"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-1/5 left-2/3 w-3 h-3 bg-orange-300 rounded-full animate-ping opacity-70"
          style={{ animationDelay: "1.8s" }}
        ></div>
        <div
          className="absolute bottom-1/6 right-1/4 w-4 h-4 bg-teal-400 rounded-full animate-ping opacity-65"
          style={{ animationDelay: "2.1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/9 w-3 h-3 bg-lime-400 rounded-full animate-ping opacity-60"
          style={{ animationDelay: "1s" }}
        ></div>

        {/*banner*/}
        <div
          className="
            relative z-[2]
            w-full
            text-center
            px-12 py-12
            tracking-[1px]
            md:tracking-[4px]
            font-bold
            font-['Grunge-Decade']
            bg-[repeating-conic-gradient(from_0deg_at_50%_50%,#3a7d1e_0deg_15deg,#005f34_15deg_30deg,#9e0b28_30deg_45deg,#102a44_45deg_60deg,#004c97_60deg_75deg)]
          "
        >
          <div className="absolute inset-0 z-[2] blur-sm opacity-90">
            <img
              className="absolute top-[120px] left-[-100px] scale-[0.2]"
              src={Vector135}
              alt="elementbanner"
            />
            <img
              className="absolute top-[190px] right-[0px] scale-[0.22]"
              src={Vector136}
              alt="elementbanner"
            />
            <img
              className="absolute top-[-220px] left-[-100px] scale-[0.25]"
              src={Vector96}
              alt="elementbanner"
            />
            <img
              className="absolute top-[-80px] right-[-10px] scale-[0.5]"
              src={Vector104}
              alt="elementbanner"
            />
          </div>

          <img className="relative z-[2] mx-auto" src={LOGO} alt="banner" />

          <h1
            className="
                relative 
                z-[2] 
                mt-6 
                text-[100%] 
                text-[#f7d154]"
          >
            <b id="tbl">To be Loved</b> <b id="tbh">is To be Heard</b>
          </h1>
        </div>

        <div
          className="
         bg-[linear-gradient(to_right,rgba(240,138,36,0.9),rgba(247,209,84,0.9),rgba(240,138,36,0.9))]
             relative
              z-[2]
               m-0
              mb-5
              py-[10px]
         "
        ></div>

        {/*booth*/}
        <div
          className="
            relative
            flex flex-col
            items-center
            text-center
            px-10 py-20
            max-w-[1000px]
            mx-auto
        "
        >
          <h1
            className="
          mb-20 text-[76px] font-bold tracking-[5px]"
          >
            Our Booth
          </h1>

          {/*banjir elements bg jujuuur*/}
          <div className="absolute blur-[4px] opacity-15 animate-[pulse_6s_ease-in-out_infinite]">
            <img src={Vector136} alt="element" className=" scale-[0.2]" />
            <img src={Vector135} alt="element" className=" scale-[0.2]" />
            <img src={Vector137} alt="element" className=" scale-[0.2]" />
            <img src={Vector118} alt="element" className=" scale-[0.3]" />
            <img src={Vector92} alt="element" className=" scale-[0.3]" />
            <img src={Vector103} alt="element" className=" scale-[0.3]" />
          </div>
          <div className="absolute blur-[4px] opacity-15 top-[20px] right-[-700px] animate-[pulse_6s_ease-in-out_infinite]">
            <img src={Vector118} alt="element" className=" scale-[0.3]" />
            <img src={Vector112} alt="element" className=" scale-[0.3]" />
            <img src={Vector104} alt="element" className=" scale-[0.4]" />
            <img src={Vector103} alt="element" className=" scale-[0.3]" />
            <img src={Vector92} alt="element" className=" scale-[0.3]" />
            <img src={Vector96} alt="element" className=" scale-[0.3]" />
            <img src={Vector135} alt="element" className=" scale-[0.2]" />
          </div>
          <div className="absolute blur-[4px] opacity-15 top-[-200px] left-[-400px] animate-[pulse_6s_ease-in-out_infinite]">
            <img src={Vector135} alt="element" className=" scale-[0.2]" />
            <img src={Vector137} alt="element" className=" scale-[0.2]" />
            <img src={Vector96} alt="element" className=" scale-[0.2]" />
            <img src={Group1000003533} alt="element" className=" scale-[0.2]" />
            <img src={Vector136} alt="element" className=" scale-[0.2]" />
            <img src={Vector104} alt="element" className=" scale-[0.3]" />
          </div>

          {/* elements */}
          <div className="" id="elements">
            <div className="absolute scale-[0.2] top-[-30px] right-[-35%] z-[3]">
              <img src={Vector137} alt="element" className=" blur-[1.5px]" />
            </div>

            <div className="absolute scale-[0.07] top-[-700px] right-[-350px] z-[3]">
              <img src={Component2} alt="element" className=" blur-[1.5px]" />
            </div>

            <div className="absolute scale-[0.2] top-[-150px] left-[-450px] z-[3] opacity-80">
              <img src={Vector103} alt="element" className=" blur-[2px]" />
            </div>

            <div className="absolute scale-[0.6] bottom-[750px] right-[-130px] z-[3]">
              <img src={Vector104} alt="element" className=" blur-[1.5px]" />
            </div>

            <div className="absolute scale-[0.1] top-[100px] left-[-650px] z-[3]">
              <img src={Component1} alt="element" className=" blur-[1.5px]" />
            </div>

            <div className="absolute scale-[0.3] bottom-[300px] left-[-170px] z-[1] opacity-80 blur-[4px]">
              <img src={Vector92} alt="element" className="" />
            </div>

            <div className="absolute scale-[0.25] bottom-[-60px] right-[-300px] z-[3] opacity-80">
              <img src={Vector135} alt="element" className=" blur-[1.5px]" />
            </div>

            <div className="absolute scale-[0.3] bottom-[0px] left-[-220px] z-[3] opacity-80">
              <img src={Vector136} alt="element" className=" blur-[1.5px]" />
            </div>
          </div>
          <div className="absolute scale-[0.3] bottom-[-570px] left-[0px] z-[3]">
            <img src={tanganhijau} alt="element" className="" />
          </div>

          {/* booth sections */}
          <div className="space-y-40 ">
            {[
              {
                title: "To The Past and To The Future",
                desc: "Ungkapan pikiran, imajinasi, harapan, dan perasaan yang ada di dalam diri.",
                image: elementFuture,
              },
              {
                title: "Behind The Program",
                desc: "Mengajak audiens mengenal proses di balik siaran dan podcast, dari persiapan hingga on air, melalui materi visual dan aktivitas interaktif yang edukatif dan engaging.",
                image: elementBehindPrg,
              },
              {
                title: "Made It",
                desc: "Booth yang berisi dokumentasi perjuangan cakru dari awal menetapkan ITB sebagai kampus pilihan, belajar keras, berdoa, latihan berulang, dan akhirnya menjadi #itbboys n #itbgirls.",
                image: elementMakeIt,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group flex flex-col ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-12 md:gap-24 items-center`}
              >
                {/* image */}
                <div className="relative w-full md:w-1/2">
                  <div className="absolute -inset-4 bg-[#355E3B]/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
                  <div className="relative aspect-video md:aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 p-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* textbox */}
                <div className="w-full md:w-1/2">
                  <div className="relative bg-gradient-to-br from-[#004c97]/80 to-black/80 backdrop-blur-lg p-6 md:p-8 rounded-3xl shadow-2xl border border-[#355E3B]/40">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      {item.title}
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-perandory-semi-condensed">
                      {item.desc}
                    </p>
                    <div
                      className={`h-0.5 w-16 bg-[#355E3B] mt-4 transform origin-left transition-transform duration-500 scale-x-50 group-hover:scale-x-100`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/*performance*/}
          <div className="pt-24 pb-12 text-center">
            <h1 className="mb-2 text-[76px] font-bold tracking-[5px]">
              Our Performance?!
            </h1>
            <h2 className="mb-20 text-[56px] font-bold tracking-[10px]">
              Stay Tuned!
            </h2>
          </div>
        </div>

        {/*reservation*/}
        <div
          className="
            relative z-[2]
            mt-[200px]
            p-8
            text-center
            font-bold
            uppercase
            text-white
        "
        >
          <h2
            className="
          text-[76px]
          tracking-[20px]
          "
          >
            25 January 2026
          </h2>
          <h4
            className="
          text-[55px]
          "
          >
            Grab your reservation!!
          </h4>
          <button
            onClick={() => {
              setPage("reservation");
              window.scrollTo(0, 0);
            }}
            className="
            inline-block
            mt-4
            rounded-full
            bg-[#5a8f3e]
            px-5 py-2
            text-[20px]
            shadow-lg
            transition-transform
            hover:scale-110
            hover:bg-[#4a7b32]
            cursor-pointer
          "
          >
            RESERVATION
          </button>
        </div>

        {/*====================== MERCH ====================== */}
        <div className="mt-32 relative z-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* TEXT */}
            <div className="relative bg-gradient-to-br from-[#002147]/80 to-black/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-[#355E3B]/40 group hover:shadow-[#355E3B]/30 transition-shadow duration-500">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#355E3B]/15 to-[#002147]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight font-ut-staybro-demo text-transparent bg-clip-text bg-gradient-to-r from-white via-[#355E3B] to-[#355E3B] animate-fade-in">
                Don’t forget to check our <br />
                <span className="text-[#355E3B] font-grunge-decade-regular animate-pulse drop-shadow-lg">
                  special merch!
                </span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-10 text-lg md:text-xl font-perandory-semi-condensed animate-fade-in-delay drop-shadow-md">
                HEARMONY merupakan platform yang menghadirkan berbagai
                merchandise eksklusif untuk Hearmates. Dari aksesoris unik
                hingga stiker gemas, semua dibuat supaya pengalamanmu di
                HEARMONY makin berkesan!
              </p>
              <button
                onClick={() => setPage("merch")}
                className="bg-gradient-to-r from-[#355E3B] to-[#2f5233] text-white px-10 py-4 rounded-full font-grunge-decade-regular font-bold text-lg hover:scale-110 hover:shadow-lg hover:shadow-[#355E3B]/50 transition-all duration-300 animate-bounce-subtle"
              >
                Lihat Katalog!
              </button>
            </div>

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
                style={{ height: "auto" }} // Tinggi otomatis berdasarkan konten
              >
                {merchSlides.map((slide, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-[#355E3B]/40 max-w-md mx-auto bg-gradient-to-br from-[#002147]/20 to-black/20 backdrop-blur-sm">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={slide.img}
                          alt={slide.name}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                      </div>
                      {/* Overlay gradien yang muncul*/}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Nama produk muncul*/}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-white text-xl md:text-2xl font-bold font-grunge-decade-regular drop-shadow-lg">
                          {slide.name}
                        </h3>
                      </div>
                      {/* Efek cahaya halus*/}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#355E3B]/10 to-[#002147]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="text-center mt-4 text-gray-400 text-sm animate-pulse">
                Geser untuk melihat lebih banyak!
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #elements img {
          animation: shaking 4s ease-in-out infinite;
          filter: blur(1.5px);
        }

        @keyframes shaking {
          0% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-30px);
          }
          50% {
            transform: translateY(30px);
          }
          75% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(10px, -15px) rotate(2deg);
          }
          66% {
            transform: translate(-5px, 10px) rotate(-2deg);
          }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-in-out 0.5s both;
        }
        .animate-bounce-subtle {
          animation: bounceSubtle 2s infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounceSubtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </>
  );
}

export default HomeContent;
