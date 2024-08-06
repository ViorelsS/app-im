import React from "react";
import Navbar from "../molecules/Navbar";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="w-full  h-12 flex justify-start items-center shadow-lg">
      <Navbar />
    </header>
  );
}
