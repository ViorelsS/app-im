import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center w-full">
      <ul className="flex flex-row space-x-2 items-center">
        <li className="font-bold pl-2">
          <a href="/">APP IM</a>
        </li>
        <li>
          <Link href={"/JE"}>JE</Link>
        </li>
        <li>
          <a href="/Exchange">Exchange</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
