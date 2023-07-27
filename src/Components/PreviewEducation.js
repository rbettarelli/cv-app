export default function Education({id, course, place, startyear, graduatedYear}) {

    return(
        <>
        <div>
            <li key={id}>
                <h3><strong>{course}</strong></h3>
                <h4>{place}</h4>
                <p>{startyear} - {graduatedYear}</p>

            </li>
        </div>
        </>
    ) 

    
}