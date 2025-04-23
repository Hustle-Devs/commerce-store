import FadeUp from "@/components/animations/FadeUp";
import ZoomIn from "@/components/animations/ZoomIn";
import Image from "next/image";

const iconFeatures = [
  {
    text: "3K+ templates",
    icon: "/icons/badge-icon.png",
  },
  {
    text: "Responsive layouts",
    icon: "/icons/badge-icon.png",
  },
  {
    text: "Google Fonts",
    icon: "/icons/badge-icon.png",
  },
  {
    text: "Shared styles",
    icon: "/icons/badge-icon.png",
  },
  {
    text: "5k Components",
    icon: "/icons/badge-icon.png",
  },
  {
    text: "Premium support",
    icon: "/icons/badge-icon.png",
  },
];

const ProCta = () => {
  console.log(iconFeatures);

  return (
    <div className="container">
      <div className="pro-cta">
        <div className="pro-cta-content">
          <div>
            <FadeUp>
              <h2 className="pro-heading">Pro Access</h2>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="pro-paragraph">
                Launching your next website has never been so fast and
                effortless. Browse hundreds of beautifully designed Framer
                templates and go live in minutes.
              </p>
            </FadeUp>
            <div className="flex sm:flex-row flex-col items-center py-[5px] sm:py-[36px]">
              <div>
                <FadeUp delay={0.6}>
                  <div className="icon-area">
                    <div className="icon-image">
                      <Image
                        className=""
                        src="/icons/badge-icon.png"
                        width={16}
                        height={16}
                        alt="badge-icon"
                      />
                    </div>
                    <div className="icon-content">
                      <p className="icon-pra-content">3K+ templates</p>
                    </div>
                  </div>
                </FadeUp>
                <FadeUp delay={0.6}>
                  <div className="icon-area">
                    <div className="icon-image">
                      <Image
                        className=""
                        src="/icons/badge-icon.png"
                        width={16}
                        height={16}
                        alt="badge-icon"
                      />
                    </div>
                    <div className="icon-content">
                      <p className="icon-pra-content">Responsive layouts</p>
                    </div>
                  </div>
                </FadeUp>
                <FadeUp delay={0.6}>
                  <div className="icon-area">
                    <div className="icon-image">
                      <Image
                        className=""
                        src="/icons/badge-icon.png"
                        width={16}
                        height={16}
                        alt="badge-icon"
                      />
                    </div>
                    <div className="icon-content">
                      <p className="icon-pra-content">Google Fonts</p>
                    </div>
                  </div>
                </FadeUp>
              </div>
              <div>
                <FadeUp delay={0.6}>
                  <div className="icon-area">
                    <div className="icon-image">
                      <Image
                        className=""
                        src="/icons/badge-icon.png"
                        width={16}
                        height={16}
                        alt="badge-icon"
                      />
                    </div>
                    <div className="icon-content">
                      <p className="icon-pra-content">Shared styles</p>
                    </div>
                  </div>
                </FadeUp>
                <FadeUp delay={0.6}>
                  <div className="icon-area">
                    <div className="icon-image">
                      <Image
                        className=""
                        src="/icons/badge-icon.png"
                        width={16}
                        height={16}
                        alt="badge-icon"
                      />
                    </div>
                    <div className="icon-content">
                      <p className="icon-pra-content">5k Components</p>
                    </div>
                  </div>
                </FadeUp>
                <FadeUp delay={0.6}>
                  <div className="icon-area">
                    <div className="icon-image">
                      <Image
                        className=""
                        src="/icons/badge-icon.png"
                        width={16}
                        height={16}
                        alt="badge-icon"
                      />
                    </div>
                    <div className="icon-content">
                      <p className="icon-pra-content"> Premium support</p>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
            <div className="hidden sm:flex justify-center items-center bg-[#7E36F4] mx-auto mb-[80px] rounded-[40px] w-[70%] sm:w-[400px] md:w-[500px] lg:w-[540px] h-[54px]">
              <ZoomIn delay={0.3}>
                <button className="font-semibold text-[#ffffff] text-[18px] leading-[30px]">
                  Start your 7 day trial
                </button>
              </ZoomIn>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[95%]">
          <Image
            src="/image/pro-img.png"
            width={540}
            height={579}
            alt="pro-img"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProCta;
