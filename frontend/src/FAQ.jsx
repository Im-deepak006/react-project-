import React, { useState } from 'react';
import './FAQ.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const faqData = [
  {
    question: "How do I register?",
    answer:
      'You can register by clicking on the "Register" link at the top right corner of the homepage...',
  },
  {
    question: "Are there any registration charges?",
    answer: "No, registration is completely free.",
  },
  {
    question: "Do I have to register to shop on Sambhaar.com necessarily?",
    answer:
      "You can surf and add products to the trolley without registration but only registered shoppers can checkout.",
  },
  {
    question: "Can I have multiple registrations?",
    answer:
      "Each email address and contact phone number can only be associated with one Sambhaar.com account.",
  },
  {
    question: "Can I add more than one delivery address to an account?",
    answer:
      "Yes, but a single order can only be delivered to one address.",
  },
  {
    question:
      "Can I have multiple accounts for family members with different mobile number and email address but the same or common delivery address?",
    answer:
      "Up to four family members can share an address with unique email and phone numbers.",
  },
  {
    question: "What is My Account?",
    answer:
      "My Account lets you track orders, view history, and update contact info.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'forgot password' on the login page. You’ll get an email with reset instructions.",
  },
  {
    question: "Is it safe to use my credit/ debit card on sambhaar.com?",
    answer:
      "Yes, it is safe. RBI mandates extra authentication via VBV or MSC.",
  },
  {
    question: "What is the meaning of cash on delivery?",
    answer:
      "It means you can pay for your order at the time of delivery.",
  },
  {
    question: "When will I receive my order?",
    answer:
      "Your order will be delivered on the selected date and time.",
  },
  {
    question: "How will the delivery be done?",
    answer:
      "Delivery is handled by trained executives ensuring hygiene and timeliness.",
  },
  {
    question: "How do I change the delivery address?",
    answer:
      "Login and update your address in the 'My Account' section.",
  },
  {
    question: "How much are the delivery charges?",
    answer:
      "Free above ₹495. Below that, charges apply based on location.",
  },
  {
    question: "Do you deliver in my area?",
    answer:
      "Check the available pin codes on our website to confirm.",
  },
  {
    question: "Will someone inform me if my delivery gets delayed?",
    answer:
      "Yes, our customer support will inform you in case of delays.",
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>   

      <div className="full-banner"></div>

      <div className="title text-center">
        <h2><strong>Frequently Asked Questions</strong></h2>
        <p>Home &gt; Frequently Asked Questions</p>
      </div>

      <div className="faq-container">
        <div className="faq-contact">
          Kindly check the FAQ below. If your query is not mentioned, please contact us at: <br />
          Email: support@sambhaar.com | Call: 81818 19368
        </div>

        {faqData.map((item, index) => (
          <div key={index} className="faq-box">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {item.question}
              <i className={`fa-solid arrow-icon ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}

        <div className="faq-contact">
          Fruits and Vegetables are natural products and may vary in size/weight. We charge only for the extra 100 grams max.
          <br />For complaints or suggestions, email support@sambhaar.com
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
