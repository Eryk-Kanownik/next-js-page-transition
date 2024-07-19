import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex gap-4 p-6">
      <div className="font-bold italic">
        <Link href="/">Logo</Link>
      </div>
      <ul className="flex gap-4">
        <li className="hover:text-gray-500 italic duration-200">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-gray-500 italic duration-200">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="hover:text-gray-500 italic duration-200">
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
