import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const page = () => {
  return (
    <>
    <section className="lg:pt-[150px] lg:px-[80px] px-4 py-[90px] container">
      <div className="flex flex-col lg:flex-row gap-[32px]">
        <div>
          <div className="flex flex-col gap-[32px]">
            <Image
              src="/image/f4iROHdbNxth2ZnfXZmY71IhSg.png.png"
              alt="My photo"
              width={842}
              height={700}
            />
            <Image
              src="/image/fMMNMyobNwYR9Tp2KLUzhQIKwk.png.png"
              alt="My photo"
              width={842}
              height={700}
            />
            <Image
              src="/image/BMjxfRBGtyrhm0y48Dk5N6jaKI.png.png"
              alt="My photo"
              width={842}
              height={700}
            />
            <Image
              src="/image/8V8TsKGeXfAzlXCwMHDY5V1C6g.png.png"
              alt="My photo"
              width={842}
              height={700}
            />
          </div>
        </div>
            <div className="sticky top-[20px] h-fit">
            <div className="lg:max-w-[405px] w-full bg-primary rounded-[32px] p-[48px] flex flex-col gap-5 mb-[32px] ">
              <h3>Orbe</h3>
              <p>
                A minimal template meticulously crafted for startups, business
                owners, and entrepreneurs. Its development prioritizes high
                precision and follows the best UI/UX practices, empowering you to
                create a project that delivers remarkable results.
              </p>
              <Button variant="primary" className="py-[25px] rounded-3xl">
                $24 Buy Now
              </Button>
              <div className="flex items-center gap-2 justify-center">
                <p>Preview in browser</p>
                <ArrowUpRight />
              </div>
            </div>
            <div className="bg-secondary rounded-[32px] p-[48px] flex flex-col gap-3">
              <h3>Information</h3>
              <div className="flex justify-between pt-[16px]">
                <span className="text-muted-foreground font-normal">
                  Compatibility
                </span>
                <span className="text-muted-foreground font-normal">
                  Framer, Figma
                </span>
              </div>
              <hr className="border-[0.5] text-[#E3E3E3]" />
              <div className="flex justify-between">
                <span className="text-muted-foreground font-normal">
                  Compatibility
                </span>
                <span className="text-muted-foreground font-normal">
                  Framer, Figma
                </span>
              </div>
              <hr className="border-[0.5] text-[#E3E3E3]" />
              <div className="flex justify-between ">
                <span className="text-muted-foreground font-normal">
                  File size
                </span>
                <span className="text-muted-foreground font-normal">
                  56.74 MB
                </span>
              </div>
              <hr className="border-[0.5] text-[#E3E3E3]" />
              <div className="flex justify-between ">
                <span className="text-muted-foreground font-normal">
                  Last update
                </span>
                <span className="text-muted-foreground font-normal">
                  11 Nov 2088
                </span>
              </div>
              <hr className="border-[0.5] text-[#E3E3E3]" />
            </div>
            <div className="lg:max-w-[405px] w-full bg-[#111111] rounded-[32px] p-[48px] flex flex-col gap-[18px] mt-[32px]">
              <h3 className="text-white">Pro Access</h3>
              <p className="text-[#F9FAFB] font-normal text-[14px]">
                Designing in Framer has never been so fast and effortless. Browse
                hundreds of beautifully designed layouts, copy and paste assets.
              </p>
              <Button variant="primary" className="py-[25px] rounded-3xl">
                $24 Buy Now
              </Button>
            </div>
            </div>
        </div>

    </section>
  </>
  );
};

export default page;