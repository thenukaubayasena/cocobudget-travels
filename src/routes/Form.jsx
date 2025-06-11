import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaUser, FaCalendarAlt, FaUsers, FaPhone, FaEnvelope, FaChild, FaInfoCircle, FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import formImage from '../assets/homeAssets/form.jpg';

const Form = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    package: "",
    tripDate: "",
    message: "",
    interests: [],
    travelers: [{ name: "", age: "" }],
  });

  const packages = [
    "Cultural Triangle & East Coast Adventure (Package 1)",
    "Hill Country & Coastal Explorer (Package 2)",
    "Southern Coast Beach Break (Package 3)",
    "Hill Country & Highlands Escape (Package 4)",
    "Wildlife & Waves Explorer (Package 5)",
  ];

  const interests = [
    "Beaches",
    "Wildlife",
    "History",
    "Culture",
    "Adventure",
    "Wellness",
    "Photography",
    "Food",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTravelerChange = (index, e) => {
    const { name, value } = e.target;
    const field = name.split("_")[1]; // Use underscore to extract 'name' or 'age'
    const updatedTravelers = [...formData.travelers];
    updatedTravelers[index] = { ...updatedTravelers[index], [field]: value };
    setFormData((prev) => ({ ...prev, travelers: updatedTravelers }));
  };

  const addTraveler = () => {
    setFormData((prev) => ({
      ...prev,
      travelers: [...prev.travelers, { name: "", age: "" }],
    }));
  };

  const removeTraveler = (index) => {
    if (formData.travelers.length > 1) {
      const updatedTravelers = formData.travelers.filter((_, i) => i !== index);
      setFormData((prev) => ({ ...prev, travelers: updatedTravelers }));
    }
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => {
      if (prev.interests.includes(interest)) {
        return {
          ...prev,
          interests: prev.interests.filter((i) => i !== interest),
        };
      } else {
        return {
          ...prev,
          interests: [...prev.interests, interest],
        };
      }
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Add date, time, and travelers_data to form
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const time = currentDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const formElement = form.current;
    const dateInput = document.createElement("input");
    dateInput.type = "hidden";
    dateInput.name = "date";
    dateInput.value = date;
    formElement.appendChild(dateInput);

    const timeInput = document.createElement("input");
    timeInput.type = "hidden";
    timeInput.name = "time";
    timeInput.value = time;
    formElement.appendChild(timeInput);

    const interestsInput = document.createElement("input");
    interestsInput.type = "hidden";
    interestsInput.name = "interests";
    interestsInput.value = formData.interests.join(",");
    formElement.appendChild(interestsInput);

    const travelersInput = document.createElement("input");
    travelersInput.type = "hidden";
    travelersInput.name = "travelers_data";
    travelersInput.value = JSON.stringify(formData.travelers);
    formElement.appendChild(travelersInput);

    emailjs
      .sendForm("service_ifeol5e", "template_1392er3", form.current, "PkmG2dA-xVVupW-YC")
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for your booking! We'll contact you shortly.");
          setFormData({
            name: "",
            age: "",
            mobile: "",
            email: "",
            package: "",
            tripDate: "",
            message: "",
            interests: [],
            travelers: [{ name: "", age: "" }],
          });
          // Clean up hidden inputs
          formElement.removeChild(dateInput);
          formElement.removeChild(timeInput);
          formElement.removeChild(interestsInput);
          formElement.removeChild(travelersInput);
        },
        (error) => {
          console.log(error.text);
          alert("There was an error submitting your booking. Please try again.");
          // Clean up hidden inputs on error
          formElement.removeChild(dateInput);
          formElement.removeChild(timeInput);
          formElement.removeChild(interestsInput);
          formElement.removeChild(travelersInput);
        }
      );
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
            Book Your Dream Trip
          </HeroTitle>
        </HeroContent>
      </HeroSection>
      
      <FormContainer ref={form} onSubmit={sendEmail}>
        <FormIntro>
          <p>Fill out this form to reserve your spot on an unforgettable journey through Sri Lanka. Our team will contact you within 24 hours to confirm your booking.</p>
        </FormIntro>

        <FormSection>
          <SectionHeader>
            <IconWrapper>
              <FaUser />
            </IconWrapper>
            <div>
              <h3>Lead Traveler Information</h3>
              <p>Primary contact for this booking</p>
            </div>
          </SectionHeader>
          <FormRow>
            <InputGroup style={{flex: 2}}>
              <label>Full Name*</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                required
              />
            </InputGroup>
            <InputGroup>
              <label>Age*</label>
              <Input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="30"
                min="18"
                required
              />
            </InputGroup>
          </FormRow>
          <FormRow>
            <InputGroup>
              <label>Mobile Number*</label>
              <Input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+358 77 123 4567"
                required
              />
            </InputGroup>
            <InputGroup>
              <label>Email*</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </InputGroup>
          </FormRow>
        </FormSection>

        <FormSection>
          <SectionHeader>
            <IconWrapper>
              <FaCalendarAlt />
            </IconWrapper>
            <div>
              <h3>Trip Details</h3>
              <p>Tell us about your travel plans</p>
            </div>
          </SectionHeader>
          <InputGroup>
            <label>Select Package*</label>
            <Select
              name="package"
              value={formData.package}
              onChange={handleChange}
              required
            >
              <option value="">-- Select a Package --</option>
              {packages.map((pkg, i) => (
                <option key={i} value={pkg}>
                  {pkg}
                </option>
              ))}
            </Select>
          </InputGroup>
          <FormRow>
            <InputGroup>
              <label>Planned Trip Date*</label>
              <Input
                type="date"
                name="tripDate"
                value={formData.tripDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </InputGroup>
            <InputGroup>
              <label>Your Interests</label>
              <InterestContainer>
                {interests.map((interest, i) => (
                  <InterestOption
                    key={i}
                    selected={formData.interests.includes(interest)}
                    onClick={() => handleInterestChange(interest)}
                  >
                    {interest}
                  </InterestOption>
                ))}
              </InterestContainer>
            </InputGroup>
          </FormRow>
          <InputGroup>
            <label>Special Requests/Message</label>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Dietary restrictions, accessibility needs, etc."
              rows="4"
            />
          </InputGroup>
        </FormSection>

        <FormSection>
          <SectionHeader>
            <IconWrapper>
              <FaUsers />
            </IconWrapper>
            <div>
              <h3>Travel Companions</h3>
              <p>Add information for other travelers in your group</p>
            </div>
          </SectionHeader>
          {formData.travelers.map((traveler, index) => (
            <TravelerGroup key={index}>
              <TravelerHeader>
                <h4>Person {index + 1}</h4>
                {formData.travelers.length > 1 && (
                  <RemoveButton
                    type="button"
                    onClick={() => removeTraveler(index)}
                  >
                    <FaMinus /> Remove
                  </RemoveButton>
                )}
              </TravelerHeader>
              <FormRow>
                <InputGroup style={{flex: 2}}>
                  <label>Full Name*</label>
                  <Input
                    type="text"
                    name={`traveler_name_${index}`}
                    value={traveler.name}
                    onChange={(e) => handleTravelerChange(index, e)}
                    placeholder="Traveler name"
                    required
                  />
                </InputGroup>
                <InputGroup>
                  <label>Age*</label>
                  <Input
                    type="number"
                    name={`traveler_age_${index}`}
                    value={traveler.age}
                    onChange={(e) => handleTravelerChange(index, e)}
                    placeholder="Age"
                    min="0"
                    required
                  />
                </InputGroup>
              </FormRow>
            </TravelerGroup>
          ))}
          <AddButton type="button" onClick={addTraveler}>
            <FaPlus /> Add Another Traveler
          </AddButton>
        </FormSection>

        <ImportantNote>
          <IconWrapper>
            <FaInfoCircle />
          </IconWrapper>
          <div>
            <p><strong>Important Information:</strong></p>
            <ul>
              <li>Minimum 4 persons required for booking (€500 per person)</li>
              <li>Children below 4 years travel free of charge</li>
              <li>Children above 5 years are charged full price</li>
              <li>If you register alone, you'll be merged with other travelers to form a group</li>
            </ul>
          </div>
        </ImportantNote>

        <PaymentSection>
          <h3>Secure Payment Methods</h3>
          <PaymentOptions>
            <PaymentCard>
              <h4>Payment Options</h4>
              <ul>
                <li><PaymentIcon>💳</PaymentIcon> Credit/Debit Card (Visa/Mastercard/Amex)</li>
                <li><PaymentIcon>🏦</PaymentIcon> Bank Transfer to our Sri Lankan account</li>
                <li><PaymentIcon>🌍</PaymentIcon> Wise (TransferWise) for international transfers</li>
                <li><PaymentIcon>✈️</PaymentIcon> Payment on Arrival (remaining balance)</li>
              </ul>
              <PaymentNote>We'll send payment instructions after booking confirmation.</PaymentNote>
            </PaymentCard>
            <PaymentCard>
              <h4>Payment Policy</h4>
              <ul>
                <li>€150 non-refundable deposit required</li>
                <li>Remaining €350 payable on arrival</li>
                <li>All payments processed securely</li>
                <li>Registered with SLTDA and Sri Lanka Registrar of Companies</li>
              </ul>
            </PaymentCard>
          </PaymentOptions>
        </PaymentSection>

        <SubmitContainer>
          <SubmitButton type="submit">Submit Booking Request</SubmitButton>
          <FormFooter>
            By submitting this form, you agree to our Terms of Service and Privacy Policy.
          </FormFooter>
        </SubmitContainer>
      </FormContainer>
    </Container>
  );
};

// Enhanced Styled Components
const Container = styled.div`
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  color: #333;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  height: 40vh;
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
                url(${formImage});
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

const FormContainer = styled.form`
  max-width: 900px;
  margin: 2rem auto 2rem; /* Increased top margin to create gap */
  background: white;
  padding: 3rem 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
`;


const FormIntro = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  color: #555;
  font-size: 1.05rem;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #2a6b46;
  margin-bottom: 1rem;
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const FormSection = styled.div`
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eaeff2;

  &:last-child {
    border-bottom: none;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;

  h3 {
    margin: 0 0 0.25rem 0;
    font-size: 1.4rem;
    color: #2a6b46;
  }

  p {
    margin: 0;
    color: #6c757d;
    font-size: 0.95rem;
  }
`;

const IconWrapper = styled.div`
  background: #e8f4ec;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2a6b46;
  flex-shrink: 0;
`;

const FormRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const InputGroup = styled.div`
  flex: 1;
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #495057;
    font-size: 0.95rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid #d1d7dc;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s;
  background-color: #fbfdfe;

  &:focus {
    outline: none;
    border-color: #2a6b46;
    box-shadow: 0 0 0 3px rgba(42, 107, 70, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid #d1d7dc;
  border-radius: 6px;
  font-size: 1rem;
  background-color: #fbfdfe;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;

  &:focus {
    outline: none;
    border-color: #2a6b46;
    box-shadow: 0 0 0 3px rgba(42, 107, 70, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid #d1d7dc;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  background-color: #fbfdfe;

  &:focus {
    outline: none;
    border-color: #2a6b46;
    box-shadow: 0 0 0 3px rgba(42, 107, 70, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const InterestContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const InterestOption = styled.div`
  padding: 0.5rem 1.2rem;
  background-color: ${(props) =>
    props.selected ? "#2a6b46" : "#f1f3f5"};
  color: ${(props) => (props.selected ? "white" : "#495057")};
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
  border: 1px solid ${(props) =>
    props.selected ? "#2a6b46" : "#d1d7dc"};

  &:hover {
    background-color: ${(props) =>
      props.selected ? "#23583b" : "#e9ecef"};
  }
`;

const TravelerGroup = styled.div`
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid #e2e8f0;
`;

const TravelerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h4 {
    margin: 0;
    color: #2a6b46;
    font-size: 1.1rem;
  }
`;

const AddButton = styled.button`
  background-color: #2a6b46;
  color: white;
  border: none;
  padding: 0.9rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  transition: all 0.3s;
  font-size: 0.95rem;

  &:hover {
    background-color: #23583b;
  }
`;

const RemoveButton = styled.button`
  background-color: #f8f9fa;
  color: #dc3545;
  border: 1px solid #f1f3f5;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s;

  &:hover {
    background-color: #f1f3f5;
    border-color: #e9ecef;
  }
`;

const ImportantNote = styled.div`
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2.5rem 0;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  border-left: 4px solid #2a6b46;

  ul {
    padding-left: 1.5rem;
    margin: 0.5rem 0 0;
  }

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  strong {
    color: #2a6b46;
  }
`;

const PaymentSection = styled.div`
  margin: 3rem 0;

  h3 {
    color: #2a6b46;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.6rem;
  }
`;

const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PaymentCard = styled.div`
  background: #f8f9fa;
  padding: 1.75rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;

  h4 {
    margin-top: 0;
    margin-bottom: 1.25rem;
    color: #2a6b46;
    font-size: 1.2rem;
  }

  ul {
    padding-left: 1.5rem;
    margin: 0;
  }

  li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const PaymentIcon = styled.span`
  margin-right: 0.5rem;
`;

const PaymentNote = styled.p`
  margin-top: 1.5rem;
  color: #6c757d;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const SubmitContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

const SubmitButton = styled.button`
  background-color: #2a6b46;
  color: white;
  border: none;
  padding: 1.1rem 2rem;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: block;

  &:hover {
    background-color: #23583b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(42, 107, 70, 0.2);
  }
`;

const FormFooter = styled.div`
  margin-top: 1.5rem;
  color: #6c757d;
  font-size: 0.85rem;

  a {
    color: #2a6b46;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Form;