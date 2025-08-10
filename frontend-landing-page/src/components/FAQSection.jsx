import { useState } from 'react';
import '../styles/FAQSection.css';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState();

  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio sit sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio sit sed aliquam."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio sit sed aliquam."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#ffffffff' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="text-center mb-5" style={{ color: '#4F46E5', fontWeight: '600', fontSize: '27px' }}>
              Frequently asked questions
            </h2>
            
            <div className="accordion" id="faqAccordion">
              {faqData.map((item, index) => {
                const isActive = openIndex === index;
                return (
                  <div key={index} className="card border-0 mb-3" style={{ backgroundColor: 'white', borderRadius: '7px' }}>
                    <div className="card-header bg-white border-0 p-0">
                      <button
                        className="btn btn-link text-start w-100 text-decoration-none p-4 d-flex justify-content-between align-items-center"
                        style={{
                          color: isActive ? '#4F46E5' : '#000000',
                          fontWeight: '500',
                          fontSize: '22px',
                          lineHeight: '28px',
                          backgroundColor: '#FAF8FF',
                        }}
                        onClick={() => toggleFAQ(index)}
                      >
                        <span className='item-question'>{item.question}</span>
                        <span 
                          style={{ 
                            fontSize: '1.5rem', 
                            color: isActive ? '#4F46E5' : '#000000',
                            transition: 'transform 0.3s ease',
                            transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)'
                          }}
                        >
                          {isActive ? '−' : '+'}
                        </span>
                      </button>
                    </div>
                    
                    <div className={`collapse ${isActive ? 'show' : ''}`}>
                      <div className="card-body pt-0 px-4 pb-4" style={{ backgroundColor: '#FAF8FF' }}>
                        <p className="item-answer mb-0" style={{ color: '#6F6C90', lineHeight: '30px', fontWeight: '400', fontSize: '18px' }}>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
