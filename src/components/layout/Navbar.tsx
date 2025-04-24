"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBasket, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "../toggler/ThemeToggle";

const navLinks = [
  { name: "Shop", link: "/shop" },
  { name: "Collections", link: "/collections" },
  { name: "Blog", link: "/blog" },
  { name: "Support", link: "/support" },
];

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navbarRef = useRef<HTMLDivElement>(null);

  // Close toggle when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(e.target as Node) &&
        isToggleOpen
      ) {
        setTimeout(() => setIsToggleOpen(false), 50);
      }
    };
    if (isToggleOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isToggleOpen]);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define clip-path states
  const clipDefault =
    'path("M 34,60 A 16,16 0 0 1 18, 50 L 18, 18 A 18,18 0,0,0 0, 0 L 564, 0 A 18,18 0,0,0 546, 18 L 546, 50 A 16,16 0 0 1 530, 60 Z")';
  const clipScrolled =
    'path("M 34,60 A 16,16 0 0 1 16, 50 L 16, 16 A 16,16 0,0,1 32,0 L 530, 0 A 16,16 0,0,1 546,16 L 546, 50 A 16,16 0 0 1 530, 60 Z")';

  return (
    <>
      <nav className="nav-sec">
        <div className="nav">
          {/* Desktop nav with clip-path animation */}
          <motion.div
            className={`nav-content hidden lg:flex justify-center items-center gap-[30px] bg-background px-5 py-4 w-[564px] h-[60px] overflow-hidden overflow-y-auto text-foreground`}
            initial={{
              clipPath: clipDefault,
            }}
            animate={{
              clipPath: scrolled ? clipScrolled : clipDefault,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link href="/" className="text-[22px] nav-logo">
              Commerce_
            </Link>
            <div className="flex gap-[30px] nav-links">
              {navLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className={cn(
                    "nav-single-link",
                    pathname === item.link
                      ? "text-accent font-bold"
                      : "dark:text-foreground text-primary-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="z-50 flex items-center gap-2.5">
              <span className="hover:text-accent">
                <Search />
              </span>
              <span className="relative hover:text-accent">
                <ShoppingBasket />
                <span className="nav-counter">0</span>
              </span>
            </div>
          </motion.div>

          {/* Mobile nav */}
          <div
            ref={navbarRef}
            className={cn(
              "fixed top-0 right-0 flex flex-col items-end justify-start h-full w-[60vw] bg-background z-50 transition-transform duration-500 ease-in-out lg:hidden supports-[backdrop-filter]:bg-background/90 backdrop-blur px-5 py-10 rounded-b-2xl overflow-y-auto",
              isToggleOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsToggleOpen(false)}
              className="self-start hover:bg-gray-200 dark:hover:bg-gray-700 mb-8 p-2 rounded-md text-foreground"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            {/* Brand */}
            <Link
              href="/"
              className="font-medium text-[22px] text-foreground hover:text-accent tracking-tighter"
            >
              Commerce_
            </Link>
            <div className="flex flex-col justify-center items-start gap-6 my-9 w-full text-end">
              {navLinks.map((item, idx) => (
                <Link
                  key={idx}
                  onClick={() => setIsToggleOpen(false)}
                  href={item.link}
                  className={cn(
                    "text-foreground hover:text-accent transition-all duration-300 ease-in-out w-full",
                    pathname === item.link
                      ? "text-accent font-bold"
                      : "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="z-50 flex justify-end items-end gap-2.5 w-full">
              <span className="hover:text-accent">
                <Search />
              </span>
              <span className="relative hover:text-accent">
                <ShoppingBasket />
                <span className="top-[-10px] right-[-10px] absolute flex justify-center items-center bg-primary dark:bg-[#a19b9b] rounded-full w-[14px] h-[14px] font-bold text-[10px] text-foreground">
                  0
                </span>
              </span>
            </div>
          </div>
          {/* Mobile nav end */}
        </div>

        {/* Mobile trigger */}
        <div className="lg:hidden top-4 right-0 left-0 z-40 fixed px-5">
          <div className="flex justify-between items-center p-2 rounded-xl">
            {/* Left: Logo */}
            <Link
              href="/"
              className="font-medium text-[22px] text-foreground hover:text-accent tracking-tighter"
            >
              Commerce_
            </Link>

            {/* Right: Hamburger */}
            <button
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-label="Toggle navigation"
              className={cn(
                "relative h-10 w-10 flex flex-col justify-center items-center",
                isToggleOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
            >
              <span className="block bg-slate-900 dark:bg-white w-6 h-0.5 transition-transform duration-300" />
              <span className="block bg-slate-900 dark:bg-white my-1 w-6 h-0.5 transition-transform duration-300" />
              <span className="block bg-slate-900 dark:bg-white w-6 h-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
        {/* <div className="lg:hidden top-6 z-50 fixed bg-gray-200 w-full">
          <div className="lg:hidden top-6 right-16 z-50 fixed">
            <button
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-label="Toggle navigation"
              className={cn(
                "relative h-10 w-10 flex flex-col justify-center items-center ",
                isToggleOpen &&
                  "[&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:opacity-0 [&_span:nth-child(3)]:-rotate-45 hidden"
              )}
            >
              <span className="block bg-slate-900 dark:bg-white w-6 h-0.5 transition" />
              <span className="block bg-slate-900 dark:bg-white my-1 w-6 h-0.5 transition" />
              <span className="block bg-slate-900 dark:bg-white w-6 h-0.5 transition" />
            </button>
          </div>
        </div> */}

        {/* Theme toggle */}
        <div className="top-[61px] right-2 fixed lg:mx-6 my-2">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
