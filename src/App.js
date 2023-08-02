import React from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Components/Header";
import Content from "./Components/Content";
import {format} from "date-fns" 

function App() {
 
  const [personal, setPersonal] = React.useState([])
  const [experience, setExperience] = React.useState([]);
  const [education, setEducation] = React.useState([]);
  const [experienceToEdit, setExperienceToEdit] = React.useState(false);
  const [educationToEdit, setEducationToEdit] = React.useState(false);

  function addItem(event, itemType, id) {

    const formatDate = (date) => {
      const dateToFormat = format(new Date(date.replaceAll('-', '/')), "MMM ',' yyyy");
      return dateToFormat

    }


    event.preventDefault();

    if (itemType === "experience") {
      const id = uuidv4();
      const position = event.target[0].value;
      const company = event.target[1].value;
      const start = formatDate(event.target[2].value);
      const end = event.target[3].value ? formatDate(event.target[3].value) : "Current";
      const tasks = event.target[4].value;

      let newExperience = { id, position, company, start, end, tasks };
      setExperience([...experience, newExperience]);
    } else if (itemType === "education") {
      const id = uuidv4();
      const course = event.target[0].value;
      const place = event.target[1].value;
      const startYear = formatDate(event.target[2].value)
      const graduatedYear = formatDate(event.target[3].value);
      let newEducation = { id, course, place, startYear, graduatedYear };
      setEducation([...education, newEducation]);
    } else if (itemType === "editExperience" && id) {
      const position = event.target[0].value;
      const company = event.target[1].value;
      const start = formatDate(event.target[2].value);
      const end = event.target[3].value ? formatDate(event.target[3].value) : "Current";
      const tasks = event.target[4].value;
    
      const updatedExperiences = experience.map((exp) =>
        exp.id === id ? { id, position, company, start, end, tasks } : exp
      );
     
      setExperience(updatedExperiences);
      setExperienceToEdit(null);
    }else if (itemType === "editEducation" && id) {
      const course = event.target[0].value;
      const place = event.target[1].value;
      const startYear = formatDate(event.target[2].value)
      const graduatedYear = formatDate(event.target[3].value);
      const updatedEducation = education.map((edu) => edu.id === id ? {id, course, place, startYear, graduatedYear}  : edu)
      setEducation(updatedEducation);
      setEducationToEdit(null)
    }
  }

  function editExperience(id) {
    const experienceToEdit = experience.find((exp) => exp.id === id);
    setExperienceToEdit(experienceToEdit);
  }

  function editEducation(id) {
    const educationToEdit = education.find((edu) => edu.id === id);
    setEducationToEdit(educationToEdit)
  }



  return (
    <>
      <Header />
      <Content
        experience={experience}
        education={education}
        onSubmit={addItem}
        editExperience={editExperience}
        experienceToEdit={experienceToEdit}
        editEducation={editEducation}
        educationToEdit={educationToEdit}
      />
    </>
  );
}

export default App;
