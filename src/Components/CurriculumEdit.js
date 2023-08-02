import EducationField from "./EducationInfo/EducationField";
import EducationForm from "./EducationInfo/EducationForm";
import PersonalField from "./ProfessionalInfo/PersonalField";
import ExperienceField from "./ExperienceInfo/experienceField";
import styled from "styled-components";

const CurriculumEditContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default function CurriculumEdit({
  onSubmit,
  firstName,
  lastName,
  email,
  phone,
  onChange,
  education,
  experience,
  experienceToEdit,
  educationToEdit,
}) {
  return (
    <>
      <CurriculumEditContainer>
        <PersonalField
          icon="fa-regular fa-envelope"
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          onChange={onChange}
        />
        <ExperienceField
          experience={experience}
          onSubmit={onSubmit}
          experienceToEdit={experienceToEdit}
        />
        <EducationField
          education={education}
          onSubmit={onSubmit}
          educationToEdit={educationToEdit}
        />
      </CurriculumEditContainer>
    </>
  );
}
