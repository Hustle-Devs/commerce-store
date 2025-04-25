import FadeUp from "@/components/animations/FadeUp";
import ZoomIn from "@/components/animations/ZoomIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const faqs = [
  {
    question: "Which tools do I need to use the library?",
    answer:
      "Our library works with most modern development environments. You'll need a basic understanding of JavaScript and access to Node.js (version 14 or higher) to get started.",
    Value: "items-1",
  },
  {
    question: "Is this a one time payment?",
    answer:
      "Yes, we offer a one-time payment option that gives you lifetime access to the current version of the library. We also offer subscription plans that include future updates and premium support.",
    Value: "items-2",
  },
  {
    question: "Do you offer student / teacher discounts?",
    answer:
      "Yes! We offer a 50% discount for verified students and educators. Please contact our support team with your academic credentials to receive your discount code.",
    Value: "items-3",
  },
  {
    question: "Which payment methods are accepted?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. For enterprise customers, we can also accommodate purchase orders.",
    Value: "items-4",
  },
  {
    question: "I have a problem",
    answer:
      "We're sorry to hear that! Please reach out to our support team at support@example.com or use the live chat feature on our website. Our team is available 24/7 to help resolve any issues you might encounter.",
    Value: "items-5",
  },
];
const FaqSection = () => {
  return (
    <>
      <section className="faq-sec container">
        <ZoomIn>
          <h2>Frequently asked</h2>
        </ZoomIn>
        <Accordion
          type="single"
          collapsible
          className="flex-1 rounded w-full"
        >
          {faqs.map((faq, index) => (
            <FadeUp delay={index * 0.2} key={index}>
              <AccordionItem value={faq?.Value}>
                <AccordionTrigger className="font-[600] text-[18px] text-muted-foreground leading-[30px] cursor-pointer">
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

export default FaqSection;
