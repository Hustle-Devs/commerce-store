import ZoomIn from "@/components/animations/ZoomIn";
import FadeUp from "@/components/animations/FadeUp";

const Hero = () => {
  return (
    <div className="contact-section">
      <div className="contact-about">
        <ZoomIn delay={0.5}>
          <p className="bg-[#ffffff] px-[4px] py-[12px] rounded-[50px] w-[74px] font-inter font-medium text-[14px] text-black text-center leading-[21px]">
            support
          </p>
        </ZoomIn>
        <FadeUp>
          <h1 className="pt-[12px] text-center">
            {" "}
            Help your <br /> customers.{" "}
          </h1>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="pt-[21px] pb-[107px] text-center">
            use this page to answer common question
          </p>
        </FadeUp>
      </div>
    </div>
  );
};

export default Hero;
