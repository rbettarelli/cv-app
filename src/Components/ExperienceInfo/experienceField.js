import React, { useState } from "react";

import { styled } from "styled-components";
import FormHeader from "../FormHeader";
import ExperienceForm from "./ExperienceForm";

const FormExperiences = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function ExperienceField({ onSubmit }) {
  const [showForm, setShowForm] = useState(false);

  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <>
      <FormHeader
        formType="Experiences"
        showForm={showForm}
        toggleForm={toggleForm}
      />
      {showForm && <ExperienceForm onSubmit={onSubmit} />}{" "}
    </>
  );
}
