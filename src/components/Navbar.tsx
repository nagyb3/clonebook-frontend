import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-blue-500 px-12 py-8">
      <h1 className="font-semibold text-xl"><a href="/">clonebook</a></h1>
      <ul className="flex w-[40vw] justify-between">
        <li>Friends</li>
        <li>My Profile</li>
      </ul>
    </div>
  );
}
