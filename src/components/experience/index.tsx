import React from "react";
import { motion } from "framer-motion";
import { ExperienceContainer } from "./experience.styles";
import StyledList from "../StyledList";

interface ExperienceProps {
  companyName: string;
  role: string;
  period: string;
  works: string[];
  isCurr: boolean;
}
function Experience({
  companyName,
  isCurr,
  role,
  period,
  works,
}: ExperienceProps) {
  return (
    <ExperienceContainer className={isCurr ? "currentTab" : "notCurrentTab"}>
      <h3 className="role">
        {role}
        {" > "}
        <span className="company">{companyName}</span>
      </h3>
      <p className="workPeriod">{period}</p>
      <ul className="workContainer">
        {works.map((work, i) => (
          <StyledList key={i} className="work">
            {work}
          </StyledList>
        ))}
      </ul>
    </ExperienceContainer>
  );
}

export default Experience;
