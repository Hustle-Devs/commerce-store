import Hero from "@/components/Home/Hero/Hero";
import LatestTemplates from "@/components/Home/LatestTemplates";
import ProCta from "@/components/Home/pro-cta/ProCta";
import StaffPicks from "@/components/Home/StaffPicks";
import Testimonial from "@/components/Testimonial/Testimonial";

const page = () => {
  return (
    <>
      <Hero />
      <LatestTemplates /> 
      <StaffPicks />
      <Testimonial />
      <ProCta />
    </>
  );
};

export default page;