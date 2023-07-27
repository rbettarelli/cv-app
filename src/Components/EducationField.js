import InputField from "./InputField";
import { styled } from "styled-components";

const EducationForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function EducationField({ onSubmit  }) {

  return (
    <>
      <h1>Education</h1>
      <form onSubmit={(event) => onSubmit(event, "experience")}>
        <EducationForm>
          <InputField type="text" placeholder="Course" name="course" />
          <InputField type="text" placeholder="School / College" name="place" />
          <InputField type="text" placeholder="Start Year" name="startYear" />
          <InputField
            type="text"
            placeholder="Graduated Year"
            name="graduatedYear"
          />
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </EducationForm>
      </form>
    </>
  );
}
