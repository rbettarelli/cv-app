import styled from "styled-components"
import InputField from "../InputField";


const FormExperiences = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

export default function ExperienceForm({onSubmit}) {
    return (
      <>
     
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
      

  
