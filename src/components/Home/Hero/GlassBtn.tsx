import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ShopButtonProps {
  text: string;
  className?: string;
}

const GlassBtn = ({ text, className = "" }: ShopButtonProps) => {
  return (
    <>
      <Button
        variant={"default"}
        className={cn(" bg-[#FFFFFF8F] p-0 rounded-full", className)}
      >
        <span className="py-[10px] pr-[15px] pl-[22px] text-[14px] text-black">
          {text}
        </span>
        <span className="bg-white p-2.5 rounded-full text-[14px] text-black">
          <ArrowUpRight />
        </span>
      </Button>
    </>
  );
};
export default GlassBtn;
