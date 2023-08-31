import { styled } from "styled-components";
export default function Contact() {
  const Contact = styled.div`
    padding: calc(2vw + 20px);
    width: 90vw;
    max-width: 900px;
    margin: 0 auto;
    background-color: #4177893a;
    border: solid rgb(210, 231, 238) 2px;
    border-radius: 1px;
    box-shadow: 0 0 60px #4177896e;
  `;
  const Links = styled.ul`
    font-size: 16px;
    list-style: none;
    display: flex;
    text-decoration: underline;
    gap: 20px;
  `;
  const MailHeading = styled.h1`
    font-size: 16px;
    font-family: "Ahganirya";
  `;
  const LinksHeading = styled.h1`
    font-size: 16px;
    margin-top: 48px;
    font-family: "Ahganirya";
  `;
  return (
    <>
      <Contact className="Contact">
        <MailHeading>MAIL</MailHeading>
        <p>hello@zeynep.page</p>
        <LinksHeading>SOCIAL MEDIA</LinksHeading>
        <Links>
          <a href="https://github.com/rosa-pastel">GitHub</a>
          <a href="https://www.linkedin.com/in/zeynep-rana-mutlu/">LinkedIn</a>
          <a href="https://www.upwork.com/freelancers/~0173a445d816530d45">
            Upwork
          </a>
        </Links>
      </Contact>
    </>
  );
}
