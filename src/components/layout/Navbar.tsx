"use client";
import { Search, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { ThemeToggle } from "../toggler/ThemeToggle";
const navLinks = [
  {
    name: "Shop",
    link: "/product",
  },
  {
    name: "Collections",
    link: "/collections",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Support",
    link: "/support",
  },
];

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navbarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(e.target as Node) &&
        isToggleOpen
      ) {
        setTimeout(() => {
          setIsToggleOpen(false);
        }, 50);
      }
    };
    if (isToggleOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isToggleOpen]);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // 0px scroo korlei true hoiye jabe
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className="nav-sec">
        <div className="nav">
          {/* <div className="top-0 -right-[17px] absolute none">
            <Image
              src={vector}
              alt="vector image"
              width={18}
              height={18}
              className="hidden lg:block"
            ></Image>
          </div>
          <div className="top-0 -left-[18px] absolute">
            <Image
              src={vector}
              alt="vector image"
              width={18}
              height={18}
              className="hidden lg:block w-full rotate-90"
            ></Image>
          </div> */}
          {/* desktob nav start */}

          <div className={`nav-content ${scrolled ? "scrolled" : ""}`}>
            <Link href={"/"} className="text-[22px] nav-logo">
              Commerce_
            </Link>
            <div className="nav-links">
              {navLinks.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className={cn(
                    "nav-single-link ",
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
          </div>
          {/* desktob nav end */}
          {/* mobile nav start */}
          <div
            ref={navbarRef}
            className={cn(
              "fixed top-0 flex flex-col justify-start items-start left-0 h-[70vh] w-[60vw] bg-background gap-[30px] z-50 transition-transform duration-500 ease-in-out lg:hidden  supports-[backdrop-filter]:bg-background/90 lg:bg-background backdrop-blur px-5 py-10 rounded-b-2xl overflow-hidden overflow-y-auto text-foreground",
              isToggleOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <Link
              href={"/"}
              className="font-medium text-[22px] text-foreground hover:text-accent tracking-tighter"
            >
              Commerce_
            </Link>
            <div className="flex flex-col justify-center items-start gap-[30px] w-full">
              {navLinks.map((item, index) => (
                <Link
                  onClick={() => setIsToggleOpen(false)}
                  href={item.link}
                  key={index}
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
            <div className="z-50 flex items-center gap-2.5">
              <span className="hover:text-accent">
                <Search />
              </span>
              <span className="relative hover:text-accent">
                <ShoppingBasket />

                <span className="top-[-10px] right-[-10px] absolute flex justify-center items-center bg-primary dark:bg-[#a19b9b] rounded-full size-[14px] font-bold text-[10px] text-foreground">
                  0
                </span>
              </span>
            </div>
          </div>
          {/* movie nav end  */}
        </div>
        {/*      <!-- Mobile trigger start--> */}
        <div className="top-0 right-16 z-50 fixed my-6 w-[40px]">
          <button
            className={`relative   order-10 block h-10  self-start justify-between lg:hidden w-full    
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0   "
                    : ""
                }
              `}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <div className="top-1/2 right-0 absolute w-6 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="block absolute bg-slate-900 dark:bg-white rounded-full w-9/12 h-0.5 transition-all -translate-y-2 duration-300 w transform"
              ></span>
              <span
                aria-hidden="true"
                className="block absolute bg-slate-900 dark:bg-white rounded-full w-6 h-0.5 transition duration-300 transform"
              ></span>
              <span
                aria-hidden="true"
                className="block absolute bg-slate-900 dark:bg-white rounded-full w-1/2 h-0.5 origin-top-left transition-all translate-y-2 duration-300 transform"
              ></span>
            </div>
          </button>
        </div>

        {/* mobile trigger end */}
      </nav>
      <div className="top-0 right-2 z-50 fixed flex justify-end items-center md:mx-2 lg:mx-6 my-6 mt-14 h-[61px] -translate-y-1/2">
        <ThemeToggle />
      </div>
    </>
  );
}
