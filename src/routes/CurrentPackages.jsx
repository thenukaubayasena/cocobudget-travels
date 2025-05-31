import React, { useState } from "react";
import styled from "styled-components";
import { FaStar, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import packagesImage from '../assets/homeAssets/packages.jpg'; 


// Sample package data
const packagesData = [
  {
    id: 1,
    title: "Classic Sri Lanka Tour",
    duration: "7 Days",
    destinations: ["Colombo", "Kandy", "Nuwara Eliya", "Galle"],
    price: 850,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1654138012287-003b423de8ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cultural",
    featured: true
  },
  {
    id: 2,
    title: "Beach Paradise Getaway",
    duration: "5 Days",
    destinations: ["Mirissa", "Unawatuna", "Tangalle"],
    price: 650,
    rating: 4.7,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1552055569-d54ae89a11b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "beach",
    featured: true
  },
  {
    id: 3,
    title: "Wildlife Safari Adventure",
    duration: "4 Days",
    destinations: ["Yala National Park", "Udawalawe"],
    price: 720,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1501534131-95d4e830200e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "adventure",
    featured: true
  },
  {
    id: 4,
    title: "Tea Country Experience",
    duration: "3 Days",
    destinations: ["Nuwara Eliya", "Ella", "Haputale"],
    price: 480,
    rating: 4.6,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1709926701984-f5ae0099595f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cultural",
    featured: true
  },
  {
    id: 5,
    title: "Ancient Cities Explorer",
    duration: "6 Days",
    destinations: ["Anuradhapura", "Polonnaruwa", "Sigiriya", "Dambulla"],
    price: 790,
    rating: 4.7,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1656339953897-e5d10d261ff1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "historical",
    featured: true
  },
  {
    id: 6,
    title: "Wellness & Yoga Retreat",
    duration: "5 Days",
    destinations: ["Ahangama", "Weligama"],
    price: 920,
    rating: 4.9,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1606825004533-dbfb13be4cb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "wellness",
    featured: true
  },
  {
    id: 7,
    title: "Budget Hill Country Escape",
    duration: "3 Days",
    destinations: ["Kandy", "Nuwara Eliya"],
    price: 390,
    rating: 4.5,
    reviews: 65,
    image: "https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cultural",
    featured: false
  },
  {
    id: 8,
    title: "East Coast Budget Beaches",
    duration: "4 Days",
    destinations: ["Arugam Bay", "Passekudah"],
    price: 440,
    rating: 4.6,
    reviews: 72,
    image: "https://bluewatersarugambay.com/wp/wp-content/uploads/2019/09/Arugam-Bay-1024x683.jpg",
    category: "beach",
    featured: false
  },
  {
    id: 9,
    title: "Budget Wildlife Trek",
    duration: "2 Days",
    destinations: ["Wilpattu National Park"],
    price: 280,
    rating: 4.4,
    reviews: 51,
    image: "https://images.unsplash.com/photo-1621847473222-d85c022cbf07?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "adventure",
    featured: false
  },
  {
    id: 10,
    title: "Cultural Triangle on a Budget",
    duration: "5 Days",
    destinations: ["Sigiriya", "Dambulla", "Anuradhapura"],
    price: 510,
    rating: 4.6,
    reviews: 84,
    image: "https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "historical",
    featured: false
  }
];

const CurrentPackages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedPackage, setSelectedPackage] = useState(null); // Track selected package

  const filteredPackages = packagesData.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.destinations.some(d => d.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || pkg.category === selectedCategory;
    const matchesPrice = pkg.price <= priceRange;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const categories = ["all", "cultural", "beach", "adventure", "historical", "wellness"];

  // Function to open modal with package details
  const openPackageDetails = (pkg) => {
    setSelectedPackage(pkg);
  };

  // Function to close modal
  const closePackageDetails = () => {
    setSelectedPackage(null);
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
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </CategoryButton>
              ))}
            </CategoryButtons>
          </CategoryFilter>

          <PriceFilter>
            <FilterLabel>Max Price: ${priceRange}</FilterLabel>
            <PriceSlider
              type="range"
              min="100"
              max="1000"
              step="50"
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
            />
            <PriceRange>
              <span>$100</span>
              <span>$1000</span>
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
                    <PackagePrice>${pkg.price}<span>/person</span></PackagePrice>
                  </PackageHeader>
                  
                  <PackageDetails>
                    <DetailItem>
                      <FaMapMarkerAlt />
                      <span>{pkg.destinations.join(", ")}</span>
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
                  
                  {/* <PackageButton>View Details</PackageButton> */}
                </PackageContent>
                <PackageButton onClick={() => openPackageDetails(pkg)}>View Details</PackageButton>
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
              <ModalPrice>${selectedPackage.price}<span>/person</span></ModalPrice>
            </ModalHeader>
            
            <ModalDetails>
              <DetailItem>
                <FaMapMarkerAlt />
                <span><strong>Destinations:</strong> {selectedPackage.destinations.join(", ")}</span>
              </DetailItem>
              <DetailItem>
                <FaCalendarAlt />
                <span><strong>Duration:</strong> {selectedPackage.duration}</span>
              </DetailItem>
              <DetailItem>
                <FaUsers />
                <span><strong>Group Size:</strong> Up to 12 travelers</span>
              </DetailItem>
            </ModalDetails>
            
            <ModalDescription>
              <h4>Package Description</h4>
              <p>Experience the best of Sri Lanka with this carefully curated package. This tour includes visits to all major attractions, comfortable accommodations, and expert local guides.</p>
              
              <h4>Highlights</h4>
              <ul>
                <li>Guided tours of all major attractions</li>
                <li>Comfortable 3-4 star accommodations</li>
                <li>Local cuisine tasting experiences</li>
                <li>Transportation between destinations</li>
                <li>24/7 customer support</li>
              </ul>
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
          <NewsletterTitle>Want Special Offers?</NewsletterTitle>
          <NewsletterText>Subscribe to our newsletter for exclusive deals</NewsletterText>
          <NewsletterForm>
            <NewsletterInput type="email" placeholder="Your email address" />
            <NewsletterButton>Subscribe</NewsletterButton>
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

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 300;
  max-width: 700px;
  margin: 0 auto;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
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

  &:hover {
    background-color: ${props => props.active ? 'var(--primaryColor)' : '#e0e0e0'};
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
`;

const PackagePrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primaryColor);

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
  }
`;

const PackageRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Stars = styled.div`
  margin-right: 0.5rem;
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
  border-radius: 0px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

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
`;

const ModalPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primaryColor);

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
  }

  p, ul {
    line-height: 1.6;
    color: #555;
  }

  ul {
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: 0.5rem;
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