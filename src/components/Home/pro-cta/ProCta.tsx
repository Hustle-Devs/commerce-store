import FadeUp from "@/components/animations/FadeUp";
import ZoomIn from "@/components/animations/ZoomIn";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const iconFeatures = [
  {
    text: "3K+ templates",
    icon: "/icons/badge-icon.png",
  },
  {
    text: "Shared styles",
    icon: "/icons/badge-icon.png",
  },
  {
    text: "Responsive layouts",
    icon: "/icons/badge-icon.png",
  },
  {
    text: "5k Components",
    icon: "/icons/badge-icon.png",
  },
  {
    text: "Google Fonts",
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
            <FadeUp>
              <h2 className="pro-heading">Pro Access</h2>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="pro-paragraph pb-5">
                Launching your next website has never been so fast and
                effortless. Browse hundreds of beautifully designed Framer
                templates and go live in minutes.
              </p>
            </FadeUp>
            <div className="grid grid-cols-1 pro-paragraph md:grid-cols-2">
         {iconFeatures.map((Item, index) => (
              <ZoomIn delay={index * 0.2} key={index}>
                <div className="flex items-center gap-2 mb-4">
                <img src={Item.icon} alt="icon" className="w-4 h-4" />
                <p className="text-white font-normal">{Item.text}</p>
                </div>
              </ZoomIn>
         ))} 
          </div>
         <div className="pro-paragraph">
         <Button variant={"primary"} className="w-full py-6 rounded-3xl">
         Get Pro Access </Button>  
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
