import React, { useState } from "react";
import CurriculumEdit from "./CurriculumEdit";
import CurriculumView from "./CurriculumView";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(2, 300px);
  justify-content: center;
`;

export default function Content({
  onSubmit,
  onChange,
  firstName,
  lastName,
  email,
  phone,
  experience,
  education,
}) {


  return (
    <Container>
      <CurriculumEdit
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        onChange={onChange}
        experience={experience}
        education={education}
        onSubmit={onSubmit}
      
      />

      <CurriculumView
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        onChange={onChange}
        experience={experience}
        education={education}
      />
    </Container>
  );
}
