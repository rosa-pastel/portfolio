"use client";
import { styled } from "styled-components";
import backgroundImg from "../public/pawel-czerwinski-HkAy-PdSqeA-unsplash.jpg";
import About from "../components/about";
import Work from "../components/work/work";
import Contact from "../components/contact";
import Header from "../components/header";
export default function Home() {
  const Home = styled.div`
    color: #ffffff;
    font-family: "Montserrat";
    font-size: 16px;
    background-image: url(${backgroundImg?.src});
    background-size: cover;
    min-height: 100vh;
    width: 100vw;
    padding-right: 16px;
    display: flex;
    flex-direction: column;
    &:hover {
      cursor: default;
    }
  `;
  const Welcome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    height: calc(100vh - 75px);
    width: 100%;
    margin: auto;
    max-width: 900px;
    overflow: hidden;
  `;
  const Name = styled.h1`
    @keyframes slideRight {
      0% {
        transform: translateX(-3000px);
      }
      80% {
        transform: translateX(20px);
      }
      100% {
        transform: translateX(0px);
      }
    }
    animation: slideRight 2s;
    font-family: "Flighty";
    font-size: calc(5.5vmax + 22px);
    text-shadow: 0 0 2px #1d4f60;
    z-index: 1;
    padding: 0 10px;
  `;
  const Title = styled.h2`
    @keyframes slideLeft {
      0% {
        transform: translateX(3000px);
      }
      80% {
        transform: translateX(-10px);
      }
      100% {
        transform: translateX(0px);
      }
    }
    font-family: "Ahganirya";
    transform: translateX(-3000px);
    font-size: 16px;
    animation: slideLeft 2s forwards 500ms;
    text-shadow: 0 0 2px #1d4f60;
    padding:0 10px
    z-index: 1;
  `;
  const Footer = styled.footer`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <>
      <Home>
        <Header></Header>
        <main>
          <Welcome className="Welcome">
            <Name>Zeynep Rana Mutlu</Name>
            <Title>Frontend Web Developer</Title>
          </Welcome>
          <About></About>
          <Work></Work>
          <Contact></Contact>
        </main>
        <Footer> © Zeynep Rana Mutlu 2023 </Footer>
      </Home>
    </>
  );
}
