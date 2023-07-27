import React, { useEffect, useRef } from "react";
import Education from "./PreviewEducation";
import PreviewExp from "./previewExp";
import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.h1`
  text-align: center;
`;

const PersonalInfo = styled.div`
  background-color: lightgray;
  height: 150px;
  padding: 16px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const FullName = styled.h2`
  display: flex;
  height: 50px;
  justify-content: center;
  white-space: nowrap;
  max-width: 90%;
`;

export default function CurriculumView({
  firstName,
  lastName,
  email,
  phone,
  experience,
  education,
}) {
  return (
    <ViewContainer>
      <Title>View</Title>
      <PersonalInfo className="personal-info">
        <FullName>
          {firstName} {lastName}
        </FullName>

        <p>
          <MdOutlineEmail /> {email}
        </p>
        <p>
          <AiOutlinePhone /> {phone}
        </p>
      </PersonalInfo>

      <h2> Experience </h2>

      {experience.map((exp) => {
        return (
          <PreviewExp
            key={exp.id}
            id={exp.id}
            position={exp.position}
            company={exp.company}
            start={exp.start}
            end={exp.end}
            tasks={exp.tasks}
            
          />
        );
      })}
      {education.map((edu) => {
        return (
          <Education
            key={edu.id}
            course={edu.course}
            place={edu.place}
            startyear={edu.startyear}
            graduatedYear={edu.graduatedYear}
          />
        );
      })}
    </ViewContainer>
  );
}
