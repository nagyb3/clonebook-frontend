import React from "react";

type NavbarProps = {
  isLoggedIn: boolean;
};

export default function Navbar({ isLoggedIn }: NavbarProps) {
  return (
    <div className="flex justify-between bg-blue-500 px-12 py-8">
      <h1 className="text-xl font-semibold">
        <a href="/">clonebook</a>
      </h1>
      {isLoggedIn ? (
        <ul className="flex w-[40vw] justify-between">
          <li>Friends</li>
          <li>My Profile</li>
        </ul>
      ) : (
        <ul>
          <li>
            <a href="/login">Log in</a>
          </li>
        </ul>
      )}
    </div>
  );
}
