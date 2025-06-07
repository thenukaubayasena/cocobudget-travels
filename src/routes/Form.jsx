import React, { useState } from "react";
import styled from "styled-components";
import { FaUser, FaCalendarAlt, FaUsers, FaPhone, FaEnvelope, FaChild, FaInfoCircle } from "react-icons/fa";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    package: "",
    tripDate: "",
    message: "",
    interests: [],
    travelers: [{ name: "", age: "" }]
  });

  const packages = [
    "Cultural Triangle & East Coast Adventure",
    "Hill Country & Coastal Explorer",
    "Wildlife & Beach Combo",
    "Wellness & Ayurveda Retreat",
    "Ancient Cities & Cultural Experience"
  ];

  const interests = [
    "Beaches",
    "Wildlife",
    "History",
    "Culture",
    "Adventure",
    "Wellness",
    "Photography",
    "Food"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTravelerChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTravelers = [...formData.travelers];
    updatedTravelers[index] = { ...updatedTravelers[index], [name]: value };
    setFormData(prev => ({ ...prev, travelers: updatedTravelers }));
  };

  const addTraveler = () => {
    setFormData(prev => ({
      ...prev,
      travelers: [...prev.travelers, { name: "", age: "" }]
    }));
  };

  const removeTraveler = (index) => {
    if (formData.travelers.length > 1) {
      const updatedTravelers = formData.travelers.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, travelers: updatedTravelers }));
    }
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => {
      if (prev.interests.includes(interest)) {
        return {
          ...prev,
          interests: prev.interests.filter(i => i !== interest)
        };
      } else {
        return {
          ...prev,
          interests: [...prev.interests, interest]
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // which would then email it to you
    console.log("Form submitted:", formData);
    alert("Thank you for your booking! We'll contact you shortly.");
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <SectionTitle>Book Your Sri Lanka Adventure</SectionTitle>
        
        <FormSection>
          <SectionHeader>
            <FaUser />
            <h3>Lead Traveler Information</h3>
          </SectionHeader>
          <InputGroup>
            <label>Full Name*</label>
            <Input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
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
              required 
            />
          </InputGroup>
          <InputGroup>
            <label>Mobile Number*</label>
            <Input 
              type="tel" 
              name="mobile" 
              value={formData.mobile} 
              onChange={handleChange} 
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
              required 
            />
          </InputGroup>
        </FormSection>

        <FormSection>
          <SectionHeader>
            <FaCalendarAlt />
            <h3>Trip Details</h3>
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
                <option key={i} value={pkg}>{pkg}</option>
              ))}
            </Select>
          </InputGroup>
          <InputGroup>
            <label>Planned Trip Date*</label>
            <Input 
              type="date" 
              name="tripDate" 
              value={formData.tripDate} 
              onChange={handleChange} 
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
          <InputGroup>
            <label>Special Requests/Message</label>
            <TextArea 
              name="message" 
              value={formData.message} 
              onChange={handleChange}
              rows="4"
            />
          </InputGroup>
        </FormSection>

        <FormSection>
          <SectionHeader>
            <FaUsers />
            <h3>Travel Companions</h3>
          </SectionHeader>
          {formData.travelers.map((traveler, index) => (
            <TravelerGroup key={index}>
              <h4>Person {index + 1}</h4>
              <InputGroup>
                <label>Full Name*</label>
                <Input 
                  type="text" 
                  name="name" 
                  value={traveler.name} 
                  onChange={(e) => handleTravelerChange(index, e)} 
                  required 
                />
              </InputGroup>
              <InputGroup>
                <label>Age*</label>
                <Input 
                  type="number" 
                  name="age" 
                  value={traveler.age} 
                  onChange={(e) => handleTravelerChange(index, e)} 
                  required 
                />
              </InputGroup>
              {formData.travelers.length > 1 && (
                <RemoveButton type="button" onClick={() => removeTraveler(index)}>
                  Remove
                </RemoveButton>
              )}
            </TravelerGroup>
          ))}
          <AddButton type="button" onClick={addTraveler}>
            + Add Another Traveler
          </AddButton>
        </FormSection>

        <ImportantNote>
          <FaInfoCircle />
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
                <li>💳 Credit/Debit Card (Visa/Mastercard/Amex)</li>
                <li>💼 Bank Transfer to our Sri Lankan account</li>
                <li>🌍 Wise (TransferWise) for international transfers</li>
                <li>🏦 Payment on Arrival (remaining balance)</li>
              </ul>
              <p>We'll send payment instructions after booking confirmation.</p>
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

        <SubmitButton type="submit">Submit Booking Request</SubmitButton>
      </FormContainer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
`;

const FormContainer = styled.form`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: var(--primaryColor);
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const FormSection = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  color: var(--primaryColor);

  h3 {
    margin: 0;
    font-size: 1.3rem;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #555;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: var(--primaryColor);
    box-shadow: 0 0 0 2px rgba(0, 100, 0, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  background-color: white;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
`;

const InterestContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const InterestOption = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${props => props.selected ? 'var(--primaryColor)' : '#f0f0f0'};
  color: ${props => props.selected ? 'white' : '#555'};
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s;
`;

const TravelerGroup = styled.div`
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  position: relative;

  h4 {
    margin-top: 0;
    color: #555;
  }
`;

const AddButton = styled.button`
  background-color: var(--primaryColor);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  transition: all 0.3s;

  &:hover {
    background-color: #005500;
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #ff4444;
  color: white;
  border: none;
  padding: 0.3rem 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
`;

const ImportantNote = styled.div`
  background-color: #fff8e1;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  svg {
    color: #ff9800;
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  ul {
    padding-left: 1.5rem;
    margin: 0.5rem 0 0;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const PaymentSection = styled.div`
  margin: 2rem 0;

  h3 {
    color: var(--primaryColor);
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PaymentCard = styled.div`
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #eee;

  h4 {
    margin-top: 0;
    color: #333;
  }

  ul {
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: var(--primaryColor);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 1rem;

  &:hover {
    background-color: #005500;
  }
`;

export default Form;