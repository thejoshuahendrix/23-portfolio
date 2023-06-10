import React from "react";
import styled from "styled-components";
import { SkillsBanner } from "../skills/SkillsBanner";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 50%;
  flex-wrap: wrap;
  line-height: 2;
  gap: 20px;

  align-items: center;
  p {
    font-size: 1.5rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 100%;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <p>
        Welcome to my exceptional web development portfolio. I am a highly
        skilled software engineer driven by an unwavering commitment to
        excellence. With a passion for continuous growth, I am actively engaged
        in various cutting-edge projects while constantly seeking new
        opportunities to expand my knowledge and expertise.
      </p>
      <p>
        My expertise spans a multitude of programming languages, but I excel in
        leveraging the power of React and Typescript to craft exceptional web
        experiences. Additionally, I possess comprehensive proficiency in
        Python, Go, Rust, Solidity, and Java, which allows me to tackle diverse
        technological challenges with ease.
      </p>
      <p>
        As a seasoned Senior Application Developer, I have demonstrated my
        ability to deliver superior solutions and drive impactful results. With
        a track record of excellence, I am currently seeking opportunities at
        the senior level and beyond, where I can contribute my wealth of
        expertise and lead transformative initiatives. Furthermore, I am open to
        engaging in contract work, enabling me to provide my skills and insights
        to a wide range of projects.
      </p>
      <p>
        Join me on this journey of innovation and let's create remarkable
        digital experiences together. Explore my portfolio and witness firsthand
        the caliber of my work and my unwavering dedication to pushing the
        boundaries of web development.
      </p>

      <SkillsBanner />
    </HomeWrapper>
  );
};

export default Home;
