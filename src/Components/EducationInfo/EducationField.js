import EducationForm from "./EducationForm";
import React, { useState } from "react";
import {styled} from "styled-components"

import FormHeader from "../FormHeader";

export default function EducationField({ education, onSubmit, educationToEdit }) {
  const [showForm, setShowForm] = useState(false);
  const FormEducation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  `

  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <FormEducation>
      <FormHeader showForm={showForm} toggleForm={toggleForm} formType="Education"/>
      {showForm && <EducationForm education={education} onSubmit={onSubmit} educationToEdit={educationToEdit}/>}
    </ FormEducation>
  );
}
