import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import mainImage from "../../assets/homeAssets/sigiriya1.jpg";
import subImg1 from "../../assets/homeAssets/sigiriya2.jpg";
import subImg2 from "../../assets/homeAssets/sigiriya3.jpg";
import subImg3 from "../../assets/homeAssets/sigiriya4.jpg";
import subImg4 from "../../assets/homeAssets/maligawa1.jpg";
import subImg5 from "../../assets/homeAssets/maligawa2.jpg";
import subImg6 from "../../assets/homeAssets/maligawa3.jpg";

import { motion, useAnimation, useInView } from "framer-motion";

const OfferOfTheWeek = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
    // eslint-disable-next-line
  }, [isInView]);
  return (
    <Container>
      <div className="title">
        <motion.h1
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
        >
          All Our Destinations
        </motion.h1>
        <motion.hr
          variants={{
            hidden: { opacity: 0, width: 0 },
            visible: { opacity: 1, width: "50%" },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
        />
      </div>
      <div className="wrapper">
        <div className="left">
          <h1>
            EXPLORE <span>SIGIRIYA</span>
          </h1>
          <p>
            Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka.
          </p>
          <span>
            <img src={subImg1} alt="" />
            <img src={subImg2} alt="" />
            <img src={subImg3} alt="" />
          </span>
        </div>
        <img src={mainImage} alt="" />
      </div>
      <div className="title">
        <motion.h1
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
        >
          All Our Destinations
        </motion.h1>
        <motion.hr
          variants={{
            hidden: { opacity: 0, width: 0 },
            visible: { opacity: 1, width: "50%" },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
        />
      </div>
      <div className="wrapper">
        <div className="left">
          <h1>
            EXPLORE <span>Sri Dalada Maligawa</span>
          </h1>
          <p></p>
          <p></p>
          <p>
            Sri Dalada Maligawa, commonly known in English as the Temple of the Sacred Tooth Relic, is a Buddhist temple in Kandy, Sri Lanka.
          </p>
          <span>
            <img src={subImg1} alt="" />
            <img src={subImg2} alt="" />
            <img src={subImg3} alt="" />
          </span>
        </div>
        <img src={mainImage} alt="" />
      </div>
      <div className="title">
        <motion.h1
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
        >
          All Our Destinations
        </motion.h1>
        <motion.hr
          variants={{
            hidden: { opacity: 0, width: 0 },
            visible: { opacity: 1, width: "50%" },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
        />
      </div>
      <div className="wrapper">
        <div className="left">
          <h1>
            EXPLORE <span>SANTORINI</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio est
            voluptatibus, non cumque aut vero ab quos eaque reiciendis?
            Similique!
          </p>
          <span>
            <img src={subImg4} alt="" />
            <img src={subImg5} alt="" />
            <img src={subImg6} alt="" />
          </span>
        </div>
        <img src={mainImage} alt="" />
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 5em 0;
  .title {
    padding: 0 7%;
    h1 {
      font-family: "The Seasons";
      font-size: 3em;
      font-weight: 100;
      color: green;
    }
    hr {
      width: 50%;
    }
  }
  .wrapper {
    padding: 3em 7%;
    /* background: #dfedf5c1; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    .left {
      display: flex;
      flex-direction: column;
      gap: 1em;
      h1 {
        font-size: 6vw;
        font-family: "The Seasons";
        font-weight: 200;
        line-height: 1em;
        span {
          font-size: 8vw;
          color: var(--primaryColor);
        }
      }
      p {
        color: gray;
        font-weight: 300;
      }
      span {
        display: flex;
        gap: 10px;
        img {
          border-radius: 10px;
          box-shadow: 0 2px 10px 2px #c4c4c4;
          width: 30%;
        }
      }
    }
    img {
      width: 47%;
    }
  }
  @media (max-width: 600px) {
    .wrapper {
      flex-direction: column;
      .left {
        h1 {
          font-size: 12vw;
          span {
            font-size: 16vw;
          }
        }
        span {
          img {
            width: 31%;
          }
        }
      }
      img {
        width: 100%;
      }
    }
  }
`;

export default OfferOfTheWeek;
