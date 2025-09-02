import { ExperienceContainer } from "@/sections/experience/experience.styles";
import { forwardRef, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Experience from "@/components/experience";
import StyledList from "@/components/StyledList";
import { SectionHeader } from "@/styles/typography.styles";
import { useIsMedium } from "@/hooks/useMediaQuery";

const workHistory: {
  company: string;
  role: string;
  period: string;
  works: string[];
}[] = [
  {
    company: "Datheron",
    role: "Software Engineer",
    period: "April 2019 - September 2024",
    works: [
      "Design and Engineer software solutions which include custom web apps for clients and for micro services, some of which include OdaNow, brain-trainer, Granomaly and more",
      "Contribute in the development and implementation of the user interface for OdaNow, an innovative store management tool, ensuring a seamless and intuitive user experience",
      "Actively involved in the development and maintenance of Granomaly, a cutting-edge risk management tool tailored to the requirements of a prominent client.",
      "Implemented optimized database integration techniques, significantly improving data retrieval speed and overall system responsiveness.",
      "Developed a caching layer that further enhanced the user experience by reducing latency and minimizing redundant data requests."
    ],
  },
  {
    company: "Mavis Computel",
    role: "Software Engineer",
    period: "June 2022 - August 2024",
    works: [
      "Design and develop massive learning platform (Biamuta.com) for children, with a myriad of diverse lessons and games, with fun characters animated with rive.",
      "Transform our characters from still images into animations using Rive, giving life to fun and interactive characters that enhanced the platform's overall appeal.",
      "Collaborate closely with the research team to conceptualize and execute user-friendly and interactive features, keeping young learners actively engaged.",
      "Conduct user testing and gathered feedback to iterate and improve on various modes and functionalities, further enhancing the overall user experience.",
      "Build efficient and highly optimized components, allowing minimal loading time for a visually appealing animated mode."
    ],
  },
  {
    company: "Innov8 Technology Hub",
    role: "Embedded Software Engineer",
    period: "April 2021 - June 2022",
    works: [
      "Developed and design an IOT solution for an automatic irrigation system with multi-point nodes using Embedded C, ESP32 and Blynk IOT.",
      "Enabled remote monitoring and control of the irrigation system through a user-friendly web interface, providing real-time updates to users.",
      "Designed an autonomous line following robot with Multiple infrared sensors using Arduino and Embedded C.",
      "Developed intelligent algorithms that allowed the robot to adapt to varying terrains and environmental conditions.",
      "Designed and developed  software for an automated mushroom farm.",
      "Developed a user-friendly interface to monitor and control critical parameters such as temperature, humidity, and lighting, ensuring consistent, high-quality yields."
    ],
  },
  {
    company: "Cyphercrescent Limited",
    role: "Applied Mathematics and Software Research Intern",
    period: "August  2019 - January  2020",
    works: [
      "Acquired complete understanding of the fundamentals of computer programing with C#.",
      "Gained sufficient understanding of the principles of various data structures including trees and graphs. ",
      "Wrote a linear algebra mathematical library using C# for solving various forms of linear equations.",
      "Developed a circuit simulation application for simulating basic electronic circuits using graph datastructures and linear algebra library I developed.",
    ],
  },
];
const ExperienceSection = ({
  setSection,
}: {
  setSection: (section: string) => void;
}) => {
  const isMedium = useIsMedium();
  const [currTab, setCurrTab] = useState<number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  useEffect(() => {
    isInView && setSection("experience");
  }, [isInView]);

  return (
    <ExperienceContainer ref={ref} id="experience">
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
            animate={
              isMedium ? { y: currTab * 40 } : { x: currTab * 72 }
            }
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
                {work.company.split(" ")[0]}
              </p>
            </StyledList>
          ))}
        </motion.ul>
      </motion.div>
      <motion.div className="skillsContainer">
        <SectionHeader>Technologies</SectionHeader>
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
};

export default ExperienceSection;
