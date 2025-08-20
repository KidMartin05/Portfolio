import React from "react";

const SocialShare = [
  { iconName: "fa fa-facebook", link: "https://www.facebook.com/thomas.martin.98478672/" },
  { iconName: "fa fa-twitter", link: "https://x.com/ThomasMartin595/" },
  { iconName: "fa fa-youtube", link: "https://www.youtube.com/Kid_Martin/" },
  { iconName: "fa fa-linkedin", link: "https://linkedin.com/in/thomas-amartin/" },
  { iconName: "fa fa-github", link: "https://github.com/KidMartin05/" },
  { iconName: "fa fa-instagram", link: "https://instagram.com/kidmartin05/" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
