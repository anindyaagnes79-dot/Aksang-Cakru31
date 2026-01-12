import React, { useState } from "react"
import MaskGroup from "../assets/Mask group.png"

const Navbar = ({ setPage }) => {
  const [activePage, setActivePage] = useState("home")

  const handleClick = (page) => {
    setPage(page)
    setActivePage(page)
  }

  const linkClass = (page) =>
    `text-base font-semibold transition ${
      activePage === page
        ? "text-[#355E3B]"
        : "text-white hover:text-[#355E3B] cursor-pointer"
    }`

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-[9999] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <img
          src={MaskGroup}
          alt="Hearmony Logo"
          className="h-10 cursor-pointer"
          onClick={() => handleClick("home")}
        />

        {/* Links */}
        <div className="flex gap-8">
          <button onClick={() => handleClick("home")} className={linkClass("home")} >
            HOME
          </button>

          <button onClick={() => handleClick("reservation")} className={linkClass("reservation")}>
            RESERVATION
          </button>

          <button onClick={() => handleClick("merch")} className={linkClass("merch")}>
            MERCHANDISE
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
