'use client';

import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQListProps {
  faqs: FAQ[];
}

const FAQList: React.FC<FAQListProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-pink-200 rounded-lg overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-5 bg-pink-100 hover:bg-pink-200 transition-colors focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-lg font-semibold text-pink-800 text-left">{faq.question}</span>
            <svg
              className={`w-6 h-6 text-pink-600 transform transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="p-5 bg-white text-gray-700 leading-relaxed border-t border-pink-200">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQList;
