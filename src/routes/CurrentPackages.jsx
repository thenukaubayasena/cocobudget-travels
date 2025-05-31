import React, { useState } from "react";
import styled from "styled-components";
import { FaStar, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaSearch, FaCampground, FaHiking, FaUmbrellaBeach, FaMountain, FaSpa, FaUtensils, FaCar, FaHotel, FaPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import packagesImage from '../assets/homeAssets/packages.jpg';

// Package data with 5 packages
const packagesData = [
  {
    id: 1,
    title: "Cultural Triangle & East Coast Adventure",
    duration: "7 Days",
    destinations: ["Colombo", "Kandy", "Sigiriya", "Trincomalee", "Ella"],
    itinerary: [
      "Day 1: Arrive in Colombo, travel to Kandy (overnight)",
      "Day 2-3: Sigiriya (includes fire camping and night function)",
      "Day 4-5: Trincomalee (visit Munneshwaram, Nilaveli, Arugam Bay)",
      "Day 6: Ella (overnight)",
      "Day 7: Return to Colombo"
    ],
    price: 500, // Price per person in EUR
    rating: 4.9,
    reviews: 132,
    image: "https://images.unsplash.com/photo-1582972236019-ea9e5d8379a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
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
    title: "Hill Country & Coastal Explorer",
    duration: "10 Days",
    destinations: ["Colombo", "Kandy", "Nuwara Eliya", "Haputale", "Ohiya", "Horton Plains", "Hikkaduwa"],
    itinerary: [
      "Day 1: Arrive in Colombo, travel to Kandy (overnight)",
      "Day 2-3: Nuwara Eliya (visit Hakgala Gardens & tea plantations)",
      "Day 4: Haputale (visit Edison Bungalow & Calipso)",
      "Day 5: Ohiya (overnight)",
      "Day 6-7: Horton Plains (hike to World's End)",
      "Day 8-9: Hikkaduwa/Waskaduwa beach stay with beach party",
      "Day 10: Return to Colombo"
    ],
    price: 500, // Price per person in EUR
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1564501049415-61a6a4b5d14a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
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
    title: "Wildlife & Beach Combo",
    duration: "6 Days",
    destinations: ["Colombo", "Yala", "Mirissa", "Galle"],
    itinerary: [
      "Day 1: Arrive in Colombo, travel to Yala (overnight)",
      "Day 2: Morning and evening safaris in Yala",
      "Day 3: Travel to Mirissa (overnight)",
      "Day 4: Whale watching & beach time with beach party",
      "Day 5: Galle Fort exploration",
      "Day 6: Return to Colombo"
    ],
    price: 500, // Price per person in EUR
    rating: 4.7,
    reviews: 115,
    image: "https://images.unsplash.com/photo-1501534131-95d4e830200e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "adventure",
    featured: true,
    highlights: [
      "Yala National Park safari with leopard spotting",
      "Whale watching tour in Mirissa",
      "Galle Fort UNESCO World Heritage Site",
      "Beach relaxation time with beach party",
      "Wildlife photography opportunities"
    ],
    specialDinners: [
      "Day 2: Jungle BBQ dinner near Yala",
      "Day 4: Seafood dinner in Mirissa"
    ]
  },
  {
    id: 4,
    title: "Wellness & Ayurveda Retreat",
    duration: "5 Days",
    destinations: ["Colombo", "Bentota", "Ambalangoda"],
    itinerary: [
      "Day 1: Arrive in Colombo, transfer to Bentota (overnight)",
      "Day 2-4: Daily Ayurveda treatments & yoga sessions",
      "Day 5: Visit mask museum in Ambalangoda, return to Colombo"
    ],
    price: 500, // Price per person in EUR
    rating: 4.9,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1606825004533-dbfb13be4cb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "wellness",
    featured: true,
    highlights: [
      "Daily yoga sessions at sunrise",
      "Personalized Ayurvedic treatments",
      "Meditation sessions by the beach",
      "Healthy organic meals tailored to your dosha",
      "Traditional mask museum visit"
    ],
    specialDinners: [
      "Day 2: Healthy gourmet dinner",
      "Day 4: Ayurvedic special dinner"
    ]
  },
  {
    id: 5,
    title: "Ancient Cities & Cultural Experience",
    duration: "8 Days",
    destinations: ["Colombo", "Anuradhapura", "Polonnaruwa", "Sigiriya", "Kandy"],
    itinerary: [
      "Day 1: Arrive in Colombo, travel to Anuradhapura (overnight)",
      "Day 2: Ancient city tour with cultural show at night",
      "Day 3: Travel to Polonnaruwa (overnight)",
      "Day 4: Ancient city exploration",
      "Day 5: Travel to Sigiriya (overnight with night function)",
      "Day 6: Climb Sigiriya Rock, travel to Kandy",
      "Day 7: Kandy cultural tour with temple visit",
      "Day 8: Return to Colombo"
    ],
    price: 500, // Price per person in EUR
    rating: 4.6,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cultural",
    featured: true,
    highlights: [
      "Ancient city exploration",
      "Cultural shows and night functions",
      "Sigiriya Rock climb",
      "Temple of the Tooth relic in Kandy",
      "Traditional dance performances"
    ],
    specialDinners: [
      "Day 2: Traditional Sri Lankan feast in Anuradhapura",
      "Day 5: Sigiriya special BBQ dinner"
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

  const categories = ["all", "cultural", "adventure", "wellness"];

  const openPackageDetails = (pkg) => {
    setSelectedPackage(pkg);
  };

  const closePackageDetails = () => {
    setSelectedPackage(null);
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'adventure': return <FaHiking />;
      case 'cultural': return <FaMapMarkerAlt />;
      case 'wellness': return <FaSpa />;
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
            Discover Sri Lanka
          </HeroTitle>
          <HeroSubtitle>
            Explore our carefully curated travel packages
          </HeroSubtitle>
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
            <InclusionTitle>Special Dinners</InclusionTitle>
            <InclusionText>2 special dinners per package (BBQ or seafood depending on location)</InclusionText>
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

          <PriceFilter>
            <FilterLabel>Max Price: €{priceRange}</FilterLabel>
            <PriceSlider
              type="range"
              min="100"
              max="1000"
              step="50"
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
            />
            <PriceRange>
              <span>€100</span>
              <span>€1000</span>
            </PriceRange>
          </PriceFilter>
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
                <PackageImage src={pkg.image} alt={pkg.title} />
                <PackageContent>
                  <PackageHeader>
                    <PackageTitle>{pkg.title}</PackageTitle>
                    <PackagePrice>€{pkg.price}<span>/person</span></PackagePrice>
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
                  </PackageDetails>
                  
                  <PackageRating>
                    <Stars>
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} color={i < Math.floor(pkg.rating) ? "#FFD700" : "#ddd"} />
                      ))}
                    </Stars>
                    <RatingText>{pkg.rating} ({pkg.reviews} reviews)</RatingText>
                  </PackageRating>
                  
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
            
            <ModalImage src={selectedPackage.image} alt={selectedPackage.title} />
            
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
            </ModalDescription>
            
            <ModalActions>
              <ModalButton primary>Book Now</ModalButton>
              <ModalButton onClick={closePackageDetails}>Close</ModalButton>
            </ModalActions>
          </ModalContent>
        </ModalOverlay>
      )}

      <NewsletterSection>
        <NewsletterContent>
          <NewsletterTitle>Ready for Your Sri Lankan Adventure?</NewsletterTitle>
          <NewsletterText>Contact us to customize your perfect itinerary</NewsletterText>
          <NewsletterForm>
            <NewsletterInput type="email" placeholder="Your email address" />
            <NewsletterButton>Get a Quote</NewsletterButton>
          </NewsletterForm>
        </NewsletterContent>
      </NewsletterSection>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  color: #333;
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
                url(${packagesImage});
    background-size: cover;
    background-position: center;
    filter: blur(4px) brightness(0.9);
    z-index: 1;
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
    font-size: 5rem;
  }

  @media (max-width: 767px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 300;
  max-width: 700px;
  margin: 1rem auto 0;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
`;

const PackageDetailsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  position: relative;
  padding-bottom: 1rem;

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
  }
`;

const InclusionCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    margin-bottom: 1rem;
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
`;

const NoteText = styled.p`
  margin: 0;
  color: #555;
`;

const ImportantNote = styled.p`
  background-color: #fff8e1;
  padding: 1rem;
  border-left: 4px solid #ffc107;
  margin: 1.5rem 0 0;
  color: #5d4037;
`;

// ... (keep all your existing styled components from previous code)




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
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
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

const PriceFilter = styled.div`
  flex: 1;
  min-width: 300px;
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #444;
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

  &:hover {
    background-color: ${props => props.active ? 'var(--primaryColor)' : '#e0e0e0'};
  }

  svg {
    font-size: 0.9rem;
  }
`;

const PriceSlider = styled.input`
  width: 100%;
  height: 8px;
  -webkit-appearance: none;
  background: #ddd;
  border-radius: 5px;
  outline: none;
  margin: 1rem 0 0.5rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: var(--primaryColor);
    border-radius: 50%;
    cursor: pointer;
  }
`;

const PriceRange = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #777;
`;

const PackagesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
  height: 200px;
  object-fit: cover;
`;

const PackageContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
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
`;

const PackagePrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primaryColor);
  margin-left: 1rem;

  span {
    font-size: 0.8rem;
    color: #777;
    font-weight: 400;
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

  svg {
    margin-right: 0.5rem;
    color: var(--primaryColor);
    flex-shrink: 0;
  }
`;

const PackageRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Stars = styled.div`
  margin-right: 0.5rem;
  display: flex;
`;

const RatingText = styled.span`
  font-size: 0.9rem;
  color: #777;
`;

const PackageButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: var(--primaryColor);
  color: white;
  border: none;
  border-radius: 0 0 8px 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;

  &:hover {
    background-color: #333;
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
`;

const NewsletterContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const NewsletterTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
`;

const NewsletterText = styled.p`
  color: #666;
  margin-bottom: 2rem;
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
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #777;
  z-index: 10;

  &:hover {
    color: #333;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ModalHeader = styled.div`
  padding: 1.5rem 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  color: #333;
  flex: 1;
`;

const ModalPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primaryColor);
  margin-left: 1rem;

  span {
    font-size: 1rem;
    color: #777;
    font-weight: 400;
  }
`;

const ModalDetails = styled.div`
  padding: 0 1.5rem;
  margin: 1rem 0;
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
`;

const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 1.5rem 1.5rem;
  justify-content: flex-end;
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

  &:hover {
    background-color: ${props => props.primary ? '#333' : '#f5f5f5'};
    border-color: ${props => props.primary ? '#333' : '#ccc'};
  }
`;

export default CurrentPackages;