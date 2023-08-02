import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InputField from "../InputField";

const FormExperiences = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function ExperienceForm({ onSubmit, experienceToEdit }) {
  const initialFormData = {
    position: "",
    company: "",
    start: "",
    end: "",
    tasks: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  useEffect(() => {
    if (experienceToEdit) {
      setFormData({
        ...experienceToEdit,
      });
    } else {
      setFormData(initialFormData);
    }
  }, [experienceToEdit]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (experienceToEdit) {
      onSubmit(event, "editExperience", experienceToEdit.id, true);
    } else {
      onSubmit(event, "experience");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormExperiences>
        <InputField
          type="text"
          placeholder="Position"
          name="position"
          value={formData.position}
          onChange={handleChange}
        />
        <InputField
          type="text"
          placeholder="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
        <InputField
          type="date"
          placeholder="Start"
          name="start"
          value={formData.start}
          onChange={handleChange}
        />
        <InputField
          type="date"
          placeholder="End"
          name="end"
          value={formData.end}
          onChange={handleChange}
        />
        <textarea
          type="text"
          placeholder="Tasks Description"
          name="tasks"
          className="form-control"
          value={formData.tasks}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </FormExperiences>
    </form>
  );
}
