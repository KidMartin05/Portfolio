import React from "react";

const experienceContent = [
  {
    year: "September 2023 - Present",
    position: "Registered Pharmacy Technician",
    compnayName: "Polaris Pharmacy Services",
    details: `Dispensed prescriptions in a high-volume pharmacy using FrameworkRx, ensuring 
    DEA compliance and quality patient care.`,
  },
  {
    year: "August 2023 – Present",
    position: "Web Developer Intern",
    compnayName: "BluPoint Media, Inc.",
    details: `Built responsive websites with HTML, CSS, JavaScript, and React, and supported 
    backend development in Python and MySQL. Improved code quality and deployment speed through 
    reviews, debugging, and Git workflows.`,
  },
  {
    year: "August 2020 – August 2023",
    position: "Registered Pharmacy Technician / Clerk",
    compnayName: "Publix Supermarkets",
    details: `Experienced in prescription processing, inventory management, and point-of-sale 
    operations. Skilled in customer service, de-escalation, waste reduction, and maintaining 
    transaction accuracy.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
