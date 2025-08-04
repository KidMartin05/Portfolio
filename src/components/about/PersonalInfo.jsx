import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Thomas" },
  { meta: "last name", metaInfo: "Martin" },
  { meta: "Age", metaInfo: "20 Years" },
  { meta: "Nationality", metaInfo: "American" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Tampa, Florida, United States" },
  { meta: "phone", metaInfo: "(239) 850-3750" },
  { meta: "Email", metaInfo: "kidmartin0509@gmail.com" },
  { meta: "LinkedIn", metaInfo: " Thomas Martin" }, //EMBED LINKEDIN LINK HERE, OR
  { meta: "Languages", metaInfo: "English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
