"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, useUser, UserButton } from "@clerk/nextjs";
import { Box, Home, ShoppingBag, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const { isSeller, router } = useAppContext();
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      {/* Logo */}
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="logo"
      />

      {/* Links */}
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/about" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-gray-900 transition">
          Contact
        </Link>
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      {/* Right section */}
      <ul className="hidden md:flex items-center gap-6">
        {/* Search */}
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />

        {user ? (
          <>
            {/* Cart + Orders buttons */}
            <button
              onClick={() => router.push("/cart")}
              className="flex items-center gap-1 hover:text-gray-900 transition"
            >
              <ShoppingCart size={18} /> Cart
            </button>
            <button
              onClick={() => router.push("/my-orders")}
              className="flex items-center gap-1 hover:text-gray-900 transition"
            >
              <ShoppingBag size={18} /> My Orders
            </button>
            {/* Clerk UserButton (Profile, SignOut, etc.) */}
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 hover:text-gray-900 transition"
          >
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </ul>

      {/* Mobile */}
      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}

        {user ? (
          <>
            <button onClick={() => router.push("/")} className="p-2">
              <Home size={20} />
            </button>
            <button onClick={() => router.push("/all-products")} className="p-2">
              <Box size={20} />
            </button>
            <button onClick={() => router.push("/cart")} className="p-2">
              <ShoppingCart size={20} />
            </button>
            <button onClick={() => router.push("/my-orders")} className="p-2">
              <ShoppingBag size={20} />
            </button>
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 hover:text-gray-900 transition"
          >
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
