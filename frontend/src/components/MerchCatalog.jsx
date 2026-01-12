import React, { useState } from 'react'

// ===== MERCH IMAGES =====
import EnamelPin from '../assets/Merch/Enamel Pin.jpg'
import Keychain from '../assets/Merch/New Keychain.png'
import Kipas from '../assets/Merch/Kipas.jpg'
import StickerFishies from '../assets/Merch/Sticker Pack Fishies.jpg'
import StickerHearmony from '../assets/Merch/Sticker Pack Hearmony.jpg'
import StickerSkena from '../assets/Merch/Sticker Pack Skena.jpg'
import StickerSatuan from '../assets/Merch/Sticker Satuan.jpg'

// ===== VECTORS / DECOR =====
import Vector92 from '../assets/Vector 92.png'
import Vector96 from '../assets/Vector 96.png'
import Vector103 from '../assets/Vector 103.png'
import Vector104 from '../assets/Vector 104.png'
import Vector118 from '../assets/Vector 118.png'
import Vector135 from '../assets/Vector 135.png'
import Vector136 from '../assets/Vector 136.png'
import Vector137 from '../assets/Vector 83.png'

const products = [
  { id: 1, name: 'Enamel Pin', price: 'Rp 35.000', status: 'available', description: 'Pin enamel yang vibrant ini bisa bikin jaket atau tas Hearmates tambah kece! Penampilan pun jadi lebih unik.', image: EnamelPin },
  { id: 2, name: 'Keychain', price: 'Rp 15.000', status: 'available', description: 'Aksesoris kecil dengan desain pop-art dan colourful ini bakal bikin Hearmates makin stand-out! Cocok banget untuk digantung pada kunci, tas, atau totebag Hearmates biar berbeda dari yang lain!', image: Keychain },
  { id: 3, name: 'Kipas', price: 'Rp 10.000', status: 'available', description: 'Kipas dengan desain colourful dan abstrak yang ringan dan praktis jadi wajib masuk tas setiap ke konser atau beraktivitas outdoor.', image: Kipas },
  { id: 4, name: 'Sticker Pack Fishies', price: 'Rp 15.000', status: 'available', description: 'Stiker ikan nyentrik dengan warna vibrant dan artistik abis. Cocok ditempel pada laptop, tumbler, atau buku catatan supaya tambah artsy!', image: StickerFishies },
  { id: 5, name: 'Sticker Pack Hearmony', price: 'Rp 15.000', status: 'available', description: 'Stiker super gemas dengan nuansa “harmony” yang membawa energi positif. Cocok untuk jurnal, koper, atau powerbank Hearmates, nih!', image: StickerHearmony },
  { id: 6, name: 'Sticker Pack Skena', price: 'Rp 15.000', status: 'available', description: 'Stiker dengan ilustrasi unik dan edgy, mulai dari kucing nge-band sampai mobil retro. Klop banget deh untuk helm, HP, atau laptop Hearmates biar skena abis!', image: StickerSkena },
  { id: 7, name: 'Sticker Satuan', price: 'Rp 7.000 / Rp 12.000', status: 'available', description: 'Stiker dengan kata-kata catchy dan ekspresif ini cocok banget untuk seru-seruan dan dijamin relate banget!', image: StickerSatuan },
]

function MerchCatalog() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [stickerQty, setStickerQty] = useState(1)

  const filteredProducts = products.filter((p) => {
    const matchFilter = filter === 'all' || p.status === filter
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchFilter && matchSearch
  })

  return (
    <section id="catalog" className="relative overflow-hidden py-24 px-6 min-h-screen">

      {/* ====================== BACKGROUND ====================== */}
      <div className="absolute inset-0 z-0 bg-black" />
      <div className="absolute inset-0 bg-[repeating-conic-gradient(from_0deg_at_50%_50%,#3a7d1e_0deg_15deg,#005f34_15deg_30deg,#9e0b28_30deg_45deg,#102a44_45deg_60deg,#004c97_60deg_75deg)] opacity-30" />

      {[Vector92, Vector96, Vector103, Vector104, Vector118, Vector135, Vector136, Vector137].map((v, i) => (
        <img
          key={i}
          src={v}
          className="absolute opacity-20 pointer-events-none animate-float"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 5}%`,
            width: `${Math.random() * 60 + 20}px`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${6 + i}s`,
          }}
        />
      ))}

      {/* ====================== CONTENT ====================== */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-white text-4xl font-bold text-center mb-4">
          Merchandise Catalog
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Merchandise resmi HEARMONY 2026
        </p>

        {/* SEARCH */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Cari produk..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-5 py-3 rounded-full bg-[#111] 
                       text-white border border-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-[#355E3B]"
          />
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === 'all'
                ? 'bg-[#355E3B] text-white shadow-lg scale-105'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => setFilter('available')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === 'available'
                ? 'bg-[#002147] text-white shadow-lg scale-105'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            Tersedia
          </button>
          <button
            onClick={() => setFilter('soldout')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === 'soldout'
                ? 'bg-[#800020] text-white shadow-lg scale-105'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            Habis Terjual
          </button>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProduct(item)}
              className="bg-[#111] rounded-3xl overflow-hidden cursor-pointer 
                         hover:scale-105 transition border border-gray-700"
            >
              <div className="relative aspect-square">
                <img src={item.image} className="w-full h-full object-cover" />
                {item.status === 'soldout' && (
                  <div className="absolute inset-0 bg-black/70 
                                  flex items-center justify-center 
                                  text-white text-xl font-bold">
                    SOLD OUT
                  </div>
                )}
              </div>

              <div className="p-6 text-white">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                <p className="font-semibold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/80 flex items-start justify-center z-[9999] p-4 overflow-y-auto">
            <div className="relative bg-[#111] rounded-3xl p-6 w-full max-w-sm mx-auto mt-15 border border-gray-700 z-[9999]">

              {/* BACK BUTTON FIXED DI ATAS NAVBAR */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="fixed top-[100px] left-5 z-[99999] 
                           bg-[#800020] text-white px-4 py-2 rounded-full 
                           text-sm font-semibold hover:bg-[#800020]"
              >
                ← Back to Merchandise
              </button>

              {/* CLOSE */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                &times;
              </button>

              {/* PRODUCT IMAGE */}
              <img
                src={selectedProduct.image}
                className="w-full aspect-square object-cover rounded-2xl mb-4 mt-10"
              />

              {/* PRODUCT INFO */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedProduct.name}
              </h3>
              <p className="text-gray-400 mb-4">
                {selectedProduct.description}
              </p>
              <p className="text-gray-300 text-xl font-semibold mb-6">
                {selectedProduct.name === 'Sticker Satuan' 
                  ? `Rp ${stickerQty === 1 ? '7.000' : '12.000'}` 
                  : selectedProduct.price}
              </p>

              {/* STICKER QTY SELECT */}
              {selectedProduct.name === 'Sticker Satuan' && (
                <div className="flex gap-4 mb-6">
                  {[1,2].map((qty) => (
                    <button
                      key={qty}
                      onClick={() => setStickerQty(qty)}
                      className={`px-4 py-2 rounded-full font-semibold ${
                        stickerQty === qty ? 'bg-[#355E3B] text-white' : 'bg-gray-700 text-white'
                      }`}
                    >
                      {qty} PCS
                    </button>
                  ))}
                </div>
              )}

              {/* BUY BUTTON */}
              <button
                disabled={selectedProduct.status === 'soldout'}
                onClick={() => {
                  if (selectedProduct.status !== 'soldout') {
                    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeJ0HOkqbYJYdNhnIVCnjZVLkPyeqn4c1jVe2hvURsd2_8wnA/viewform', '_blank');
                  }
                }}
                className={`w-full py-3 rounded-full font-semibold text-white ${
                  selectedProduct.status === 'soldout'
                    ? 'bg-gray-600'
                    : 'bg-[#355E3B] hover:bg-[#4a7a4f]'
                }`}
              >
                {selectedProduct.status === 'soldout'
                  ? 'Habis Terjual'
                  : 'Pre-Order Sekarang'}
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -15px) rotate(2deg); }
          66% { transform: translate(-5px, 10px) rotate(-2deg); }
        }
        .animate-float { animation: float ease-in-out infinite; }
      `}</style>
    </section>
  )
}

export default MerchCatalog