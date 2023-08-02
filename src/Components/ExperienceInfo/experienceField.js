import React, { useState } from "react";
import { styled } from "styled-components";
import FormHeader from "../FormHeader";
import ExperienceForm from "./ExperienceForm";

const FormExperiences = styled.div`
display: flex;
flex-direction: column;
padding: 30px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export default function ExperienceField({ onSubmit, experienceToEdit }) {
  const [showForm, setShowForm] = useState(false);

  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <FormExperiences>
      <FormHeader
        formType="Experiences"
        showForm={showForm}
        toggleForm={toggleForm}
      />
      {showForm && (
        <ExperienceForm
          onSubmit={onSubmit}
          experienceToEdit={experienceToEdit}
        />
      )}{" "}
    </FormExperiences>
  );
}
