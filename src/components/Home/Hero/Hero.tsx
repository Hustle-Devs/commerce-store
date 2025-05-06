import Image from "next/image";

import shopify from "@/../public/icons/shopify.png";
import FadeUp from "@/components/animations/FadeUp";
import ZoomIn from "@/components/animations/ZoomIn";
import GlassBtn from "@/components/Home/Hero/GlassBtn";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="mx-4 max-w-full">
        <div className="hero-sec container">
          <div className="top-3.5 right-12 absolute flex items-center gap-2">
            <ZoomIn delay={0.8}>
              <Link href="/shop">
                <GlassBtn text="Shop Now" className="hidden lg:flex" />
              </Link>
            </ZoomIn>
            {/* <ThemeToggle /> */}
          </div>

          {/* hero text */}
          <div className="hero-content">
            <ZoomIn delay={0.8}>
              <Button className="rounded-full hero-shopify-btn">
                <Image
                  src={shopify}
                  alt="shopify-icon"
                  width={14}
                  height={16}
                />
                <span className="font-medium text-[14px] text-primary-foreground leading-[21px] tracking-[-.56px]">
                  Powered by Shopify
                </span>
              </Button>
            </ZoomIn>
            <div className="flex flex-col justify-start items-start gap-4">
              <FadeUp>
                <h1>
                  The
                  <span className="font-medium text-[36px] text-accent md:text-[48px] lg:text-[64px] leading-[44px] md:leading-[60px] lg:leading-[70.4px] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-3.84px]">
                    {" "}
                    beautiful{" "}
                  </span>
                  way to sell anything with Framer.
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="max-w-[480px]">
                  Designed with Framer, this template makes it easy to turn your
                  website into a powerful ecommerce store
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.5}>
              <GlassBtn text="Shop Products" className="flex" />
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
