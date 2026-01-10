import React from 'react'
import logoFooter from '../assets/LOGO FOOTER.png'

// LOGO SOSMED PNG
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import tiktok from '../assets/tiktok.png'

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">

        {/*LOGO HEARMONY TENGAH*/}
        <img src={logoFooter} alt="Logo Footer" className="h-20 md:h-24 object-contain" />

        {/*LOGO SOSMED*/}
        <div className="flex gap-8 justify-center">
          <img
            src={instagram}
            alt="Instagram" href="https://www.instagram.com/hearmony_"
            className="h-10 w-10 cursor-pointer hover:scale-110 transition-transform filter invert"
          />
          <img
            src={tiktok}
            alt="TikTok" href="https://www.tiktok.com/@hearmony_"
            className="h-10 w-10 cursor-pointer hover:scale-110 transition-transform filter invert"
          />
          <img
            src={gmail}
            alt="Gmail" href="mailto:hearmonyofus@gmail.com"
            className="h-10 w-10 cursor-pointer hover:scale-110 transition-transform filter invert"
          />
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center mt-6">
          © 2026 Aksang Cakru 31
        </p>
      </div>
    </footer>
  )
}

export default Footer
