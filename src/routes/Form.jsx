import React, { useState } from "react";
import styled from "styled-components";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    travelDate: "",
    package: "",
    interests: [],
    message: "",
    travelCompanions: [{ name: "", age: "" }],
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCompanionChange = (index, e) => {
    const { name, value } = e.target;
    const companions = [...formData.travelCompanions];
    companions[index][name] = value;
    setFormData({ ...formData, travelCompanions: companions });
  };

  const addCompanion = () => {
    setFormData({
      ...formData,
      travelCompanions: [...formData.travelCompanions, { name: "", age: "" }],
    });
  };

  const handleInterestsChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((interest) => interest !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const totalMembers = formData.travelCompanions.length + 1; // Including primary traveler
    if (totalMembers < 4) {
      alert("A minimum of 4 members is required to book a package.");
      return;
    }

    try {
      // Placeholder for backend API call
      // await fetch("/api/submit-booking", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      setShowConfirmation(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your booking. Please try again.");
    }
  };

  return (
    <Container>
      <Title>Book Your Sri Lanka Adventure with Coco Budget Travels</Title>
      <FormWrapper onSubmit={handleSubmit}>
        <SectionTitle>Personal Information</SectionTitle>
        <Input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleInputChange}
          required
        />
        <Input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleInputChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <SectionTitle>Travel Details</SectionTitle>
        <Input
          type="date"
          name="travelDate"
          value={formData.travelDate}
          onChange={handleInputChange}
          required
        />
        <Select
          name="package"
          value={formData.package}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Package</option>
          <option value="beach">Beach Bliss (€500)</option>
          <option value="cultural">Cultural Explorer (€550)</option>
          <option value="adventure">Adventure Trek (€600)</option>
        </Select>

        <SectionTitle>Travel Companions</SectionTitle>
        <CompanionNote>
          Note: Minimum 4 members required for booking. Children under 4 travel
          free; children 5 and above are charged as adults.
        </CompanionNote>
        {formData.travelCompanions.map((companion, index) => (
          <CompanionRow key={index}>
            <Input
              type="text"
              name="name"
              placeholder={`Companion ${index + 1} Name`}
              value={companion.name}
              onChange={(e) => handleCompanionChange(index, e)}
              required
            />
            <Input
              type="number"
              name="age"
              placeholder={`Companion ${index + 1} Age`}
              value={companion.age}
              onChange={(e) => handleCompanionChange(index, e)}
              required
            />
          </CompanionRow>
        ))}
        <Button type="button" onClick={addCompanion}>
          Add Companion
        </Button>

        <SectionTitle>Interests</SectionTitle>
        <CheckboxGroup>
          {["Beach", "Culture", "Adventure", "Wildlife", "Food"].map(
            (interest) => (
              <label key={interest}>
                <input
                  type="checkbox"
                  value={interest}
                  checked={formData.interests.includes(interest)}
                  onChange={handleInterestsChange}
                />
                {interest}
              </label>
            )
          )}
        </CheckboxGroup>

        <SectionTitle>Additional Information</SectionTitle>
        <Textarea
          name="message"
          placeholder="Any special requests or messages?"
          value={formData.message}
          onChange={handleInputChange}
        />

        <SectionTitle>Payment Information</SectionTitle>
        <PaymentInfo>
          <h3>Secure Payment Methods</h3>
          <p>
            <strong>A non-refundable €150 deposit</strong> is required to confirm
            your booking. The remaining €350 can be paid upon arrival in Sri Lanka.
          </p>
          <ul>
            <li>💳 Credit/Debit Card (Visa/Mastercard/Amex) – via PayHere Secure Checkout</li>
            <li>💼 Bank Transfer to our official Sri Lankan business account</li>
            <li>🌍 Wise (TransferWise) – for international transfers in EUR, GBP, or USD</li>
            <li>🏦 Payment on Arrival – Cash or card for the remaining balance</li>
          </ul>
          <p>
            Upon form submission, we’ll send you a secure payment link or bank
            details. Your booking is only confirmed after the €150 deposit.
          </p>
          <p>
            <strong>Note:</strong> Coco Budget Travels (Pvt) Ltd is registered with
            SLTDA and Sri Lanka Registrar of Companies.
          </p>
        </PaymentInfo>

        <SubmitButton type="submit">Submit Booking</SubmitButton>
      </FormWrapper>

      {showConfirmation && (
        <Modal>
          <ModalContent>
            <h2>Booking Submitted!</h2>
            <p>
              Thank you, {formData.name}, for booking with Coco Budget Travels! We’ll
              send you an email with payment instructions shortly.
            </p>
            <Button onClick={() => setShowConfirmation(false)}>Close</Button>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled.h2`
  color: #34495e;
  font-size: 1.5rem;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 100px;
`;

const CompanionRow = styled.div`
  display: flex;
  gap: 10px;
`;

const CompanionNote = styled.p`
  color: #e74c3c;
  font-size: 0.9rem;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  label {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const PaymentInfo = styled.div`
  background: #f9f9f9;
  padding: 15px;
  border-radius: 5px;
  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 10px;
    }
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background: #2980b9;
  }
`;

const SubmitButton = styled(Button)`
  background: #2ecc71;
  &:hover {
    background: #27ae60;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  max-width: 500px;
`;

export default Form;