"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FAF7F2] text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-semibold text-lg text-orange-500 mb-4">Brand</h3>
          <ul className="space-y-2">
            <li><Link href="/our-story">Our Story</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg text-orange-500 mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link href="/booking">Booking</Link></li>
            <li><Link href="/exchange-returns">Exchange & Returns</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold text-lg text-orange-500 mb-4">Connect</h3>
          <ul className="space-y-2">
            <li><Link href="https://twitter.com">Twitter</Link></li>
            <li><Link href="https://instagram.com">Instagram</Link></li>
            <li><Link href="https://youtube.com">Youtube</Link></li>
            <li><Link href="https://pinterest.com">Pinterest</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Get to know more about us and everything we do.
          </h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4">
            <p className="mb-1">reach@serenebeauty.com</p>
            <p>(629) 555-0129</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-8 py-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="tracking-[0.4em] font-medium">SERENE</span>
          <span className="text-orange-500 font-bold">BEAUTY</span>
        </div>

        <p className="mt-4 md:mt-0">All rights reserved</p>

        <p className="mt-4 md:mt-0 font-medium">
          Where <span className="text-orange-500">Tranquility</span> Meets{" "}
          <span className="text-orange-600">Transformation.</span>
        </p>
      </div>
    </footer>
  );
}
