import InputField from "../InputField";
import React from "react";
import { styled } from "styled-components";

const EducationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;



const ExpandedContent = styled.div``;


export default function EducationForm({ onSubmit}) {



  return (
    <>

        <ExpandedContent>
          <form onSubmit={(event) => onSubmit(event, "education")}>
            <EducationFormContainer>
              <InputField type="text" placeholder="Course" name="course" />
              <InputField
                type="text"
                placeholder="School / College"
                name="place"
              />
              <InputField
                type="text"
                placeholder="Start Year"
                name="startYear"
              />
              <InputField
                type="text"
                placeholder="Graduated Year"
                name="graduatedYear"
              />
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </EducationFormContainer>
          </form>
        </ExpandedContent>
     
    </>
  );
}
