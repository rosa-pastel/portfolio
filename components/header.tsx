import styled from "styled-components";
import Butterfly from "../app/Butterfly";
export default function Header() {
  const Logo = styled.h1`
    position: relative;
    &:after {
      content: "Zeynep";
      font-family: "Flighty";
      font-size: 48px;
      position: absolute;
      bottom: 0px;
      left: 0px;
    }
    @media screen and (max-width: 450px) {
      display: none;
    }
  `;
  const Nav = styled.nav``;
  const NavList = styled.ul`
    font-family: "Ahganirya";
    display: flex;
    gap: calc(2vw + 16px);
    list-style: none;
  `;
  const Li = styled.li`
    font-size: 12px;
  `;
  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    height: 75px;
    max-width: 900px;
    margin: 0 auto;
    padding: 0.1rem 0rem;
    border-bottom: 1px solid white;
    position: relative;
    @media screen and (max-width: 900px) {
      padding: 0 10px;
    }
  `;
  return (
    <>
      <Header>
        <Logo></Logo>
        <Nav>
          <NavList>
            <Li
              onClick={() => {
                document
                  .getElementsByClassName("About")[0]
                  .scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              About
            </Li>
            <Li
              onClick={() => {
                document
                  .getElementsByClassName("Work")[0]
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Work
            </Li>
            <Li
              onClick={() => {
                document
                  .getElementsByClassName("Contact")[0]
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </Li>
          </NavList>
        </Nav>
        <Butterfly></Butterfly>
      </Header>
    </>
  );
}
