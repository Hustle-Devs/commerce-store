'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: 'Which tools do I need to use the library?',
    answer:
      'You only need a modern web browser and a basic understanding of HTML/CSS. The library works seamlessly with popular frameworks like React, Vue, and Next.js.',
  },
  {
    question: 'Is this a one-time payment?',
    answer:
      'Yes, we offer both one-time and subscription-based payment options. You can choose what suits your needs best.',
  },
  {
    question: 'Do you offer student / teacher discounts?',
    answer:
      'Absolutely! We provide special discounts for students, teachers, and educational institutions. Just contact our support team with valid ID proof to get your code.',
  },
  {
    question: 'Which payment methods are accepted?',
    answer:
      'We accept all major credit and debit cards, PayPal, Google Pay, Apple Pay, and other secure payment gateways.',
  },
  {
    question: 'I have a problem. What should I do?',
    answer:
      "No worries! Just reach out to our support team via chat or email — we're here to help 24/7.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container ">
      <div className="faq-area">
        <div className="faq-title mb-6 text-center">
          <h2 className=" text-[30px] lg:text-[42px] font-semibold leading-[54px] font-inter">Frequently Asked Questions</h2>
        </div>

        <div className="faq-content space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] rounded-lg px-4 py-3 shadow-sm transition-all "
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-[18px] font-medium leading-[30px] font-inter text-[#5F6980]">{faq.question}</h3>
                {activeIndex === index ? (
                  <X className="w-5 h-5 text-gray-700" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-700" />
                )}
              </div>

              {activeIndex === index && (
                <p className=" text-gray-600 text-left font-inter">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
