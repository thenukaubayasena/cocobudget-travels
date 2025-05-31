
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";

// Destination data
const destinations = [
  {
    id: 1,
    name: "Sigiriya Rock Fortress",
    images: [
      "https://images.pexels.com/photos/10710560/pexels-photo-10710560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/23878744/pexels-photo-23878744/free-photo-of-monkey-on-a-wall-by-the-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/9013701/pexels-photo-9013701.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.unsplash.com/photo-1539576776193-2c07122e5fee?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description: "Sigiriya, the 'Lion Rock', is an ancient rock fortress and palace ruin located in central Sri Lanka. This UNESCO World Heritage Site features remarkable frescoes, mirror walls, and landscaped gardens. Built by King Kashyapa in the 5th century, it rises 200 meters above the surrounding jungle and offers breathtaking views.",
    highlights: [
      "Ancient frescoes of the 'Sigiriya Maidens'",
      "The Lion's Paw entrance",
      "Mirror Wall with ancient graffiti",
      "Extensive water gardens"
    ]
  },
  {
    id: 2,
    name: "Temple of the Sacred Tooth Relic",
    images: [
      "https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://t3.ftcdn.net/jpg/05/44/36/12/360_F_544361215_LHJFIAjhMUSseI3zC7txLhgIIC7c4CY1.jpg",
      "https://images.unsplash.com/photo-1705730428836-b54e12aa8ea5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://fos.cmb.ac.lk/blog/wp-content/uploads/2021/06/Featured-Image-3-e1629564214632.jpg"
    ],
    description: "Sri Dalada Maligawa in Kandy is the most sacred Buddhist temple in Sri Lanka, housing the relic of the tooth of Buddha. This golden-roofed temple is part of the royal palace complex and plays a central role in the annual Esala Perahera festival featuring traditional dancers, drummers, and decorated elephants.",
    highlights: [
      "Daily rituals (pujas) at dawn, noon, and evening",
      "Beautiful Kandyan architecture",
      "The golden canopy over the relic chamber",
      "Kandy Lake adjacent to the temple"
    ]
  },
  {
    "id": 3,
  "name": "Mirissa",
  "images": [
    "https://hungariandreamers.com/wp-content/uploads/2023/09/Mirissa-Sri-Lanka4-819x1024.jpg",
    "https://wherelifeisgreat.com/wp-content/uploads/2020/05/coconut-hill5-1-of-1-copy-small.jpg",
    "https://www.laurewanders.com/wp-content/uploads/2023/12/Things-to-do-in-Mirissa-00005.jpg",
    "https://www.americanandthebrit.com/wp-content/uploads/2019/08/coconut-tree-hill-2.jpg"
  ],
  "description": "Mirissa is a small but picturesque beach town on Sri Lanka's south coast, famous for its golden sandy beaches, surfing spots, and whale watching opportunities. The laid-back atmosphere, beachfront restaurants serving fresh seafood, and stunning sunsets make it a favorite among travelers. Mirissa is also one of the best places in the world to see blue whales and dolphins in their natural habitat.",
  "highlights": [
    "Whale watching tours",
    "Mirissa Beach",
    "Secret Beach",
    "Coconut Tree Hill",
    "Parrot Rock Bridge"
  ]
  },
  {
  "id": 4,
  "name": "Ella",
  "images": [
    "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13164853/pexels-photo-13164853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4553621/pexels-photo-4553621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/28773425/pexels-photo-28773425/free-photo-of-breathtaking-ravana-falls-in-ella-sri-lanka.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ],
  "description": "Nestled in Sri Lanka's misty hill country, Ella is a charming mountain town surrounded by lush tea plantations, waterfalls, and dramatic cliffs. Famous for its cool climate, scenic train rides, and hiking trails, Ella offers breathtaking views of the highlands. The iconic Nine Arch Bridge and Little Adam's Peak are must-visit attractions in this backpacker's paradise.",
  "highlights": [
    "Nine Arch Bridge",
    "Little Adam's Peak",
    "Ella Rock hike",
    "Ravana Falls",
    "Demodara Loop (Train Bridge)"
  ]
},

  {
    id: 5,
    name: "Yala National Park",
    images: [
      "https://images.pexels.com/photos/10607669/pexels-photo-10607669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/11718270/pexels-photo-11718270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.unsplash.com/photo-1656159625990-8cd23231c218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/466629256/photo/yala-national-park.jpg?s=612x612&w=0&k=20&c=3sjeYBI4KC8fQRn9tOhC5tZ2wWyAKoaIDIXCnh6WqNc="
    ],
    description: "Yala National Park is Sri Lanka's most visited wildlife sanctuary, boasting the highest leopard density in the world. The park's diverse ecosystems range from moist monsoon forests to freshwater wetlands, providing habitats for elephants, crocodiles, and hundreds of bird species. Safari jeep tours offer thrilling wildlife encounters.",
    highlights: [
      "Leopard sightings (best in early morning)",
      "Elephant herds",
      "Ancient rock inscriptions",
      "Beautiful coastal areas"
    ]
  },
  {
    id: 5,
    name: "Nuwara Eliya",
    images: [
      "https://images.pexels.com/photos/4403937/pexels-photo-4403937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/15627024/pexels-photo-15627024/free-photo-of-panoramic-view-of-a-town-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1656377/pexels-photo-1656377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/28453880/pexels-photo-28453880/free-photo-of-scenic-flower-garden-in-nuwara-eliya-sri-lanka.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Nuwara Eliya, known as 'Little England', is a picturesque hill station surrounded by tea plantations in Sri Lanka's central highlands. With its colonial-era bungalows, temperate climate, and stunning landscapes, it offers a cool retreat from the tropical heat. The area is famous for producing some of the world's finest tea.",
    highlights: [
      "Tea plantation tours and tastings",
      "Hakgala Botanical Gardens",
      "Gregory Lake boating",
      "Seetha Amman Temple"
    ]
  }
];

const OfferOfTheWeek = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

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
          Discover Sri Lanka
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

      {destinations.map((destination, index) => (
        <React.Fragment key={destination.id}>
          <DestinationWrapper>
            <motion.div
              className="content"
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={animation}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2>{destination.name}</h2>
              <p className="description">{destination.description}</p>
              
              <div className="highlights">
                <h3>Highlights:</h3>
                <ul>
                  {destination.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="image-gallery"
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={animation}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="main-image">
                <img src={destination.images[0]} alt={destination.name} />
              </div>
              <div className="sub-images">
                {destination.images.slice(1, 4).map((image, i) => (
                  <img key={i} src={image} alt={`${destination.name} ${i+1}`} />
                ))}
              </div>
            </motion.div>
          </DestinationWrapper>

          {index < destinations.length - 1 && (
            <div className="divider">
              <hr />
            </div>
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 4em 7%;
  background-color: #f9f9f9;

  .title {
    text-align: center;
    margin-bottom: 3em;
    
    h1 {
      font-family: "The Seasons";
      font-size: 3em;
      font-weight: 100;
      color: #2c5c2c;
      margin-bottom: 0.5em;
    }

    hr {
      width: 50%;
      margin: 0 auto;
      border: none;
      border-top: 2px solid #e0e0e0;
    }
  }

  .divider {
    padding: 2em 0;
    
    hr {
      border: none;
      border-top: 1px dashed #ccc;
      width: 80%;
      margin: 0 auto;
    }
  }
`;

const DestinationWrapper = styled.div`
  display: flex;
  gap: 3em;
  margin-bottom: 2em;

  .content {
    flex: 1;
    
    h2 {
      font-family: "The Seasons";
      font-size: 2.5em;
      color: #2c5c2c;
      margin-bottom: 0.5em;
      font-weight: 300;
    }

    .description {
      color: #555;
      line-height: 1.8;
      margin-bottom: 1.5em;
      font-size: 1.1em;
    }

    .highlights {
      h3 {
        font-size: 1.3em;
        color: #2c5c2c;
        margin-bottom: 0.5em;
      }

      ul {
        list-style-type: none;
        padding-left: 0;

        li {
          position: relative;
          padding-left: 1.5em;
          margin-bottom: 0.5em;
          color: #666;

          &:before {
            content: "•";
            color: #4a8c4a;
            font-weight: bold;
            position: absolute;
            left: 0;
          }
        }
      }
    }
  }

  .image-gallery {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1em;

    .main-image {
      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }
    }

    .sub-images {
      display: flex;
      gap: 1em;

      img {
        width: 100%;
        height: 120px;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.1);
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;

    .image-gallery {
      order: -1;
      margin-bottom: 2em;

      .main-image img {
        height: 250px;
      }

      .sub-images img {
        height: 100px;
      }
    }
  }

  @media (max-width: 600px) {
    .content h2 {
      font-size: 2em;
    }

    .image-gallery {
      .main-image img {
        height: 200px;
      }

      .sub-images img {
        height: 80px;
      }
    }
  }
`;

export default OfferOfTheWeek;