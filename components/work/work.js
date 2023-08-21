import { styled } from "styled-components";
import Image from "@/node_modules/next/image";
import cv from "/public/cv-app.png";
import todo from "/public/todo.png";
import battleship from "/public/battleship.png";
import etch from "/public/etch.png";
import weather from "/public/weather.png";
import tictactoe from "/public/tic.png";
import githubIcon from "/public/github-logo.png";
export default function Work() {
  const Work = styled.div`
    padding: 50px 0 100px 0;
    width: 90vw;
    max-width: 900px;
    margin: 0 auto;
    border-radius: 1px;
  `;
  const Project = styled.div`
    position: relative;
    &:not(:first-child) {
      margin-top: 100px;
    }
    &:after {
      content: "";
      position: absolute;
      top: 18px;
      right: 18px;
      width: 40px;
      height: 40px;
      border-radius: 40px;
      border: solid 2px #ffffff84;
      box-sizing: border-box;
    }
  `;
  const Title = styled.a`
    background-color: white;
    color: #1d4f60;
    font-family: "Montserrat";
    text-transform: uppercase;
    position: absolute;
    bottom: -4px;
    left: 42px;
    padding: 5px 25px 0px 25px;
    font-size: 24px;
    padding-bottom: 5px;
    z-index: 1;
    border: solid #1d4f60 1px;
  `;
  const Info = styled.p`
    background-color: #1d4f60;
    left: 0px;
    bottom: auto;
    margin-top: -4px;
    position: absolute;
    padding: 15px 25px 12px 25px;
    width: 100%;
  `;
  const GithubIcon = styled.img`
    width: 50px;
    position: absolute;
    top: 13px;
    right: 13px;
    z-index: 1;
    @keyframes turn {
      66% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    animation: turn 3s ease infinite;
  `;
  return (
    <>
      <Work className="Work">
        <Project>
          <a href="https://github.com/rosa-pastel/cv-application">
            <GithubIcon alt="GitHub" src={githubIcon?.src}></GithubIcon>
          </a>
          <Title href="https://rosa-pastel.github.io/cv-application/">
            CV App
          </Title>
          <Image
            src={cv?.src}
            alt=""
            width={0}
            height={0}
            sizes={"100vw"}
            style={{ width: "100%", height: "auto" }}
          ></Image>
          <Info>
            React app to build a CV. Uses jsPDF library to enable downloading CV
            as PDF.
          </Info>
        </Project>
        <Project>
          <a href="https://github.com/rosa-pastel/battleship">
            <GithubIcon alt="GitHub" src={githubIcon?.src}></GithubIcon>
          </a>
          <Title href="https://rosa-pastel.github.io/battleship/">
            Battleship
          </Title>
          <Image
            src={battleship?.src}
            alt=""
            width={0}
            height={0}
            sizes={"100vw"}
            style={{ width: "100%", height: "auto" }}
          ></Image>
          <Info>
            Single player battleship game with drag&drop functionality,
            developed using TDD principles.
          </Info>
        </Project>
        <Project>
          <a href="https://github.com/rosa-pastel/todo-list">
            <GithubIcon alt="GitHub" src={githubIcon?.src}></GithubIcon>
          </a>
          <Title href="https://rosa-pastel.github.io/todo-list/">
            Todo App
          </Title>
          <Image
            src={todo?.src}
            alt=""
            width={0}
            height={0}
            sizes={"100vw"}
            style={{ width: "100%", height: "auto" }}
          ></Image>
          <Info>
            Responsive todo-list website. Uses localStorage to keep user data in
            browser memory.
          </Info>
        </Project>
        <Project>
          <a href="https://github.com/rosa-pastel/weather-app">
            <GithubIcon alt="GitHub" src={githubIcon?.src}></GithubIcon>
          </a>
          <Title href="https://rosa-pastel.github.io/weather-app/">
            Weather App
          </Title>
          <Image
            src={weather?.src}
            alt=""
            width={0}
            height={0}
            sizes={"100vw"}
            style={{ width: "100%", height: "auto" }}
          ></Image>
          <Info>
            Weather app that takes data from Open Weather API and displays it
            for the city of choice.
          </Info>
        </Project>
        <Project>
          <a href="https://github.com/rosa-pastel/tictactoe-2.0">
            <GithubIcon alt="GitHub" src={githubIcon?.src}></GithubIcon>
          </a>
          <Title href="https://rosa-pastel.github.io/tictactoe-2.0/">
            Tic Tac Toe
          </Title>
          <Image
            src={tictactoe?.src}
            alt=""
            width={0}
            height={0}
            sizes={"100vw"}
            style={{ width: "100%", height: "auto" }}
          ></Image>
          <Info>Tic-tac-toe game with a winter theme.</Info>
        </Project>
        <Project>
          <a href="https://github.com/rosa-pastel/etch-a-sketch">
            <GithubIcon alt="GitHub" src={githubIcon?.src}></GithubIcon>
          </a>
          <Title href="https://rosa-pastel.github.io/etch-a-sketch/">
            Etch-a Sketch
          </Title>
          <Image
            src={etch?.src}
            alt=""
            width={0}
            height={0}
            sizes={"100vw"}
            style={{ width: "100%", height: "auto" }}
          ></Image>
          <Info>Pixel art app with grid size and color options.</Info>
        </Project>
      </Work>
    </>
  );
}
