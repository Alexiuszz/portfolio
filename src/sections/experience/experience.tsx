import { ExperienceContainer } from "@/sections/experience/experience.styles";
import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import Experience from "@/components/experience";
import StyledList from "@/components/StyledList";
import { SectionHeader } from "@/styles/typography.styles";

const workHistory: {
  company: string;
  role: string;
  period: string;
  works: string[];
}[] = [
  {
    company: "Mavis Computel",
    role: "Software Engineer",
    period: "September 2022 - till Date",
    works: [
      "Developed in an AGILE team a highly optimized learning platform for children (Biamuta.com)",
      "Built with ReactJs and Redux includes many games and learning exercises",
    ],
  },
  {
    company: "Innov8 Technology Hub",
    role: "Embedded Software Engineer",
    period: "April 2022 - January 2023",
    works: [
      "Developed an automatic irrigation system with multi-point nodes, a control unit with LCD display using Embedded C, ESP32 using ESPNow.",
      "Designed an autonomous line following robot with Multiple infrared sensors using Arduino and Embedded C.",
      "Designed a  Bluetooth RC car controlled using any mobile phone.",
      "Designed and Implemented software for an automated mushroom farm.",
    ],
  },
  {
    company: "Cyphercrescent Limited",
    role: "Embedded Software Engineer",
    period: "April 2022 - January 2023",
    works: [
      "Acquired complete understanding of the fundamentals of computer programing with C#.",
      "Gained sufficient understanding of the principles of various data structures including trees and graphs.",
      "Gained sufficient understanding of linear algebra and its applications.",
      "Wrote a linear algebra mathematical library using C# for solving various forms of linear equations.",
      "Developed a circuit simulation application for simulating basic electronic circuits.",
    ],
  },
];
const ExperienceSection = forwardRef(function AboutSection(
  props: {},
  ref: React.Ref<HTMLElement>
) {
  const [currTab, setCurrTab] = useState<number>(0);
  return (
    <ExperienceContainer id="experience">
      <SectionHeader>Work History</SectionHeader>
      <motion.div className="workHistoryContainer">
        {workHistory.map((work, i) => {
          return (
            <Experience
              isCurr={i === currTab}
              key={i}
              companyName={work.company}
              role={work.role}
              period={work.period}
              works={work.works}
            />
          );
        })}
        <motion.ul className="workTabs">
          <motion.div
            animate={{ y: currTab * 40 }}
            transition={{ duration: 0.3 }}
            className="hLight"
          ></motion.div>
          {workHistory.map((work, i) => (
            <StyledList
              key={i}
              onClick={() => setCurrTab(i)}
              className="workTab"
            >
              <p className={i === currTab ? "currTab" : ""}>
                {work.company}
              </p>
            </StyledList>
          ))}
        </motion.ul>
      </motion.div>
      <motion.div className="skillsContainer">
        <SectionHeader>Technologies I use currently</SectionHeader>
        <motion.ul className="skills">
          <StyledList className="skill">
            <p>React</p>
          </StyledList>
          <StyledList className="skill">
            <p>Typescript</p>
          </StyledList>
          <StyledList className="skill">
            <p>Javascript (es6+)</p>
          </StyledList>
          <StyledList className="skill">
            <p>Next.Js</p>
          </StyledList>
          <StyledList className="skill">
            <p>Redux</p>
          </StyledList>
          <StyledList className="skill">
            <p>NodeJs</p>
          </StyledList>
          <StyledList className="skill">
            <p>PostgreSql</p>
          </StyledList>
          <StyledList className="skill">
            <p>MongoDb</p>
          </StyledList>
        </motion.ul>
      </motion.div>
    </ExperienceContainer>
  );
});

export default ExperienceSection;
