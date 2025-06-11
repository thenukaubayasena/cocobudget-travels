import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaUser, FaCalendarAlt, FaUsers, FaPhone, FaEnvelope, FaInfoCircle, FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
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
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const packages = [
    "Cultural Triangle & East Coast Adventure (Package 1)",
    "Hill Country & Coastal Explorer (Package 2)",
    "Southern Coast Beach Break (Package 3)",
    "Hill Country & Highlands Escape (Package 4)",
    "Wildlife & Waves Explorer (Package 5)",
  ];

  const interests = [
    { name: "Beaches", description: "Relax on pristine sandy shores" },
    { name: "Wildlife", description: "Explore national parks and safaris" },
    { name: "History", description: "Discover ancient ruins and temples" },
    { name: "Culture", description: "Immerse in local traditions" },
    { name: "Adventure", description: "Hiking, surfing, and more" },
    { name: "Wellness", description: "Ayurveda and spa retreats" },
    { name: "Photography", description: "Capture stunning landscapes" },
    { name: "Food", description: "Savor authentic Sri Lankan cuisine" },
  ];

  const validateField = (name, value, index = null) => {
    let error = "";
    if (name === "name" && !value.trim()) error = "Full name is required";
    if (name === "age" && (!value || value < 18)) error = "Age must be 18 or older";
    if (name === "mobile" && !/^\+\d{1,3}\s\d{1,14}$/.test(value)) error = "Enter a valid phone number (e.g., +358 77 123 4567)";
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Enter a valid email address";
    if (name === "package" && !value) error = "Please select a package";
    if (name === "tripDate" && !value) error = "Please select a trip date";
    if (name === `traveler_name_${index}` && !value.trim()) error = "Traveler name is required";
    if (name === `traveler_age_${index}` && (!value || value < 0)) error = "Age must be 0 or older";
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleTravelerChange = (index, e) => {
    const { name, value } = e.target;
    const field = name.includes("name") ? "name" : "age";
    const updatedTravelers = [...formData.travelers];
    updatedTravelers[index] = { ...updatedTravelers[index], [field]: value };
    setFormData((prev) => ({ ...prev, travelers: updatedTravelers }));
    setErrors((prev) => ({ ...prev, [`${field}_${index}`]: validateField(name, value, index) }));
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => {
      const updatedInterests = prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: updatedInterests };
    });
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
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[`name_${index}`];
        delete newErrors[`age_${index}`];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "travelers" && key !== "interests" && key !== "message") {
        newErrors[key] = validateField(key, formData[key]);
      }
    });
    formData.travelers.forEach((traveler, index) => {
      newErrors[`name_${index}`] = validateField(`traveler_name_${index}`, traveler.name, index);
      newErrors[`age_${index}`] = validateField(`traveler_age_${index}`, traveler.age, index);
    });
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Please fix the errors in the form before submitting.");
      return;
    }

    setIsSubmitting(true);
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    const time = currentDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });

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
          setErrors({});
          formElement.removeChild(dateInput);
          formElement.removeChild(timeInput);
          formElement.removeChild(interestsInput);
          formElement.removeChild(travelersInput);
        },
        (error) => {
          console.log(error.text);
          alert("There was an error submitting your booking. Please try again.");
          formElement.removeChild(dateInput);
          formElement.removeChild(timeInput);
          formElement.removeChild(interestsInput);
          formElement.removeChild(travelersInput);
        }
      )
      .finally(() => setIsSubmitting(false));
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
            Book Your Sri Lankan Adventure
          </HeroTitle>
        </HeroContent>
      </HeroSection>

      <FormContainer ref={form} onSubmit={sendEmail}>
        <FormIntro>
          <p>Reserve your spot for an unforgettable journey through Sri Lanka. Our team will contact you within 24 hours to confirm your booking.</p>
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
            <InputGroup style={{ flex: 2 }}>
              <label htmlFor="name">Full Name*</label>
              <Input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                required
                aria-label="Lead traveler full name"
                hasError={!!errors.name}
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </InputGroup>
            <InputGroup>
              <label htmlFor="age">Age*</label>
              <Input
                id="age"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="30"
                min="18"
                required
                aria-label="Lead traveler age"
                hasError={!!errors.age}
              />
              {errors.age && <ErrorMessage>{errors.age}</ErrorMessage>}
            </InputGroup>
          </FormRow>
          <FormRow>
            <InputGroup>
              <label htmlFor="mobile">Mobile Number*</label>
              <Input
                id="mobile"
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+358 77 123 4567"
                required
                aria-label="Lead traveler mobile number"
                hasError={!!errors.mobile}
              />
              {errors.mobile && <ErrorMessage>{errors.mobile}</ErrorMessage>}
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">Email*</label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                aria-label="Lead traveler email"
                hasError={!!errors.email}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
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
            <label htmlFor="package">Select Package*</label>
            <Select
              id="package"
              name="package"
              value={formData.package}
              onChange={handleChange}
              required
              aria-label="Select travel package"
              hasError={!!errors.package}
            >
              <option value="">-- Select a Package --</option>
              {packages.map((pkg, i) => (
                <option key={i} value={pkg}>
                  {pkg}
                </option>
              ))}
            </Select>
            {errors.package && <ErrorMessage>{errors.package}</ErrorMessage>}
          </InputGroup>
          <FormRow>
            <InputGroup>
              <label htmlFor="tripDate">Planned Trip Date*</label>
              <Input
                id="tripDate"
                type="date"
                name="tripDate"
                value={formData.tripDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
                aria-label="Planned trip date"
                hasError={!!errors.tripDate}
              />
              {errors.tripDate && <ErrorMessage>{errors.tripDate}</ErrorMessage>}
            </InputGroup>
            <InputGroup>
              <label>Your Interests</label>
              <InterestContainer>
                {interests.map((interest, i) => (
                  <Tooltip key={i} title={interest.description}>
                    <InterestOption
                      selected={formData.interests.includes(interest.name)}
                      onClick={() => handleInterestChange(interest.name)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {interest.name}
                    </InterestOption>
                  </Tooltip>
                ))}
              </InterestContainer>
            </InputGroup>
          </FormRow>
          <InputGroup>
            <label htmlFor="message">Special Requests/Message</label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Dietary restrictions, accessibility needs, etc."
              rows="4"
              aria-label="Special requests or message"
            />
          </InputGroup>
        </FormSection>

        <FormSection>
          <SectionHeader>
            <IconWrapper>
              <FaUsers />
            </IconWrapper>
            <div>
              <h3>Travel Companions ({formData.travelers.length})</h3>
              <p>Add information for other travelers in your group</p>
            </div>
          </SectionHeader>
          <AnimatePresence>
            {formData.travelers.map((traveler, index) => (
              <TravelerGroup
                key={index}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <TravelerHeader>
                  <h4>Person {index + 1}</h4>
                  {formData.travelers.length > 1 && (
                    <RemoveButton
                      type="button"
                      onClick={() => removeTraveler(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaMinus /> Remove
                    </RemoveButton>
                  )}
                </TravelerHeader>
                <FormRow>
                  <InputGroup style={{ flex: 2 }}>
                    <label htmlFor={`traveler_name_${index}`}>Full Name*</label>
                    <Input
                      id={`traveler_name_${index}`}
                      type="text"
                      name={`traveler_name_${index}`}
                      value={traveler.name}
                      onChange={(e) => handleTravelerChange(index, e)}
                      placeholder="Traveler name"
                      required
                      aria-label={`Traveler ${index + 1} full name`}
                      hasError={!!errors[`name_${index}`]}
                    />
                    {errors[`name_${index}`] && <ErrorMessage>{errors[`name_${index}`]}</ErrorMessage>}
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor={`traveler_age_${index}`}>Age*</label>
                    <Input
                      id={`traveler_age_${index}`}
                      type="number"
                      name={`traveler_age_${index}`}
                      value={traveler.age}
                      onChange={(e) => handleTravelerChange(index, e)}
                      placeholder="Age"
                      min="0"
                      required
                      aria-label={`Traveler ${index + 1} age`}
                      hasError={!!errors[`age_${index}`]}
                    />
                    {errors[`age_${index}`] && <ErrorMessage>{errors[`age_${index}`]}</ErrorMessage>}
                  </InputGroup>
                </FormRow>
              </TravelerGroup>
            ))}
          </AnimatePresence>
          <AddButton
            type="button"
            onClick={addTraveler}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
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
          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? "Submitting..." : "Submit Booking Request"}
          </SubmitButton>
          <FormFooter>
            By submitting this form, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
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
  background: linear-gradient(180deg, #f0f8ff 0%, #ffffff 100%);
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  height: 50vh;
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
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
                url(${formImage});
    background-size: cover;
    background-position: center;
    filter: blur(6px) brightness(0.9);
    z-index: 1;
    opacity: 0.95;
  }

  @media (max-width: 768px) {
    height: 40vh;
    padding: 0 2rem;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-family: "The Seasons", serif;
  font-weight: 300;
  margin: 0;
  line-height: 1.2;
  color: #ffffff;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 767px) {
    font-size: 2.8rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const FormContainer = styled.form`
  max-width: 1000px;
  margin: 3rem auto;
  background: white;
  padding: 3.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 2rem 1rem;
  }
`;

const FormIntro = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.7;
`;

const FormSection = styled.div`
  margin-bottom: 3rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #e6effa;

  &:last-child {
    border-bottom: none;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  margin-bottom: 2rem;

  h3 {
    margin: 0 0 0.3rem 0;
    font-size: 1.6rem;
    color: #1a4971;
  }

  p {
    margin: 0;
    color: #718096;
    font-size: 0.95rem;
  }
`;

const IconWrapper = styled.div`
  background: #e6f0fa;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a4971;
  flex-shrink: 0;
  font-size: 1.2rem;
`;

const FormRow = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.2rem;
  }
`;

const InputGroup = styled.div`
  flex: 1;
  margin-bottom: 1.2rem;

  label {
    display: block;
    margin-bottom: 0.6rem;
    font-weight: 600;
    color: #2d3748;
    font-size: 1rem;
  }
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${(props) => (props.hasError ? "#e53e3e" : "#cbd5e0")};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s;
  background-color: #f7fafc;

  &:focus {
    outline: none;
    border-color: #1a4971;
    box-shadow: 0 0 0 3px rgba(26, 73, 113, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
  }

  &[type="number"] {
    appearance: textfield;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${(props) => (props.hasError ? "#e53e3e" : "#cbd5e0")};
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f7fafc;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.2em;

  &:focus {
    outline: none;
    border-color: #1a4971;
    box-shadow: 0 0 0 3px rgba(26, 73, 113, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 140px;
  background-color: #f7fafc;

  &:focus {
    outline: none;
    border-color: #1a4971;
    box-shadow: 0 0 0 3px rgba(26, 73, 113, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  &:hover::after {
    content: "${(props) => props.title}";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #2d3748;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.85rem;
    white-space: nowrap;
    z-index: 10;
    margin-bottom: 0.5rem;
  }
`;

const InterestContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.75rem;
`;

const InterestOption = styled(motion.div)`
  padding: 0.6rem 1.4rem;
  background-color: ${(props) => (props.selected ? "#1a4971" : "#edf2f7")};
  color: ${(props) => (props.selected ? "white" : "#4a5568")};
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.2s;
  border: 1px solid ${(props) => (props.selected ? "#1a4971" : "#e2e8f0")};

  &:hover {
    background-color: ${(props) => (props.selected ? "#153e61" : "#e2e8f0")};
  }
`;

const TravelerGroup = styled(motion.div)`
  background: #f1f5f9;
  padding: 1.75rem;
  border-radius: 10px;
  margin-bottom: 1.75rem;
  border: 1px solid #e2e8f0;
`;

const TravelerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;

  h4 {
    margin: 0;
    color: #1a4971;
    font-size: 1.2rem;
  }
`;

const AddButton = styled(motion.button)`
  background-color: #1a4971;
  color: white;
  border: none;
  padding: 1rem 1.75rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 0.75rem;
  transition: all 0.3s;
  font-size: 1rem;

  &:hover {
    background-color: #153e61;
  }
`;

const RemoveButton = styled(motion.button)`
  background-color: #f7fafc;
  color: #e53e3e;
  border: 1px solid #e2e8f0;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;

  &:hover {
    background-color: #edf2f7;
    border-color: #e2e8f0;
  }
`;

const ErrorMessage = styled.div`
  color: #e53e3e;
  font-size: 0.85rem;
  margin-top: 0.3rem;
`;

const ImportantNote = styled.div`
  background-color: #f0f7ff;
  padding: 1.75rem;
  border-radius: 10px;
  margin: 3rem 0;
  display: flex;
  gap: 1.75rem;
  align-items: flex-start;
  border-left: 5px solid #1a4971;

  ul {
    padding-left: 1.75rem;
    margin: 0.75rem 0 0;
  }

  li {
    margin-bottom: 0.75rem;
    line-height: 1.7;
  }

  strong {
    color: #1a4971;
  }
`;

const PaymentSection = styled.div`
  margin: 3.5rem 0;

  h3 {
    color: #1a4971;
    margin-bottom: 2.5rem;
    text-align: center;
    font-size: 1.8rem;
  }
`;

const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PaymentCard = styled.div`
  background: #f0f7ff;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #e2e8f0;

  h4 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    color: #1a4971;
    font-size: 1.3rem;
  }

  ul {
    padding-left: 1.75rem;
    margin: 0;
  }

  li {
    margin-bottom: 1rem;
    line-height: 1.7;
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

const PaymentIcon = styled.span`
  margin-right: 0.75rem;
  font-size: 1.2rem;
`;

const PaymentNote = styled.p`
  margin-top: 1.75rem;
  color: #718096;
  font-size: 0.95rem;
  line-height: 1.7;
`;

const SubmitContainer = styled.div`
  margin-top: 3.5rem;
  text-align: center;
`;

const SubmitButton = styled(motion.button)`
  background-color: #1a4971;
  color: white;
  border: none;
  padding: 1.2rem 2.5rem;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: block;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};

  &:hover:not(:disabled) {
    background-color: #153e61;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(26, 73, 113, 0.2);
  }
`;

const FormFooter = styled.div`
  margin-top: 2rem;
  color: #718096;
  font-size: 0.9rem;

  a {
    color: #1a4971;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Form;