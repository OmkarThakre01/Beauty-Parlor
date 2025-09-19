"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Handbag, Menu, Search, X } from "lucide-react";
import { Button } from "../ui/Button"; // ✅ reusable button
// import { Logo } from "../ui/Logo";   // ✅ reusable logo
import Avtar from "../../../public/images/Login/Logo.png";
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full text-[#CECCCC] border-b  bg-pink-50  sticky top-0 z-50 font-poppins">
      {/* <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16"> */}
    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Avtar}
            alt="Beauty Parlor Logo"
            width={120}
            height={120}
            className="rounded-full"
          />
          {/* <span className="font-semibold text-lg text-[#1E1E1E]">Beauty Parlor</span> */}
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-[#1E1E1E] font-medium">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/search" aria-label="Search">
            <Search className="w-5 h-5 text-[#1E1E1E] hover:text-pink-600 transition-colors" />
          </Link>
          <Link href="/cart" aria-label="Shopping Bag">
            <Handbag className="w-5 h-5 text-[#1E1E1E] hover:text-pink-600 transition-colors" />
          </Link>
          
          {/* ✅ Reusable Button */}
          <Button href="/login">Login</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#1E1E1E]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden flex flex-col bg-white shadow-md px-6 py-6 space-y-4 text-[#CECCCC] border-t">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>

          <div className="flex items-center gap-4 pt-4 border-t">
            <Link href="/search" aria-label="Search">
              <Search className="w-5 h-5 hover:text-pink-600 transition-colors" />
            </Link>
            <Link href="/cart" aria-label="Shopping Bag">
              <Handbag className="w-5 h-5 hover:text-pink-600 transition-colors" />
            </Link>

            {/* ✅ Reusable Button for Mobile */}
            <Button href="/login" fullWidth onClick={() => setIsOpen(false)}>
              Login
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
