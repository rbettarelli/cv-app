import InputField from "../InputField";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const EducationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ExpandedContent = styled.div``;

export default function EducationForm({ onSubmit, educationToEdit }) {
  const initialFormData = {
    place: "",
    course: "",
    startYear: "",
    graduatedYear: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (educationToEdit) {
      setFormData({
        ...educationToEdit,
      });
    } else {
      setFormData(initialFormData);
    }
  }, [educationToEdit]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (educationToEdit) {
      onSubmit(event, "editEducation", educationToEdit.id, true);
    } else {
      onSubmit(event, "education");
    }
  }

  return (
    <>
      <ExpandedContent>
        <form onSubmit={handleSubmit}>
          <EducationFormContainer>
            <InputField
              type="text"
              placeholder="Course"
              name="course"
              value={formData.course}
              onChange={handleChange}
            />
            <InputField
              type="text"
              placeholder="School / College"
              name="place"
              value={formData.place}
              onChange={handleChange}
            />
            <InputField type="date" placeholder="Start Year" name="startYear" value={formData.startYear} 
            onChange={handleChange} />
            <InputField
              type="date"
              placeholder="Graduated Year"
              name="graduatedYear"
              value={formData.graduatedYear}
              onChange={handleChange}
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
