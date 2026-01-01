import React from "react"

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between items-center px-12 py-8">
      <h2 className="text-2xl font-bold">HEARMONY</h2>

      <ul className="flex flex-row gap-8 list-none p-0 m-0">
        <li className="text-lg font-bold cursor-pointer">HOME</li>
        <li className="text-lg font-bold cursor-pointer">RESERVATION</li>
        <li className="text-lg font-bold cursor-pointer">MERCHANDISE</li>
      </ul>
    </nav>
  )
}

export default Navbar
