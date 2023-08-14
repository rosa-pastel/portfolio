import { styled } from "styled-components";
export default function About() {
  const About = styled.div`
    padding: calc(2vw + 20px);
    width: 90vw;
    max-width: 900px;
    margin: 0 auto;
    background-color: #4177893a;
    border: solid rgb(210, 231, 238) 2px;
    border-radius: 1px;
    box-shadow: 0 0 60px #4177896e;
  `;
  const AboutMeHeading = styled.h1`
    font-family: "Ahganirya";
    font-size: 20px;
  `;
  const AboutMe = styled.p`
    margin-bottom: 50px;
  `;
  const TechHeading = styled.h1`
    font-family: "Ahganirya";
    font-size: 20px;
  `;
  const Tech = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  const TechItem = styled.li`
    &:not(:first-child) {
      &:before {
        content: " ● ";
        white-space: pre;
      }
    }
  `;
  return (
    <>
      <About className="About">
        <AboutMeHeading>About Me</AboutMeHeading>
        <AboutMe>
          I&#39;m a self-taught developer and my journey into the world of
          programming is a testament to my genuine excitement for this ﬁeld.
          Coding brings me endless joy and I&#39;m eager to bring that
          enthusiasm to new challenges.
        </AboutMe>
        <TechHeading>What I Use</TechHeading>
        <Tech>
          <TechItem>React</TechItem>
          <TechItem>NextJS</TechItem>
          <TechItem>TypeScript</TechItem>
          <TechItem>jQuery</TechItem>
          <TechItem>SCSS</TechItem>
          <TechItem>Tailwind</TechItem>
          <TechItem>Jest</TechItem>
          <TechItem>NPM</TechItem>
          <TechItem>Webpack</TechItem>
          <TechItem>Git</TechItem>
        </Tech>
      </About>
    </>
  );
}
