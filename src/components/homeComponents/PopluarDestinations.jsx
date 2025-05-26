import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import maldives from "../../assets/homeAssets/sigiriya.jpg";
import rome from "../../assets/homeAssets/maligawa.jpg";
import dubai from "../../assets/homeAssets/mirissa.jpg";
import santorini from "../../assets/homeAssets/ella.jpg";
import ksamil from "../../assets/homeAssets/yala.jpg";
import { motion, useAnimation, useInView } from "framer-motion";

const PopluarDestinations = () => {
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
          Popular Destinations
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
      <div className="items">
        <div className="item">
          <img src={maldives} alt="" />
          <span>
            <h1>SIGIRIYA</h1>
            <p>
              Climb the Lion Rock and witness the ancient marvel of Sigiriya, 
              a fortress in the sky, rich with history and breathtaking views.
            </p>
            <button>EXPLORE SIGIRIYA</button>
          </span>
        </div>
        <div className="item reversed">
          <img src={rome} alt="" />
          <span>
            <h1>
              SRI DALADA MALIGAWA
            </h1>
            <p>
              Home to the sacred tooth relic of Lord Buddha, 
              Sri Dalada Maligawa is a symbol of peace and devotion. 
              A timeless treasure nestled in the heart of Kandy.
            </p>
            
            <button>EXPLORE SRI DALADA MALIGAWA</button>
          </span>
        </div>
        <div className="item">
          <img src={dubai} alt="" />
          <span>
            <h1>
              MIRISSA
            </h1>
            <p>
              Mirissa, a tropical paradise on Sri Lanka's south coast, 
              offers golden beaches and crystal-clear waters. 
              It's the perfect spot for whale watching, surfing, and sunset dreams.
            </p>
            <button>EXPLORE MIRISSA</button>
          </span>
        </div>
        <div className="item reversed">
          <img src={santorini} alt="" />
          <span>
            <h1>
              ELLA
            </h1>
            <p>
              Ella is a charming mountain village in Sri Lanka, 
              known for its lush tea plantations and breathtaking views. 
              Hike to Ella Rock or stroll across the iconic Nine Arches Bridge for unforgettable adventures.
            </p>
            <button>EXPLORE ELLA</button>
          </span>
        </div>
        <div className="item">
          <img src={ksamil} alt="" />
          <span>
            <h1>
              YALA
            </h1>
            <p>
              Yala National Park is Sri Lanka's premier wildlife sanctuary, 
              home to leopards, elephants, and exotic birds. 
              Explore its rugged terrain and spot incredible wildlife on an unforgettable safari adventure.
            </p>
            <button>EXPLORE YALA</button>
          </span>
        </div>
      </div>
      <button>EXPLORE ALL</button>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 0;
  .title {
    padding: 0 7%;
    h1 {
      font-family: "The Seasons";
      font-size: 3em;
      font-weight: 100;
      color: gray;
    }
    hr {
      width: 50%;
    }
  }
  .items {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6em;
    margin-bottom: 2em;
    .item {
      position: sticky;
      background-color: #ffffffd8;
      backdrop-filter: blur(8px);
      top: 9em;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2em;
      padding: 20px 7%;
      height: 60vh;
      max-height: 600px;
      img {
        width: 45%;
        border-radius: 30px;
        border: 3px solid lightgray;
        box-shadow: 4px 7px 10px 2px #c7c7c7;
      }
      span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1em;
        h1 {
          font-family: "The Seasons";
          letter-spacing: 12px;
          color: var(--primaryColor);
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: 300;
          span {
            letter-spacing: 2px;
            color: gray;
          }
        }
        p {
          color: gray;
          line-height: 1.7em;
        }
        .tags {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 0 1.3em;
          p {
            display: flex;
            align-items: center;
            gap: 2px;
            color: var(--primaryColor);
            span {
              color: gray;
            }
          }
        }
        button {
          margin: 0;
          justify-content: flex-start;
          align-self: flex-start;
          background: #ffffff8b;
          &:hover {
            color: #464646;
            border: 1px solid #c5c5c5;
            background: #d4e2f3;
          }
        }
      }
    }
    .reversed {
      flex-direction: row-reverse;
      span {
        text-align: end;
        align-items: flex-end;
        .tags {
          align-self: center;
        }
        button {
          align-self: end;
        }
      }
    }
  }
  button {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color: #464646;
    font-size: 15px;
    padding: 15px 20px;
    border: 1px solid #c5c5c5;
    font-family: "Montserrat";
    font-weight: 300;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      background: var(--primaryColor);
      color: white;
      border: 1px solid var(--primaryColor);
    }
  }
  @media (max-width: 870px) {
    .items {
      .item {
        padding: 10px 7%;
        display: flex;
        flex-direction: column;
        height: 80vh;
        text-align: center;
        img {
          width: 60%;
        }
        span {
          align-items: center;
          p {
            max-height: 80px;
            overflow-y: scroll;
          }
          button {
            align-self: center;
            align-items: center;
            margin: auto;
          }
        }
      }
      .reversed {
        span {
          text-align: center;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .items {
      .item {
        top: 6em;
        img {
          width: 80%;
        }
        span {
          h1 {
            font-size: 7vw;
            letter-spacing: 6px;
          }
        }
      }
    }
  }
`;

export default PopluarDestinations;
