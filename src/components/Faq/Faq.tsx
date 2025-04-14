"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "Which tools do I need to use the library?",
    answer:
      "You only need a modern web browser and a basic understanding of HTML/CSS. The library works seamlessly with popular frameworks like React, Vue, and Next.js.",
  },
  {
    question: "Is this a one-time payment?",
    answer:
      "Yes, we offer both one-time and subscription-based payment options. You can choose what suits your needs best.",
  },
  {
    question: "Do you offer student / teacher discounts?",
    answer:
      "Absolutely! We provide special discounts for students, teachers, and educational institutions. Just contact our support team with valid ID proof to get your code.",
  },
  {
    question: "Which payment methods are accepted?",
    answer:
      "We accept all major credit and debit cards, PayPal, Google Pay, Apple Pay, and other secure payment gateways.",
  },
  {
    question: "I have a problem. What should I do?",
    answer:
      "No worries! Just reach out to our support team via chat or email — we're here to help 24/7.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="faq-area">
        <div className="mb-6 text-center faq-title">
          <h2 className="font-inter font-semibold text-[30px] lg:text-[42px] leading-[54px]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4 faq-content">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] shadow-sm px-4 py-3 rounded-lg transition-all"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="font-inter font-medium text-[#5F6980] text-[18px] leading-[30px]">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <X className="w-5 h-5 text-gray-700" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-700" />
                )}
              </div>

              {activeIndex === index && (
                <p className="font-inter text-gray-600 text-left">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
