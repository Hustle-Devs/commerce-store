import FadeUp from "@/components/animations/FadeUp";
import ZoomIn from "@/components/animations/ZoomIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqs = [
    {
      question: "How do I access my digital downloads after purchase?",
      answer:
        "Once your purchase is complete, you’ll receive an email with a download link. You can also access your downloads directly from your account page",
      Value: "items-1",
    },
    {
      question: " Can I customize the digital products I purchase?",
      answer:
        "Yes, absolutely! Most of our digital products are customizable. If you have specific requirements, feel free to contact us before or after your purchase — we’re happy to assist you.",
      Value: "items-2",
    },
    {
      question: "How long does shipping take for physical products?",
      answer:
        " Shipping times vary depending on your location. Generally, orders are processed within 1-2 business days and delivered within 5-10 business days. You will receive a tracking number once your order is shipped.",
      Value: "items-3",
    },
    {
      question: "What’s your return policy?",
      answer:
        "We offer a 7-day return window for physical products in case of damage or issues. For digital products, due to their nature, returns are not accepted, but we’re always here to help if you face any issues.",
      Value: "items-4",
    },
  ];

  return (
    <>
      <section className="mx-auto mt-[80px] w-[800px] faq-sec container">
        <ZoomIn>
          <h2>Frequently asked questions</h2>
        </ZoomIn>
        <Accordion
          type="single"
          collapsible
          className="flex-1 rounded divide-y divide-slate-200 w-full"
        >
          {faqs.map((faq, index) => (
            <FadeUp key={index} delay={index * 0.2}>
              <AccordionItem value={faq?.Value}>
                <AccordionTrigger className="font-[600] text-[#000000] text-[18px] dark:text-white leading-[30px]">
                  {" "}
                  {faq?.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 text-[16px] text-foreground">
                  {faq?.answer}
                </AccordionContent>
              </AccordionItem>
            </FadeUp>
          ))}
        </Accordion>
      </section>
    </>
  );
};

export default Faq;
