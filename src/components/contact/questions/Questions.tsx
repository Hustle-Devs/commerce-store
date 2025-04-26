import FadeUp from "@/components/animations/FadeUp";
import ZoomIn from "@/components/animations/ZoomIn";

const Questions = () => {
  return (
    <div className="mx-auto mt-[48px] mb-[80px] w-[600px] container">
      <div className="questions-sec">
        <ZoomIn>
          <h2 className="font-inter font-medium text-[#000000] text-[28px] md:text-[36px] lg:text-[40px] dark:text-white text-center md:leading-[30px] lg:leading-[48px]">
            Still got questions?
          </h2>
        </ZoomIn>
        <FadeUp delay={0.2}>
          <p className="pt-[16px] text-[#000000]/56 dark:text-white">
            Send us a message below and we'll get back to you in 1 business day.
          </p>
        </FadeUp>
        <div className="flex flex-col gap-[24px] mt-[48px]">
          <div>
            <ZoomIn delay={0.2}>
              <label>Name</label>
            </ZoomIn>
            <FadeUp delay={0.2}>
              <input
                type="text"
                placeholder="Joe Gomez"
                className="bg-[#F9F6FE] mt-[10px] py-[11px] pl-[12px] rounded-[8px] w-full font-medium text-[#000000]/56 text-[14px]"
              />
            </FadeUp>
          </div>
          <div>
            <ZoomIn delay={0.2}>
              <label>Email</label>
            </ZoomIn>
            <FadeUp delay={0.2}>
              <input
                type="email"
                placeholder="joe@gomez.com"
                className="bg-[#F9F6FE] mt-[10px] py-[11px] pl-[12px] rounded-[8px] w-full font-medium text-[#000000]/56 text-[14px]"
              />{" "}
            </FadeUp>
          </div>
          <div>
            <ZoomIn delay={0.2}>
              <label>Message</label>
            </ZoomIn>
            <FadeUp delay={0.2}>
              <textarea
                className="bg-[#F9F6FE] mt-[10px] pt-[12px] pl-[12px] rounded-[8px] w-full h-[100px] font-medium text-[#000000]/56 text-[14px]"
                placeholder="Hey, I need help with..."
              ></textarea>
            </FadeUp>
          </div>
          <div className="flex justify-center items-center bg-[#7E36F4] mx-auto mb-[80px] rounded-[10px] w-full h-[40px]">
            <ZoomIn delay={0.2}>
              <button className="font-semibold text-[#ffffff] text-[14px] leading-[21px]">
                Submit
              </button>
            </ZoomIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
