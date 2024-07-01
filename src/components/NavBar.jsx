import React from "react";
import { DesktopNav } from "./DesktopNav.jsx";
import { MobileNav } from "./MobileNav.jsx";

const NavBar = () => {
  return (
    <nav className="px-6 gap-4 py-6 bg-white">
      {/* Mobile Navbar */}
      <MobileNav />
      {/* Desktop Navbar */}
      <DesktopNav />
    </nav>
  );
};

export default NavBar;
