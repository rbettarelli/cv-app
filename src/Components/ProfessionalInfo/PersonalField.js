import { styled } from "styled-components";
import React, { useState } from "react";
import InputField from "../InputField";
import FormHeader from "../FormHeader";
import { MdShield } from "react-icons/md";
import PersonalForm from "./PersonalForm";

const FormPersonal = styled.div`
display: flex;
flex-direction: column;
padding: 30px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export default function PersonalField({ onSubmit, onChange }) {
  const [showForm, setShowForm] = useState(false);

  function toggleForm() {
    setShowForm(!showForm);
  }
  return (
    <FormPersonal>
      <FormHeader
        formType="Personal Info"
        showForm={showForm}
        toggleForm={toggleForm}
      />

      {showForm && 
      (
      <PersonalForm onSubmit={onSubmit} onChange={onChange}/>)}
    </ FormPersonal>
  );
}
