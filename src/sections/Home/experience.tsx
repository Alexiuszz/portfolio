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
      <motion.div className="workHistoryContainer">
        <h2>Work History</h2>
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
          <li className="skill">React</li>
          <li className="skill">Typescript</li>
          <li className="skill">Javascript (es6+)</li>
          <li className="skill">Next.Js</li>
          <li className="skill">Redux</li>
          <li className="skill">NodeJs</li>
          <li className="skill">PostgreSql</li>
          <li className="skill">MongoDb</li>
        </motion.ul>
      </motion.div>
    </ExperienceContainer>
  );
});

export default ExperienceSection;
