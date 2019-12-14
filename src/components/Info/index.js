import React from "react";
import styled from "styled-components";
import img from "./polygon.jpg";

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  height: 100%;
  width: 50%;

  background: url(${img});
  background-blend-mode: multiply;
  background-color: #484747;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  border: 2px solid #1f1f1f;
  border-right: 2px solid #131e29;

  color: #000;

  & h2 {
    font-size: 3rem;
    color: #fff;
    padding-bottom: 1rem;
  }

  & p {
    color: #e4e4e4;
    font-weight: bold;
  }

  @media screen and (max-width: 950px) {
    height: 50%;
    width: 100%;

    & h2 {
      font-size: 2rem;
      color: #fff;
    }
  }
`;

const Info = () => (
  <InfoContainer>
    <div>
      <h2>Weather4U</h2>
      <p>Find out about the weather in your city!</p>
    </div>
  </InfoContainer>
);

export default Info;
