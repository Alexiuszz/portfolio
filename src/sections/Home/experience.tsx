import { ExperienceContainer } from "@/styles/page.styles";
import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import Experience from "@/components/experience";

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
  const [currTab, setCurrTab] = useState(0);
  const currWork = workHistory[currTab];
  return (
    <ExperienceContainer>
      <h2 className="workTitle">Work History</h2>
      <motion.div className="workHistoryContainer">
          <Experience
            companyName={currWork.company}
            role={currWork.role}
            period={currWork.period}
            works={currWork.works}
          />
        <motion.ul className="workTabs">
          {workHistory.map((work, i) => (
            <motion.li
              key={i}
              onClick={() => setCurrTab(i)}
              className="workTab"
            >
              {work.company}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <motion.div className="skillsContainer">
        <h2>Technologies I use currently</h2>
        <motion.ul className="skills">
          <motion.li className="skill">React</motion.li>
          <motion.li className="skill">Typescript</motion.li>
          <motion.li className="skill">Javascript (es6+)</motion.li>
          <motion.li className="skill">Next.Js</motion.li>
          <motion.li className="skill">Redux</motion.li>
          <motion.li className="skill">NodeJs</motion.li>
          <motion.li className="skill">PostgreSql</motion.li>
          <motion.li className="skill">MongoDb</motion.li>
        </motion.ul>
      </motion.div>
    </ExperienceContainer>
  );
});

export default ExperienceSection;
