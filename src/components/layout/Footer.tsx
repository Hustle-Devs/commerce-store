import Link from "next/link";

import { Button } from "../ui/button";
const link1 = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Shop",
    href: "/product",
  },
  {
    name: "Collections",
    href: "/collections",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];
const link2 = [
  {
    href: "/",
    name: "Terms & Conditions",
  },
  {
    href: "/",
    name: "Privacy policy",
  },
  {
    href: "/",
    name: "Support",
  },
  {
    href: "/",
    name: "404",
  },
];

const Footer = () => {
  return (
    <>
      <section className="footer-sec">
        <div className="footer-content">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
            <div className="footer-Newsletter">
              <h3 className="text-secondary-foreground text-start">
                Join our newsletter and get 20% <br />
                off your first purchase with us.
              </h3>
              <form className="relative md:w-[400px] max-w-[400px]">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="footer-input"
                />
                <Button
                  variant={"primary"}
                  type="submit"
                  className="top-1/2 right-1 absolute -translate-y-1/2"
                >
                  Join
                </Button>
              </form>
            </div>
          </div>
          <div className="footer-nav">
            <div className="footer-links">
              <h5 className="text-secondary-foreground">Pages</h5>
              {link1.map((link, index) => (
                <Link href={link.href} key={index} className="text-[#5f6980]">
                  {link.name}{" "}
                </Link>
              ))}
            </div>
            <div className="footer-links">
              <h5 className="text-secondary-foreground">Information</h5>
              {link2.map((link, index) => (
                <Link href={link.href} key={index} className="text-[#5f6980]">
                  {link.name}{" "}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-author">
          <strong>
            Created by <strong className="text-[#000000]">Outdated </strong>{" "}
            <strong> © 2024</strong>
          </strong>
        </div>
      </section>
    </>
  );
};

export default Footer;
