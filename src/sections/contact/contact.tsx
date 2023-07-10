import LinkButton from "@/components/LinkButton";
import { ContactContainer } from "@/sections/contact/contact.styles";
import { SectionHeader } from "@/styles/typography.styles";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import CustomLink from "@/components/CustomLink";
import { useInView } from "framer-motion";

function ContactSection({
  setSection,
}: {
  setSection: (section: string) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref,{amount: 0.5});
  useEffect(() => {
    isInView && setSection("contact");
  }, [isInView]);
  return (
    <ContactContainer ref={ref} id="contact">
      <div className="contact-wrapper">
        <SectionHeader>Send me a message</SectionHeader>
        <p>
          If you would like to make further enquires, please get in
          touch, my inbox is open. I&apos;m actively looking for new
          opportunities to design and build the future of the web 😁.
        </p>
        <LinkButton
          className="contactButton"
          href="mailto:alexiusnwala@gmail.com"
        >
          Get in touch
        </LinkButton>
        <p>
          You can also check out my social media handles and drop a
          hello there.
        </p>
      </div>
      <div className="foot">
        <p>Alexius Nwala &copy;</p>
        <div className="foot-socials">
          <CustomLink
            className="socialsLink"
            href="https://github.com/Alexiuszz"
          >
            <FontAwesomeIcon icon={faGithub} />
          </CustomLink>
          <CustomLink
            className="socialsLink"
            href="https://www.linkedin.com/in/alexis-nwala"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </CustomLink>
          <CustomLink
            className="socialsLink"
            href="https://twitter.com/AlexiusNwala"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </CustomLink>
        </div>
      </div>
    </ContactContainer>
  );
}

export default ContactSection;
