import React from "react";
import { motion } from "framer-motion";
import { ExperienceContainer } from "./experience.styles";

interface ExperienceProps {
  companyName: string;
  role: string;
  period: string;
  works: string[];
}
function Experience({
  companyName,
  role,
  period,
  works,
}: ExperienceProps) {
  return (
    <ExperienceContainer>
      <h3 className="role">
        {role}-{">"}
        <span className="company">{companyName}</span>
      </h3>
      <p className="workPeriod">{period}</p>
      <ul className="workContainer">
        {works.map((work, i) => (
          <li key={i} className="work">{work}</li>
        ))}
      </ul>
    </ExperienceContainer>
  );
}

export default Experience;
