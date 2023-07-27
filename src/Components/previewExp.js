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

}) {
  


  return (
    <ExperiencesView>
      <div className="exp-preview">
        <p>
          <strong>{position}</strong>
        </p>
        <button className="btn btn-primary" id={id}>
          Edit
        </button>
        <p>
          <strong>{company}</strong> | {start} -{" "}
          {!end || end === null ? "Current" : end}
        </p>
        <p>{tasks}</p>
      </div>

      <br></br>
    </ExperiencesView>
  );
}
