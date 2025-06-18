import React, { useState } from "react";
import styled from "styled-components";
import { FaStar, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaSearch, FaCampground, FaHiking, FaUmbrellaBeach, FaMountain, FaSpa, FaUtensils, FaCar, FaHotel, FaPlane, FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";
import packagesImage from '../assets/homeAssets/packages.jpg';
import trinco from '../assets/homeAssets/trinco1.jpg'; 
import ohiya from '../assets/homeAssets/ohiya2.jpeg'; 
import hikkaduwa from '../assets/homeAssets/hik3.jpg'; 
import ella from '../assets/homeAssets/ella1.jpg'; 
import udawalawa from '../assets/homeAssets/uda1.jpg'; 
import nilaweli from '../assets/homeAssets/nilaweli.webp';
import arugam from '../assets/homeAssets/aru3.webp';
import night from '../assets/homeAssets/night.jpg'; 
import fire from '../assets/homeAssets/fire.jpg'; 
import hakgala from '../assets/homeAssets/hakgala.webp'; 
import tea from '../assets/homeAssets/tea.jpg'; 
import adisham from '../assets/homeAssets/adisham.jpg';
import calipso from '../assets/homeAssets/calipso.jpg';
import turtle from '../assets/homeAssets/turtle.jpg'; 
import whale from '../assets/homeAssets/whale.jpg'; 
import surfing from '../assets/homeAssets/surfing.webp';
import parties from '../assets/homeAssets/parties.jpg';
import train from '../assets/homeAssets/train.jpg'; 
import ambe from '../assets/homeAssets/ambe.jpg'; 
import madolsima from '../assets/homeAssets/madolsima.jpeg';
import lipton from '../assets/homeAssets/lipton.webp';
import uda from '../assets/homeAssets/uda.webp';
import yala from '../assets/homeAssets/yala.webp';
import weligama from '../assets/homeAssets/weligama.jpg';

// Package data with 5 packages
const packagesData = [
  {
    id: 1,
    title: "Cultural Triangle & East Coast Adventure (Package 1)",
    duration: "7 - 10 days",
    destinations: ["Colombo", "Kandy", "Sigiriya", "Trincomalee", "Ella"],
    itinerary: [
      "Day 1: Arrive in Colombo, travel to Kandy (overnight)",
      "Day 2-3: Sigiriya (includes fire camping and night function)",
      "Day 4-5: Trincomalee (visit Munneshwaram, Nilaveli, Arugam Bay)",
      "Day 6-7: Ella (overnight)",
      "Day 8: Return to Colombo"
    ],
    price: 500, // Price per person in EUR
    rating: 4.9,
    reviews: 132,
    images: [trinco, nilaweli, arugam, night, fire],
    category: "cultural",
    featured: true,
    highlights: [
      "Sigiriya Rock Fortress visit",
      "Fire camping experience under the stars",
      "Beach time at Nilaveli and Arugam Bay",
      "Scenic train ride through tea country to Ella",
      "Cultural temple visits including Munneshwaram"
    ],
    specialDinners: [
      "Day 2: Traditional Sri Lankan BBQ in Sigiriya",
      "Day 4: Seafood feast in Trincomalee"
    ]
  },
  {
    id: 2,
    title: "Hill Country & Coastal Explorer (Package 2)",
    duration: "7 -10 Days",
    destinations: ["Colombo", "Kandy", "Nuwara Eliya", "Haputale", "Ohiya", "Horton Plains", "Hikkaduwa"],
    itinerary: [
      "Day 1: Arrive in Colombo, travel to Kandy (overnight)",
      "Day 2-3: Nuwara Eliya (visit Hakgala Gardens & tea plantations)",
      "Day 4: Haputale (visit Adisham Bungalow & Calipso)",
      "Day 5: Ohiya (overnight)",
      "Day 6-7: Horton Plains (hike to World's End)",
      "Day 8-9: Hikkaduwa/Waskaduwa beach stay with beach party",
      "Day 10: Return to Colombo"
    ],
    price: 500, // Price per person in EUR
    rating: 4.8,
    reviews: 98,
    images: [ohiya, hakgala, tea, adisham, calipso],
    category: "adventure",
    featured: true,
    highlights: [
      "Tea plantation tours with tasting sessions",
      "Horton Plains hike to World's End viewpoint",
      "Beach relaxation in Hikkaduwa with beach party",
      "Cool climate hill station stays",
      "Scenic train journeys through mountains"
    ],
    specialDinners: [
      "Day 3: Hill country special dinner in Nuwara Eliya",
      "Day 8: Beachside seafood BBQ in Hikkaduwa"
    ]
  },
  {
    id: 3,
    title: "Southern Coast Beach Break (Package 3)",
    duration: "7 - 10 Days",
    destinations: ["Colombo", "Hikkaduwa", "Weligama", "Hiriketiya", "Colombo"],
    itinerary: [
      "Day 1: Arrive in Colombo, travel to Hikkaduwa (overnight)",
      "Day 2-3: Hikkaduwa (turtle watching, whale watching)",
      "Day 4-5: Weligama (surfing experience)",
      "Day 6-7: Hiriketiya (surf & beach leisure)",
      "Day 8: Return to Colombo"
    ],
    price: 500, // Price per person in EUR
    rating: 4.7,
    reviews: 115,
    images: [hikkaduwa, turtle, whale, surfing, parties],
    category: "beach",
    featured: true,
    highlights: [
      "Turtle watching in Hikkaduwa",
      "Whale watching excursions",
      "Surfing lessons in Weligama and Hiriketiya",
      "Chill beach vibes and scenic coastal drives"
    ],
    specialDinners: [
      "Day 2: Beach BBQ night in Hikkaduwa",
      "Day 4: Seafood dinner by the bay in Hiriketiya"
    ],
    extras: [
      "Free beach party tickets included"
    ]
  },
  {
    id: 4,
    title: "Hill Country & Highlands Escape (Package 4)",
    duration: "7 - 10 Days",
    destinations: ["Colombo", "Ella", "Haputale", "Ambewela", "Horton Plains", "Bandarawela", "Colombo"],
    itinerary: [
      "Day 1: Arrive in Colombo, travel to Ella (overnight)",
      "Day 2: Ella (scenic train ride from Kandy to Ella)",
      "Day 3: Haputale (explore viewpoints & tea estates)",
      "Day 4-5: Horton Plains (World's End hike, nature trails)",
      "Day 6: Bandarawela (visit Madolsima & Lipton's Seat)",
      "Day 7: Return to Colombo"
    ],
    price: 500,
    rating: 4.8,
    reviews: 105,
    images: [ella, train, ambe, madolsima, lipton, calipso],
    category: "highlands",
    featured: true,
    highlights: [
      "Scenic train journey to Ella",
      "Tea estate visits and cool climate escapes",
      "World's End viewpoint hike in Horton Plains",
      "Visit to Madolsima and Lipton's Seat"
    ],
    specialDinners: [
      "Day 2: Traditional hill country dinner",
      "Day 5: Calypso night event with live music"
    ]
  },
  {
    id: 5,
    title: "Wildlife & Waves Explorer (Package 5)",
    duration: "7 - 10 Days",
    destinations: ["Colombo", "Udawalawa", "Yala", "Hiriketiya", "Weligama", "Hikkaduwa", "Colombo"],
    itinerary: [
      "Day 1: Arrive in Colombo, travel to Udawalawa (overnight)",
      "Day 2: Udawalawa (zoo visit, elephant safari)",
      "Day 3-4: Yala (full-day wildlife safari)",
      "Day 5: Hiriketiya (relaxation and beach time)",
      "Day 6: Weligama (surfing lessons & chill)",
      "Day 7-8: Hikkaduwa (whale watching, turtle experience)",
      "Day 9: Return to Colombo"
    ],
    price: 500,
    rating: 4.9,
    reviews: 120,
    images: [udawalawa, uda, yala, weligama, turtle, whale],
    category: "wildlife",
    featured: true,
    highlights: [
      "Elephant and wildlife safaris in Udawalawa and Yala",
      "Surfing and beach vibes in Weligama & Hiriketiya",
      "Whale and turtle watching in Hikkaduwa",
      "Balanced adventure with relaxation"
    ],
    specialDinners: [
      "Day 2: Nature BBQ night in Udawalawa",
      "Day 7: Beachside seafood feast in Hikkaduwa"
    ],
    extras: [
      "Beach parties included"
    ]
  }
];

const CurrentPackages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const filteredPackages = packagesData.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.destinations.some(d => d.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || pkg.category === selectedCategory;
    const matchesPrice = pkg.price <= priceRange;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const categories = ["all", "cultural", "adventure", "beach", "highlands", "wildlife"];

  const openPackageDetails = (pkg) => {
    setSelectedPackage(pkg);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closePackageDetails = () => {
    setSelectedPackage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'adventure': return <FaHiking />;
      case 'cultural': return <FaMapMarkerAlt />;
      case 'beach': return <FaUmbrellaBeach />;
      case 'highlands': return <FaMountain />;
      case 'wildlife': return <FaCampground />;
      default: return <FaStar />;
    }
  };

  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Our Current Packages
          </HeroTitle>
        </HeroContent>
      </HeroSection>

      {/* Package Details Section */}
      <PackageDetailsSection>
        <SectionTitle>Our Package Inclusions</SectionTitle>
        <InclusionsGrid>
          <InclusionCard>
            <FaHotel size={40} color="var(--primaryColor)" />
            <InclusionTitle>Hotel Stays</InclusionTitle>
            <InclusionText>Comfortable 3-4 star accommodations throughout your journey</InclusionText>
          </InclusionCard>
          <InclusionCard>
            <FaCar size={40} color="var(--primaryColor)" />
            <InclusionTitle>Transport</InclusionTitle>
            <InclusionText>Private AC vehicle with professional driver for all transfers</InclusionText>
          </InclusionCard>
          <InclusionCard>
            <FaUtensils size={40} color="var(--primaryColor)" />
            <InclusionTitle>Meals</InclusionTitle>
            <InclusionText>Daily breakfast and lunch with authentic Sri Lankan cuisine</InclusionText>
          </InclusionCard>
          <InclusionCard>
            <FaCampground size={40} color="var(--primaryColor)" />
            <InclusionTitle>Dinners</InclusionTitle>
            <InclusionText>Only 2 special dinners per package (BBQ or seafood depending on location)</InclusionText>
          </InclusionCard>
          <InclusionCard>
            <FaUsers size={40} color="var(--primaryColor)" />
            <InclusionTitle>Group Size</InclusionTitle>
            <InclusionText>Minimum 4 persons required (€500 per person)</InclusionText>
          </InclusionCard>
          <InclusionCard>
            <FaPlane size={40} color="var(--primaryColor)" />
            <InclusionTitle>Flights</InclusionTitle>
            <InclusionText>Flights to be arranged separately by travelers</InclusionText>
          </InclusionCard>
        </InclusionsGrid>

        <PaymentPlanSection>
          <PaymentPlanCard>
            <PaymentPlanHeader>
              <FaMoneyBillWave size={30} color="var(--primaryColor)" />
              <PaymentPlanTitle>Payment Plan</PaymentPlanTitle>
            </PaymentPlanHeader>
            <PaymentPlanDetails>
              <PaymentPlanItem>
                <strong>Original Price:</strong> <span className="strike">€800</span> per person
              </PaymentPlanItem>
              <PaymentPlanItem>
                <strong>Discount:</strong> <span className="discount">€300 OFF</span>
              </PaymentPlanItem>
              <PaymentPlanItem>
                <strong>Final Cost:</strong> <span className="final-price">€500</span> per person
              </PaymentPlanItem>
              <PaymentPlanItem>
                <strong>Group Offer:</strong> Just <span className="final-price">€2,000</span> for 4 persons full package
              </PaymentPlanItem>
            </PaymentPlanDetails>
          </PaymentPlanCard>
        </PaymentPlanSection>

        <FlexibilityNote>
          <NoteIcon>!</NoteIcon>
          <NoteText>
            <strong>Flexible Itineraries:</strong> Customers can customize their routes according to preferences. 
            All packages include cultural sites, beach parties, historical locations, and night functions.
          </NoteText>
        </FlexibilityNote>
      </PackageDetailsSection>

      {/* Filter and Packages Section */}
      <FilterSection>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search packages or destinations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
        </SearchContainer>

        <FilterControls>
          <CategoryFilter>
            <FilterLabel>Filter by Category:</FilterLabel>
            <CategoryButtons>
              {categories.map(category => (
                <CategoryButton
                  key={category}
                  active={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                >
                  {getCategoryIcon(category)} {category.charAt(0).toUpperCase() + category.slice(1)}
                </CategoryButton>
              ))}
            </CategoryButtons>
          </CategoryFilter>
        </FilterControls>
      </FilterSection>

      <PackagesContainer>
        {filteredPackages.length > 0 ? (
          <PackageGrid>
            {filteredPackages.map((pkg) => (
              <PackageCard 
                key={pkg.id}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                featured={pkg.featured}
              >
                {pkg.featured && <FeaturedBadge>Featured</FeaturedBadge>}
                <PackageImage src={pkg.images[0]} alt={pkg.title} />
                <PackageContent>
                  <PackageHeader>
                    <PackageTitle>{pkg.title}</PackageTitle>
                  </PackageHeader>
                  
                  <PackageDetails>
                    <DetailItem>
                      <FaMapMarkerAlt />
                      <span>{pkg.destinations.join(" → ")}</span>
                    </DetailItem>
                    <DetailItem>
                      <FaCalendarAlt />
                      <span>{pkg.duration}</span>
                    </DetailItem>
                    <DetailItem>
                      <FaMoneyBillWave />
                      <span>€{pkg.price} per person</span>
                    </DetailItem>
                  </PackageDetails>
                  
                  <PackageButton onClick={() => openPackageDetails(pkg)}>View Details</PackageButton>
                </PackageContent>
              </PackageCard>
            ))}
          </PackageGrid>
        ) : (
          <NoResults>
            <NoResultsTitle>No packages found</NoResultsTitle>
            <NoResultsText>Try adjusting your search filters</NoResultsText>
          </NoResults>
        )}
      </PackagesContainer>

      {/* Package Details Modal */}
      {selectedPackage && (
        <ModalOverlay
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePackageDetails}
        >
          <ModalContent
            as={motion.div}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={closePackageDetails}>×</CloseButton>
            
            <ModalImage src={selectedPackage.images[0]} alt={selectedPackage.title} />
            
            <ModalHeader>
              <ModalTitle>{selectedPackage.title}</ModalTitle>
              <ModalPrice>€{selectedPackage.price}<span>/person</span></ModalPrice>
            </ModalHeader>
            
            <ModalDetails>
              <DetailItem>
                <FaMapMarkerAlt />
                <span><strong>Route:</strong> {selectedPackage.destinations.join(" → ")}</span>
              </DetailItem>
              <DetailItem>
                <FaCalendarAlt />
                <span><strong>Duration:</strong> {selectedPackage.duration}</span>
              </DetailItem>
              <DetailItem>
                <FaUsers />
                <span><strong>Group Size:</strong> Minimum 4 persons required</span>
              </DetailItem>
              <DetailItem>
                <FaMoneyBillWave />
                <span><strong>Payment Plan:</strong> €500 per person</span>
              </DetailItem>
            </ModalDetails>
            
            <ModalDescription>
              <h4>Detailed Itinerary</h4>
              <ul>
                {selectedPackage.itinerary.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h4>Package Highlights</h4>
              <ul>
                {selectedPackage.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>

              <h4>Special Dinners Included</h4>
              <ul>
                {selectedPackage.specialDinners.map((dinner, index) => (
                  <li key={index}>{dinner}</li>
                ))}
              </ul>

              {selectedPackage.extras && (
                <>
                  <h4>Extra Inclusions</h4>
                  <ul>
                    {selectedPackage.extras.map((extra, index) => (
                      <li key={index}>{extra}</li>
                    ))}
                  </ul>
                </>
              )}

              <h4>What's Included</h4>
              <ul>
                <li>All hotel accommodations (3-4 star)</li>
                <li>Private AC vehicle transportation</li>
                <li>Daily breakfast and lunch (Sri Lankan cuisine)</li>
                <li>2 special dinners as specified</li>
                <li>All cultural and historical site entries</li>
                <li>Beach parties and night functions</li>
                <li>English speaking guide assistance</li>
              </ul>

              <h4>Not Included</h4>
              <ul>
                <li>International flights (to be arranged separately)</li>
                <li>Travel insurance</li>
                <li>Personal expenses</li>
                <li>Additional meals not specified</li>
              </ul>

              <ImportantNote>
                <strong>Note:</strong> Itinerary can be customized according to your preferences. 
                Minimum 4 persons required for booking at €500 per person.
              </ImportantNote>

              <GallerySection>
                <h4>Gallery</h4>
                <GalleryGrid>
                  {selectedPackage.images.map((image, index) => (
                    <GalleryImage key={index} src={image} alt={`${selectedPackage.title} - ${index + 1}`} />
                  ))}
                </GalleryGrid>
              </GallerySection>
            </ModalDescription>
            
            <ModalActions>
              <ModalButton onClick={closePackageDetails}>Close</ModalButton>
            </ModalActions>
          </ModalContent>
        </ModalOverlay>
      )}

      
  
  {/* <NewsletterSection>
    <NewsletterContent>
      <NewsletterTitle>Ready for Your Sri Lankan Adventure?</NewsletterTitle>
      <NewsletterText>Contact us to customize your perfect itinerary</NewsletterText>
      <NewsletterForm>
        <NewsletterInput type="email" placeholder="Your email address" />
        <NewsletterButton>Get a Quote</NewsletterButton>
      </NewsletterForm>
    </NewsletterContent>
  </NewsletterSection> 
   */}

    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  color: #333;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  height: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 5%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
                url(${packagesImage});
    background-size: cover;
    background-position: center;
    filter: blur(4px) brightness(0.9);
    z-index: 1;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    height: 60vh;
    padding: 0 2rem;
  }

  > * {
    position: relative;
    z-index: 2;
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
    font-size: 4.5rem;
  }

  @media (max-width: 767px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const PackageDetailsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding: 3rem 2rem 0;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: "The Seasons", serif;
  font-size: clamp(2rem, 2.5vw, 3rem);
  font-weight: 300;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  position: relative;
  padding-bottom: 1rem;
  letter-spacing: 2px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: var(--primaryColor);
  }
`;

const InclusionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const InclusionCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  svg {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const InclusionTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 1rem;
  color: #333;
`;

const InclusionText = styled.p`
  color: #666;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
`;

const PaymentPlanSection = styled.div`
  max-width: 1000px;
  margin: 0 auto 3rem;
`;

const PaymentPlanCard = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const PaymentPlanHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: var(--primaryColor);
`;

const PaymentPlanTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const PaymentPlanDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const PaymentPlanItem = styled.p`
  margin: 0;
  color: #555;
  font-size: 1rem;
  line-height: 1.6;

  strong {
    color: #333;
  }

  .strike {
    text-decoration: line-through;
    color: #999;
    margin-left: 0.3rem;
  }

  .discount {
    color: #d9534f;
    font-weight: bold;
    margin-left: 0.3rem;
  }

  .final-price {
    color: #28a745;
    font-weight: bold;
    font-size: 1.05rem;
    margin-left: 0.3rem;
  }
`;

const FlexibilityNote = styled.div`
  background-color: #f8f9fa;
  border-left: 4px solid var(--primaryColor);
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 0 5px 5px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
  }
`;

const NoteIcon = styled.div`
  background-color: var(--primaryColor);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    font-size: 0.9rem;
  }
`;

const NoteText = styled.p`
  margin: 0;
  color: #555;
  font-size: 0.95rem;
`;

const ImportantNote = styled.p`
  background-color: #fff8e1;
  padding: 1rem;
  border-left: 4px solid #ffc107;
  margin: 1.5rem 0 0;
  color: #5d4037;
  font-size: 0.95rem;
`;

const FilterSection = styled.div`
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem 1rem 3rem;
  border: 1px solid #ddd;
  border-radius: 50px;
  font-size: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primaryColor);
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1rem 0.8rem 2.5rem;
    font-size: 0.9rem;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  color: #777;

  @media (max-width: 480px) {
    left: 1rem;
  }
`;

const FilterControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
  }
`;

const CategoryFilter = styled.div`
  flex: 1;
  min-width: 300px;
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #444;
  font-size: 0.95rem;
`;

const CategoryButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CategoryButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.active ? 'var(--primaryColor)' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : '#555'};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  &:hover {
    background-color: ${props => props.active ? 'var(--primaryColor)' : '#e0e0e0'};
  }

  svg {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }
`;

const PackagesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-bottom: 3rem;
  }
`;

const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const PackageCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  border: ${props => props.featured ? '2px solid var(--primaryColor)' : '1px solid #eee'};
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    &:hover {
      transform: none;
    }
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: var(--primaryColor);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 1;
`;

const PackageImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${PackageCard}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const PackageContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`;

const PackageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const PackageTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0;
  color: #333;
  flex: 1;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const PackageDetails = styled.div`
  margin-bottom: 1rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #555;
  font-size: 0.9rem;
  line-height: 1.4;

  svg {
    margin-right: 0.5rem;
    color: var(--primaryColor);
    flex-shrink: 0;
  }

  span {
    flex: 1;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const PackageButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: var(--primaryColor);
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  font-size: 0.95rem;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 480px) {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

const NoResultsTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const NoResultsText = styled.p`
  color: #777;
  margin-bottom: 1.5rem;
`;

const NewsletterSection = styled.section`
  background-color: #f8f9fa;
  padding: 4rem 2rem;
  text-align: center;
  border-top: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const NewsletterContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const NewsletterTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NewsletterText = styled.p`
  color: #666;
  margin-bottom: 2rem;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const NewsletterForm = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primaryColor);
  }

  @media (max-width: 480px) {
    padding: 0.7rem 0.9rem;
    font-size: 0.9rem;
  }
`;

const NewsletterButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: var(--primaryColor);
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 576px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.5rem;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-height: 85vh;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #777;
  z-index: 10;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    color: #333;
    background-color: #f5f5f5;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1.5rem;
    top: 10px;
    right: 10px;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const ModalHeader = styled.div`
  padding: 1.5rem 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.2rem 1.2rem 0;
  }
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  color: #333;
  flex: 1;
  line-height: 1.4;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ModalPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primaryColor);
  margin-left: 1rem;
  white-space: nowrap;

  span {
    font-size: 1rem;
    color: #777;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 0;
    margin-bottom: 1rem;
  }
`;

const ModalDetails = styled.div`
  padding: 0 1.5rem;
  margin: 1rem 0;

  @media (max-width: 768px) {
    padding: 0 1.2rem;
  }
`;

const ModalDescription = styled.div`
  padding: 0 1.5rem 1.5rem;
  border-top: 1px solid #eee;
  margin-top: 1rem;

  h4 {
    margin: 1.5rem 0 0.5rem;
    color: #444;
    font-size: 1.2rem;
  }

  p, ul {
    line-height: 1.6;
    color: #555;
  }

  ul {
    padding-left: 1.2rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.2rem;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--primaryColor);
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1.2rem 1.2rem;

    h4 {
      font-size: 1.1rem;
    }
  }
`;

const GallerySection = styled.div`
  margin-top: 2rem;

  h4 {
    margin-bottom: 1rem;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
`;

const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 1.5rem 1.5rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    padding: 0 1.2rem 1.2rem;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const ModalButton = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.primary ? 'var(--primaryColor)' : '#ddd'};
  background-color: ${props => props.primary ? 'var(--primaryColor)' : 'white'};
  color: ${props => props.primary ? 'white' : '#555'};
  font-size: 0.95rem;

  &:hover {
    background-color: ${props => props.primary ? '#333' : '#f5f5f5'};
    border-color: ${props => props.primary ? '#333' : '#ccc'};
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.7rem;
  }
`;

export default CurrentPackages;