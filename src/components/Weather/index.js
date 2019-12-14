import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 70%;
  width: 100%;

  color: #fff;
`;

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & p {
    margin: 1rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    & p {
      font-size: 1rem;
    }
  }
`;

const Error = styled.p`
  color: rgb(190, 190, 190);
  font-weight: bold;
  font-size: 2rem;
`;

const Weather = props => (
  <Container className="weather-content">
    {props.city && (
      <WeatherContainer>
        <p>
          {" "}
          Location: {props.city}, {props.country}{" "}
        </p>
        <p> Temperature: {props.temp}	℃ </p>
        <p> Pressure: {props.pressure} </p>
        <p> Sunset: {props.sunset} AM </p>
      </WeatherContainer>
    )}
    <Error className="error"> {props.error} </Error>
  </Container>
);

export default Weather;
