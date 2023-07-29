import EducationForm from "./EducationForm";
import React, { useState } from "react";
import { styled } from "styled-components";
import FormHeader from "../FormHeader";

export default function EducationField({ education, onSubmit }) {
  const [showForm, setShowForm] = useState(false);

  function toggleForm() {
    setShowForm(!showForm);
  }

  return (
    <>
      <FormHeader showForm={showForm} toggleForm={toggleForm} formType="Education"/>
      {showForm && <EducationForm education={education} onSubmit={onSubmit} />}
    </>
  );
}
