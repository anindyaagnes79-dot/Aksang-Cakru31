import React from "react";
import logoFooter from "../assets/LOGO FOOTER.png";

// LOGO SOSMED PNG
import instagram from "../assets/instagram.png";
import gmail from "../assets/gmail.png";
import tiktok from "../assets/tiktok.png";

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        {/* LOGO HEARMONY */}
        <img
          src={logoFooter}
          alt="Logo Footer"
          className="h-20 md:h-24 object-contain"
        />

        {/* SOSIAL MEDIA */}
        <div className="flex gap-8 justify-center">
          <a
            href="https://www.instagram.com/hearmony_?igsh=MXhua210ZjV5MXZicw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagram}
              alt="Instagram"
              className="h-10 w-10 cursor-pointer hover:scale-110 transition-transform filter invert"
            />
          </a>

          <a
            href="https://www.tiktok.com/@hearmony_?_r=1&_t=ZS-9304B0VWty1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={tiktok}
              alt="TikTok"
              className="h-10 w-10 cursor-pointer hover:scale-110 transition-transform filter invert"
            />
          </a>

          <a href="mailto:hearmonyofus@gmail.com">
            <img
              src={gmail}
              alt="Email"
              className="h-10 w-10 cursor-pointer hover:scale-110 transition-transform filter invert"
            />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-gray-500 text-sm text-center mt-6">
          © Hearmony of Us
        </p>
      </div>
    </footer>
  );
}

export default Footer;
