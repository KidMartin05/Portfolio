import React from "react";

const educationContent = [
  {
    year: "EXPECTED FALL 2025",
    degree: "BACHELOR'S OF SCIENCE (B.S.I.T) ",
    institute: "UNIVERSITY OF SOUTH FLORIDA",
    details: `Current Information Technology (IT) student with a 3.65 cumulative GPA.`,
  },
  {
    year: "2020 - 2023",
    degree: "PRE-NURSING (B.S.N.) ",
    institute: "FLORIDA GULF COAST UNIVERSITY",
    details: `Completed 2 years (4 semesters) of college, working towards an Bachelors in Nursing as a Dual Enrollment student.`,
  },
  {
    year: "2023",
    degree: "HIGH SCHOOL DIPLOMA ",
    institute: "GATEWAY CHARTER HIGH SCHOOL",
    details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
