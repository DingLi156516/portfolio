import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of different technologies
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>Front-End</ListContainer>
        <ListParagraph>
          Experience with <br />
          React.js
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>Backend-End</ListContainer>
        <ListParagraph>
          Experience with <br />
          Node and Databases
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>UI/UX</ListContainer>
        <ListParagraph>
          Experience with <br />
          tools like Figma
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
