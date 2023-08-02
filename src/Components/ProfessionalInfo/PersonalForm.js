import {styled} from "styled-components"
import React, {useState} from "react"
import InputField from "../InputField";

export default function PersonalForm() {
   const [personalInfo, setPersonalInfo] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });

      function handleChange(event) {
        const { name, value } = event.target;
        setPersonalInfo((prev) => ({
          ...prev,
          [name]: value,
        }));
      }


    const PersonalFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;

    return (
      <PersonalFormContainer>
        <InputField
          name="firstName"
          placeholder="First Name"
          className="form-control"
          type="text"
          value={personalInfo.firstName}
          onChange={handleChange}
        />

        <InputField
          name="lastName"
          placeholder="Last Name"
          className="form-control"
          type="text"
          value={personalInfo.lastName}
          onChange={handleChange}
        />

        <InputField
          name="email"
          type="text"
          placeholder="Email"
          value={personalInfo.email}
          onChange={handleChange}
        />

        <InputField
          name="phone"
          type="text"
          placeholder="Phone Number"
          value={personalInfo.phone}
          onChange={handleChange}
        />
      </PersonalFormContainer>
    );
}
