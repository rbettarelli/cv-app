import React from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Components/Header";
import Content from "./Components/Content";

function App() {
  const [personalInfo, setPersonalInfo] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

const [experience, setExperience] = React.useState([]);
  const [education, setEducation] = React.useState([]);
  const [isShown, setIsShown] = React.useState(false)

  function addItem(event, itemType) {
    event.preventDefault();
    if (itemType === "experience") {
      const id = uuidv4();
      const position = event.target[0].value;
      const company = event.target[1].value;
      const start = event.target[2].value;
      const end = event.target[3].value;
      const tasks = event.target[4].value;

      let newExperience = { id, position, company, start, end, tasks };
      setExperience([...experience, newExperience]);
      
    } else if (itemType === "education") {
      const id = uuidv4();
      const course = event.target[0].value;
      const place = event.target[1].value;
      const startYear = event.target[2].value;
      const graduatedYear = event.target[3].value;
      let newEducation = { id, course, place, startYear, graduatedYear };
      setEducation([...education, newEducation]);
    }else if (itemType === "editEducation"){ 
      
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }


  return (
    <>
      <Header />
      <Content
        firstName={personalInfo.firstName}
        lastName={personalInfo.lastName}
        email={personalInfo.email}
        phone={personalInfo.phone}
        onChange={handleChange}
        experience={experience}
        education={education}
        onSubmit={addItem}
        
        
      />
    </>
  );
}

export default App;
