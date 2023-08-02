import { styled } from "styled-components";

const ExperiencesView = styled.div`
display: flex;
flex-direction: column
word-wrap: break-word;
`;

export default function PreviewExp({
  id,
  position,
  company,
  start,
  end,
  tasks,
  editExperience

}) {
  
  return (
    <ExperiencesView>
      <div className="exp-preview" id={id} onClick={() => editExperience(id)}>
        <p>
          <strong>{position}</strong>
        </p>
  
        <p>
          <strong>{company}</strong> | {start} -{" "}
          { end}
        </p>
        <p>{tasks}</p>
      </div>

      <br></br>
    </ExperiencesView>
  );
}
