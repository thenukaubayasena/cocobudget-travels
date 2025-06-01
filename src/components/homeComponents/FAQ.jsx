import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components"; // This import was missing
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, useAnimation, useInView } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  const faqs = [
    {
      question: "How do I make a reservation?",
      answer: "You can make a reservation online through our website or by calling our customer service team."
    },
    {
      question: "Are there any additional hidden fees?",
      answer: "No, our pricing is transparent. All costs are included in the final price, with no hidden fees."
    },
    {
      question: "What is the cancellation policy?",
      answer: "You can cancel up to 48 hours before departure for a full refund. Terms may vary by package."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container>
      <TitleWrapper>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
        >
          Wondering About Something? <br /> Find Out Here!
        </motion.h1>
        <motion.div
          variants={{
            hidden: { opacity: 0, width: 0 },
            visible: { opacity: 1, width: "50%" },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          className="divider"
        />
      </TitleWrapper>

      <FAQList ref={ref}>
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ 
              duration: 0.6, 
              delay: 0.4 + (index * 0.1),
              type: "spring" 
            }}
          >
            <FAQQuestion 
              onClick={() => toggleFAQ(index)}
              $isActive={activeIndex === index}
            >
              <h3>{faq.question}</h3>
              <MdKeyboardArrowDown className={`icon ${activeIndex === index ? "active" : ""}`} />
            </FAQQuestion>
            
            <FAQAnswer $isActive={activeIndex === index}>
              <p>{faq.answer}</p>
            </FAQAnswer>
            
            {index < faqs.length - 1 && <Divider />}
          </FAQItem>
        ))}
      </FAQList>
    </Container>
  );
};

// Styled Components
const Container = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 0 7%;

  h1 {
    font-family: "The Seasons", serif;
    font-size: clamp(1.8rem, 3vw, 2.75rem);
    font-weight: 300;
    color: #333;
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  .divider {
    height: 2px;
    background: linear-gradient(90deg, var(--primaryColor), transparent);
    max-width: 200px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    
    h1 {
      font-size: clamp(1.5rem, 6vw, 2rem);
    }
  }
`;

const FAQList = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 7%;
  display: flex;
  flex-direction: column;
`;

const FAQItem = styled(motion.div)`
  margin-bottom: 0.5rem;
`;

const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  cursor: pointer;
  transition: all 0.3s ease;

  h3 {
    font-size: clamp(1rem, 1.2vw, 1.2rem);
    font-weight: ${props => props.$isActive ? "500" : "400"};
    color: ${props => props.$isActive ? "var(--primaryColor)" : "#4d4d4d"};
    margin: 0;
    transition: all 0.3s ease;
    flex: 1;
    text-align: left;
  }

  .icon {
    font-size: 1.5rem;
    color: var(--primaryColor);
    transition: transform 0.3s ease;
    margin-left: 1rem;

    &.active {
      transform: rotate(180deg);
    }
  }

  &:hover {
    h3 {
      color: var(--primaryColor);
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
    
    h3 {
      font-size: 1.1rem;
    }
  }
`;

const FAQAnswer = styled.div`
  overflow: hidden;
  max-height: ${props => props.$isActive ? "500px" : "0"};
  transition: max-height 0.4s ease, opacity 0.3s ease;
  opacity: ${props => props.$isActive ? "1" : "0"};
  padding: ${props => props.$isActive ? "0 0 1.5rem 0" : "0"};

  p {
    color: #555;
    font-weight: 300;
    line-height: 1.6;
    margin: 0;
    font-size: clamp(0.9rem, 1vw, 1rem);
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.95rem;
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  background: #e0e0e0;
  width: 100%;
`;

export default FAQ;