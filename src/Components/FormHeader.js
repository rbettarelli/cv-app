import React, { useState } from "react";
import expandMore from "./Assets/expand-more.png";
import expandLess from "./Assets/expand-less.png";
import styled from "styled-components";
import EducationForm from "./EducationInfo/EducationForm";

const FormHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-itens: center;
`;

const Expand = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export default function FormHeader({ formType, showForm, toggleForm }) {


  return (
    <FormHeaderContainer >
      <h1>{formType}</h1>
      <Expand onClick={toggleForm} src={showForm ? expandMore : expandLess} />
    </FormHeaderContainer>
  );
}
