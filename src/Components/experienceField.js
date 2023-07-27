import React from "react";
import InputField from "./InputField";
import { styled } from "styled-components";

const FormExperiences = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CurrentJob = styled.div`
  display: flex;
  gap: 15px;
`;

export default function ExperienceField({ onSubmit }) {
 
  return (
    <>
      <h1>Experiences</h1>

      <form onSubmit={(event) => onSubmit(event, "experience")}>
        <FormExperiences>
          <InputField type="text" placeholder="Position" name="position" />
          <InputField type="text" placeholder="Company" name="company" />
          <InputField type="date" placeholder="Start" name="start" />
          <InputField type="date" placeholder="End" name="end" />
        

          <textarea
            type="text"
            placeholder="Tasks Description"
            name="tasks"
            className="form-control"
          />
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </FormExperiences>
      </form>
    </>
  );
}
