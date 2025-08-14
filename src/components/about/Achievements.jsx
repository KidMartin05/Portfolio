import React from "react";

const achievementsContent = [
  { title: "1", subTitle1: "year of", subTitle2: "experience" },
  { title: "2", subTitle1: "completed", subTitle2: "projects" },
  { title: "12", subTitle1: "languages", subTitle2: "known" },
  { title: "1", subTitle1: "technical", subTitle2: "certificates" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
