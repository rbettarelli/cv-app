export default function Education({
  id,
  course,
  place,
  startyear,
  graduatedYear,
  editEducation
}) {
  return (
    <>
      <div className="edu-preview" onClick={() => editEducation(id)}>
       
          <h3>
            <strong>{course}</strong>
          </h3>
          <h4>{place}</h4>
          <p>
            {startyear} - {graduatedYear}
          </p>
        
      </div>
    </>
  );
}