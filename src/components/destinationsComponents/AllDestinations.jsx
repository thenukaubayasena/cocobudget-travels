import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaUmbrellaBeach, FaMountain, FaLandmark, FaTree, FaWater, FaMapMarkerAlt } from "react-icons/fa";
import sigiriya1 from "../../assets/destinationImages/sigiriya1.avif";
import sigiriya2 from "../../assets/destinationImages/sigiriya2.jpg";
import sigiriya3 from "../../assets/destinationImages/sigiriya3.jpg";
import sigiriya4 from "../../assets/destinationImages/sigiriya4.jpg";
import maligawa1 from "../../assets/destinationImages/maligawa1.jpg";
import maligawa2 from "../../assets/destinationImages/maligawa2.jpg"; 
import maligawa3 from "../../assets/destinationImages/maligawa3.jpg";
import maligawa4 from "../../assets/destinationImages/maligawa4.webp";
import mirissa1 from "../../assets/destinationImages/mirissa1.jpg";
import mirissa2 from "../../assets/destinationImages/mirissa2.jpg"; 
import mirissa3 from "../../assets/destinationImages/mirissa3.jpg";
import mirissa4 from "../../assets/destinationImages/mirissa4.jpg";
import ella1 from "../../assets/destinationImages/ella1.jpg";
import ella2 from "../../assets/destinationImages/ella2.jpg"; 
import ella3 from "../../assets/destinationImages/ella3.jpg";
import ella4 from "../../assets/destinationImages/ella4.webp";
import yala1 from "../../assets/destinationImages/yala1.jpg";
import yala2 from "../../assets/destinationImages/yala2.jpg";
import yala3 from "../../assets/destinationImages/yala3.png";
import yala4 from "../../assets/destinationImages/yala4.jpg";
import eliya1 from "../../assets/destinationImages/eliya1.jpg";
import eliya2 from "../../assets/destinationImages/eliya2.jpg"; 
import eliya3 from "../../assets/destinationImages/eliya3.jpg";
import eliya4 from "../../assets/destinationImages/eliya4.jpg";
import galle1 from "../../assets/destinationImages/galle1.jpg";
import galle2 from "../../assets/destinationImages/galle2.jpg";
import galle3 from "../../assets/destinationImages/galle3.JPG";
import galle4 from "../../assets/destinationImages/galle4.avif";
import adam1 from "../../assets/destinationImages/adam1.avif";
import adam2 from "../../assets/destinationImages/adam2.webp";
import adam3 from "../../assets/destinationImages/adam3.jpg";
import adam4 from "../../assets/destinationImages/adam4.jpg";
import polo1 from "../../assets/destinationImages/polo1.webp";
import polo2 from "../../assets/destinationImages/polo2.jpg"; 
import polo3 from "../../assets/destinationImages/polo3.jpg";
import polo4 from "../../assets/destinationImages/polo4.jpg";
import aru1 from "../../assets/destinationImages/aru1.webp";
import aru2 from "../../assets/destinationImages/aru2.jpg";
import aru3 from "../../assets/destinationImages/aru3.webp";
import aru4 from "../../assets/destinationImages/aru4.jpg";
import uda1 from "../../assets/destinationImages/uda1.jpg";
import uda2 from "../../assets/destinationImages/uda2.jpg";
import uda3 from "../../assets/destinationImages/uda3.jpg"; 
import uda4 from "../../assets/destinationImages/uda4.jpg";
import weligama1 from "../../assets/destinationImages/weligama1.jpg";
import weligama2 from "../../assets/destinationImages/weligama2.jpg";
import weligama3 from "../../assets/destinationImages/weligama3.jpg";
import weligama4 from "../../assets/destinationImages/weligama4.jpg";
import hik1 from "../../assets/destinationImages/hik1.jpg";
import hik2 from "../../assets/destinationImages/hik2.jpg"; 
import hik3 from "../../assets/destinationImages/hik3.jpg";
import hik4 from "../../assets/destinationImages/hik4.jpg";
import hapu1 from "../../assets/destinationImages/hapu1.jpg";
import hapu2 from "../../assets/destinationImages/hapu2.jpg";
import hapu3 from "../../assets/destinationImages/hapu3.jpg";
import hapu4 from "../../assets/destinationImages/hapu4.jpg";
import ambe1 from "../../assets/destinationImages/ambe1.jpg";
import ambe2 from "../../assets/destinationImages/ambe2.jpg";
import ambe3 from "../../assets/destinationImages/ambe3.jpg";
import ambe4 from "../../assets/destinationImages/ambe4.jpg";
import horton1 from "../../assets/destinationImages/horton1.jpg";
import horton2 from "../../assets/destinationImages/horton2.jpg";
import horton3 from "../../assets/destinationImages/horton3.jpg";
import horton4 from "../../assets/destinationImages/horton4.webp";
import hiri1 from "../../assets/destinationImages/hiri1.jpg";
import hiri2 from "../../assets/destinationImages/hiri2.jpg";
import hiri3 from "../../assets/destinationImages/hiri3.jpeg";
import hiri4 from "../../assets/destinationImages/hiri4.jpeg";
import ohiya1 from "../../assets/destinationImages/ohiya1.jpg";
import ohiya2 from "../../assets/destinationImages/ohiya2.jpeg";
import ohiya3 from "../../assets/destinationImages/ohiya3.JPG";
import ohiya4 from "../../assets/destinationImages/ohiya4.jpg";
import trinco1 from "../../assets/destinationImages/trinco1.jpg";
import trinco2 from "../../assets/destinationImages/trinco2.webp";
import trinco3 from "../../assets/destinationImages/trinco3.jpg";
import trinco4 from "../../assets/destinationImages/trinco4.jpg";
import destinationsImg from "../../assets/destinationImages/destinations.avif";

// Destination data
const destinations = [
  {
    id: 1,
    name: "Sigiriya Rock Fortress",
    type: "historical",
    images: [sigiriya1, sigiriya2, sigiriya3, sigiriya4],
    description: "Sigiriya, the 'Lion Rock', is an ancient rock fortress and palace ruin located in central Sri Lanka. This UNESCO World Heritage Site features remarkable frescoes, mirror walls, and landscaped gardens. Built by King Kashyapa in the 5th century, it rises 200 meters above the surrounding jungle and offers breathtaking views.",
    highlights: [
      "Ancient frescoes of the 'Sigiriya Maidens'",
      "The Lion's Paw entrance",
      "Mirror Wall with ancient graffiti",
      "Extensive water gardens"
    ],
    bestTime: "Best January-April",
    location: "Central Province"
  },
  {
    id: 2,
    name: "Temple of the Sacred Tooth Relic",
    type: "cultural",
    images: [maligawa1, maligawa2, maligawa3, maligawa4],
    description: "Sri Dalada Maligawa in Kandy is the most sacred Buddhist temple in Sri Lanka, housing the relic of the tooth of Buddha. This golden-roofed temple is part of the royal palace complex and plays a central role in the annual Esala Perahera festival featuring traditional dancers, drummers, and decorated elephants.",
    highlights: [
      "Daily rituals (pujas) at dawn, noon, and evening",
      "Beautiful Kandyan architecture",
      "The golden canopy over the relic chamber",
      "Kandy Lake adjacent to the temple"
    ],
    bestTime: "Best July-August",
    location: "Kandy"
  },
  {
    id: 3,
    name: "Mirissa",
    type: "beach",
    images: [mirissa1, mirissa2, mirissa3, mirissa4],
    description: "Mirissa is a small but picturesque beach town on Sri Lanka's south coast, famous for its golden sandy beaches, surfing spots, and whale watching opportunities. The laid-back atmosphere, beachfront restaurants serving fresh seafood, and stunning sunsets make it a favorite among travelers.",
    highlights: [
      "Whale watching tours",
      "Mirissa Beach",
      "Secret Beach",
      "Coconut Tree Hill",
      "Parrot Rock Bridge"
    ],
    bestTime: "November-April",
    location: "Southern Province"
  },
  {
    id: 4,
    name: "Ella",
    type: "mountain",
    images: [ella1, ella2, ella3, ella4],
    description: "Nestled in Sri Lanka's misty hill country, Ella is a charming mountain town surrounded by lush tea plantations, waterfalls, and dramatic cliffs. Famous for its cool climate, scenic train rides, and hiking trails, Ella offers breathtaking views of the highlands.",
    highlights: [
      "Nine Arch Bridge",
      "Little Adam's Peak",
      "Ella Rock hike",
      "Ravana Falls",
      "Demodara Loop (Train Bridge)"
    ],
    bestTime: "January-March",
    location: "Uva Province"
  },
  {
    id: 5,
    name: "Yala National Park",
    type: "wildlife",
    images: [yala1, yala2, yala3, yala4],
    description: "Yala National Park is Sri Lanka's most visited wildlife sanctuary, boasting the highest leopard density in the world. The park's diverse ecosystems range from moist monsoon forests to freshwater wetlands, providing habitats for elephants, crocodiles, and hundreds of bird species.",
    highlights: [
      "Leopard sightings (best in early morning)",
      "Elephant herds",
      "Ancient rock inscriptions",
      "Beautiful coastal areas"
    ],
    bestTime: "February-July",
    location: "Southern Province"
  },
  {
    id: 6,
    name: "Nuwara Eliya",
    type: "hill-country",
    images: [eliya1, eliya2, eliya3, eliya4],
    description: "Nuwara Eliya, known as 'Little England', is a picturesque hill station surrounded by tea plantations in Sri Lanka's central highlands. With its colonial-era bungalows, temperate climate, and stunning landscapes, it offers a cool retreat from the tropical heat.",
    highlights: [
      "Tea plantation tours and tastings",
      "Hakgala Botanical Gardens",
      "Gregory Lake boating",
      "Seetha Amman Temple"
    ],
    bestTime: "March-May",
    location: "Central Province"
  },
  {
    id: 7,
    name: "Galle Fort",
    type: "cultural",
    images: [galle1, galle2, galle3, galle4],
    description: "Galle Fort is a UNESCO World Heritage Site, originally built by the Portuguese in the 16th century and later fortified by the Dutch. This atmospheric walled city features colonial architecture, boutique shops, art galleries, and charming cafes within its ramparts.",
    highlights: [
      "Walk along the fort walls at sunset",
      "Visit the Dutch Reformed Church",
      "Galle Lighthouse",
      "National Maritime Museum"
    ],
    bestTime: "November-April",
    location: "Southern Province"
  },
  {
    id: 8,
    name: "Udawalawe National Park",
    type: "wildlife",
    images: [uda1, uda2, uda3, uda4],
    description: "Udawalawe National Park is one of the best places in Sri Lanka to see wild elephants. Located on the boundary of Sabaragamuwa and Uva Provinces, it is home to hundreds of elephants, water buffalo, and bird species.",
    highlights: [
      "Large herds of wild elephants",
      "Udawalawe Reservoir",
      "Elephant Transit Home",
      "Scenic safari drives"
    ],
    bestTime: "May-September",
    location: "Sabaragamuwa / Uva Province"
  },
  {
    id: 9,
    name: "Weligama",
    type: "beach",
    images: [weligama1, weligama2, weligama3, weligama4],
    description: "Weligama is a popular beach town on the southern coast of Sri Lanka, known for its gentle waves ideal for beginner surfers. The relaxed vibe, sandy shores, and stilt fishermen define its charm.",
    highlights: [
      "Beginner-friendly surfing",
      "Stilt fishermen",
      "Weligama Bay Beach",
      "Nearby island temples"
    ],
    bestTime: "November-April",
    location: "Southern Province"
  },
  {
    id: 10,
    name: "Hikkaduwa",
    type: "beach",
    images: [hik1, hik2, hik3, hik4],
    description: "Hikkaduwa is a vibrant beach destination famous for its coral reefs, beachside nightlife, and turtle sightings. It’s ideal for snorkeling and diving adventures.",
    highlights: [
      "Colorful coral reefs",
      "Sea turtle hatchery",
      "Snorkeling and scuba diving",
      "Beach parties and nightlife"
    ],
    bestTime: "November-April",
    location: "Southern Province"
  },
  {
    id: 11,
    name: "Haputale",
    type: "mountain",
    images: [hapu1, hapu2, hapu3, hapu4],
    description: "Haputale is a serene hill town in the Badulla District, offering sweeping views over tea plantations and valleys. It's a great place for hikes and cool-weather relaxation.",
    highlights: [
      "Lipton’s Seat viewpoint",
      "Tea estate tours",
      "Idalgashinna Railway Hike",
      "Breathtaking mountain views"
    ],
    bestTime: "March to May & December to February",
    location: "Uva Province"
  },
  {
    id: 12,
    name: "Ambewela",
    type: "mountain",
    images: [ambe1, ambe2, ambe3, ambe4],
    description: "Ambewela, known as 'Little New Zealand' in Sri Lanka, is a highland area famous for its lush grasslands, dairy farms, and chilly climate. It’s ideal for scenic relaxation and family visits.",
    highlights: [
      "Ambewela Dairy Farm",
      "Rolling green pastures",
      "Cool and misty weather",
      "Near Horton Plains"
    ],
    bestTime: "January-April",
    location: "Central Province"
  },
  {
    id: 13,
    name: "Horton Plains National Park",
    type: "nature",
    images: [horton1, horton2, horton3, horton4],
    description: "Horton Plains is a plateau at an altitude of 2,100–2,300 meters with grasslands and cloud forests. It’s home to the famous World’s End cliff and Baker’s Falls.",
    highlights: [
      "World’s End viewpoint",
      "Baker’s Falls",
      "Cloud forest hiking",
      "Unique flora and fauna"
    ],
    bestTime: "January-March",
    location: "Central Province"
  },
  {
    id: 14,
    name: "Arugam Bay",
    type: "beach",
    images: [aru1, aru2, aru3, aru4],
    description: "Arugam Bay on Sri Lanka's east coast is a world-renowned surfing destination with a laid-back vibe. The long, curling right-hand point break attracts surfers from around the globe, while the area also offers wildlife safaris and pristine beaches.",
    highlights: [
      "Surfing at Main Point",
      "Kumana National Park safaris",
      "Pottuvil Lagoon boat rides",
      "Local fishing village visits"
    ],
    bestTime: "May-October",
    location: "Eastern Province"
  },
  {
    id: 15,
    name: "Hiriketiya Beach",
    type: "beach",
    images: [hiri1, hiri2, hiri3, hiri4],
    description: "Hiriketiya is a crescent-shaped hidden beach paradise popular with surfers and digital nomads. It combines natural beauty with a boho, laid-back vibe.",
    highlights: [
      "Crescent-shaped bay",
      "Great for surfing and swimming",
      "Hip cafés and chill spots",
      "Secluded and scenic"
    ],
    bestTime: "November-April",
    location: "Southern Province"
  },
  {
    id: 16,
    name: "Ohiya",
    type: "mountain",
    images: [ohiya1, ohiya2, ohiya3, ohiya4],
    description: "Ohiya is a peaceful hill village close to Horton Plains. It offers one of the most scenic train journeys in Sri Lanka and is perfect for nature lovers and hikers.",
    highlights: [
      "Scenic train rides",
      "Access to Horton Plains",
      "Cool climate and misty forests",
      "Idalgashinna hiking trail"
    ],
    bestTime: "January-April",
    location: "Uva Province"
  },
  {
    id: 17,
    name: "Trincomalee",
    type: "beach",
    images: [trinco1, trinco2, trinco3, trinco4],
    description: "Trincomalee, located on the northeast coast, boasts beautiful beaches like Nilaveli and Uppuveli, plus rich cultural sites and dolphin-watching opportunities.",
    highlights: [
      "Nilaveli and Uppuveli beaches",
      "Koneswaram Temple",
      "Whale and dolphin watching",
      "Snorkeling at Pigeon Island"
    ],
    bestTime: "May-September",
    location: "Eastern Province"
  },
  {
    id: 18,
    name: "Adam's Peak",
    type: "mountain",
    images: [adam1, adam2, adam3, adam4],
    description: "Adam's Peak (Sri Pada) is a 2,243m tall mountain sacred to multiple religions. The pilgrimage season sees thousands climbing the 5,000+ steps to witness the breathtaking sunrise and the mysterious 'shadow of the peak' phenomenon.",
    highlights: [
      "Sunrise views from the summit",
      "Sacred footprint shrine",
      "Pilgrimage experience",
      "Panoramic views"
    ],
    bestTime: "December-May (pilgrimage season)",
    location: "Sabaragamuwa Province"
  },
  {
    id: 19,
    name: "Polonnaruwa",
    type: "historical",
    images: [polo1, polo2, polo3, polo4],
    description: "Polonnaruwa was the second capital of Sri Lanka after the destruction of Anuradhapura in 993. This UNESCO World Heritage Site features impressive ruins including the Royal Palace complex, Gal Vihara's massive Buddha statues, and the ancient Parakrama Samudra reservoir.",
    highlights: [
      "Gal Vihara's rock carvings",
      "Royal Palace ruins",
      "Parakrama Samudra reservoir",
      "Archaeological museum"
    ],
    bestTime: "Year-round",
    location: "North Central Province"
  },
];

const Destinations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  const getTypeIcon = (type) => {
    switch(type) {
      case "beach": return <FaUmbrellaBeach />;
      case "mountain": return <FaMountain />;
      case "historical": return <FaLandmark />;
      case "cultural": return <FaMapMarkerAlt />;
      case "wildlife": return <FaTree />;
      case "hill-country": return <FaWater />;
      default: return <FaMapMarkerAlt />;
    }
  };

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Top Destinations
          </HeroTitle>
        </HeroContent>
      </HeroSection>

      {/* Main Content */}
      <MainContainer ref={ref}>
        <IntroSection>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            From ancient cities to pristine beaches, misty mountains to wildlife-rich national parks, 
            discover the best places to visit in this tropical paradise.
          </motion.p>
        </IntroSection>

        <div
          style={{
            width: '100%',
            maxWidth: '800px', // Limits maximum width for larger screens
            height: '400px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)', // More pronounced shadow
            margin: '2rem auto', // Increased vertical margin
            position: 'relative',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effects
            backgroundColor: '#000', // Black background for loading state
            border: '1px solid rgba(255, 255, 255, 0.1)', // Subtle border
            ':hover': {
              transform: 'translateY(-4px)', // Slight lift on hover
              boxShadow: '0 12px 28px rgba(0, 0, 0, 0.2)' // Enhanced shadow on hover
            }
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/q0mbKsKG-ng"
            title="Test"
            style={{ 
              border: 'none',
              display: 'block',
              opacity: '0.9', // Slight transparency
              transition: 'opacity 0.3s ease',
              ':hover': {
                opacity: '1' // Full opacity on hover
              }
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {/* Optional overlay elements */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            pointerEvents: 'none', // Allows clicks to pass through to iframe
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 100%)'
          }} />
        </div>

        {/* Destinations Grid */}
        <DestinationsGrid>
          {destinations.map((destination, index) => (
            <DestinationCard 
              key={destination.id}
              as={motion.div}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={animation}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DestinationHeader>
                <DestinationName>{destination.name}</DestinationName>
                <DestinationType>
                  {getTypeIcon(destination.type)}
                  <span>{destination.type}</span>
                </DestinationType>
              </DestinationHeader>
              
              <ImageGallery>
                <MainImage>
                  <img src={destination.images[0]} alt={destination.name} />
                </MainImage>
                <SubImages>
                  {destination.images.slice(1, 4).map((image, i) => (
                    <img key={i} src={image} alt={`${destination.name} ${i+1}`} />
                  ))}
                </SubImages>
              </ImageGallery>
              
              <DestinationDescription>{destination.description}</DestinationDescription>
              
              <DestinationDetails>
                <DetailItem>
                  <FaMapMarkerAlt />
                  <span>{destination.location}</span>
                </DetailItem>
                <DetailItem>
                  <span>Best time:</span> {destination.bestTime}
                </DetailItem>
              </DestinationDetails>
              
              <ActivitiesSection>
                <ActivitiesTitle>Highlights & Activities</ActivitiesTitle>
                <ActivitiesList>
                  {destination.highlights.map((highlight, i) => (
                    <ActivityItem key={i}>
                      <ActivityIcon>•</ActivityIcon>
                      {highlight}
                    </ActivityItem>
                  ))}
                </ActivitiesList>
              </ActivitiesSection>
            </DestinationCard>
          ))}
        </DestinationsGrid>
      </MainContainer>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #333;
  overflow-x: hidden;
  padding: 0;
`;

const HeroSection = styled.section`
  position: relative;
  height: 55vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-bottom: 3rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
                url(${destinationsImg});
    background-size: cover;
    background-position: center;
    filter: blur(4px) brightness(0.9); /* Adjust blur intensity */
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 60vh;
    padding: 0 2rem;
  }

  > * {
    position: relative;
    z-index: 2; /* Ensure content appears above the blurred background */
  }
`;


const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-family: "The Seasons", serif;
  font-weight: 300;
  margin: 0;
  line-height: 1.2;
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 767px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const IntroSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.2rem;
    color: #2c5c2c;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    color: #555;
    font-size: 1.1rem;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.8rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const DestinationCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const DestinationHeader = styled.div`
  padding: 1.5rem 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const DestinationName = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #333;
  flex: 1;
`;

const DestinationType = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4a8c4a;
  font-size: 0.9rem;
  text-transform: capitalize;

  svg {
    font-size: 1.2rem;
  }
`;

const ImageGallery = styled.div`
  padding: 0 1.5rem;
  margin: 1rem 0;
`;

const MainImage = styled.div`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 0.5rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

const SubImages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;

  img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: 6px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const DestinationDescription = styled.p`
  padding: 0 1.5rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const DestinationDetails = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  svg {
    color: #4a8c4a;
  }

  span:first-child {
    font-weight: 600;
    color: #444;
  }
`;

const ActivitiesSection = styled.div`
  padding: 0 1.5rem 1.5rem;
  margin-top: auto;
`;

const ActivitiesTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  color: #2c5c2c;
`;

const ActivitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ActivityItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  color: #555;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ActivityIcon = styled.span`
  color: #4a8c4a;
  margin-right: 0.5rem;
  font-weight: bold;
`;


export default Destinations;