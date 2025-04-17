import Image from "next/image";

import shopify from "@/../public/icons/shopify.png";
import GlassBtn from "@/components/Home/Hero/GlassBtn";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      <section className="hero-sec">
        <div className="top-3.5 right-12 absolute flex items-center gap-2">
          <GlassBtn text="Shop Now" className="hidden lg:flex" />
          {/* <ThemeToggle /> */}
        </div>

        {/* hero text */}
        <div className="hero-content">
          <Button className="rounded-full hero-shopify-btn">
            <Image src={shopify} alt="shopify-icon" width={14} height={16} />
            <span className="font-medium text-[14px] text-primary-foreground leading-[21px] tracking-[-.56px]">
              Powered by Shopify
            </span>
          </Button>
          <div className="flex flex-col justify-start items-start gap-4">
            <h1>
              The
              <span className="font-medium text-[36px] text-accent md:text-[48px] lg:text-[64px] leading-[44px] md:leading-[60px] lg:leading-[70.4px] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-3.84px]">
                {" "}
                beautiful{" "}
              </span>
              way to sell anything with Framer.
            </h1>
            <p>
              Designed with Framer, this template makes it easy to turn <br />{" "}
              your website into a powerful ecommerce store
            </p>
          </div>
          <div>
            <GlassBtn text="Shop Products" className="flex" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
