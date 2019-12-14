import React from "react";
import styled from "styled-components";

const InputContent = styled.input`
  height: 3rem;

  font-size: 1rem;
  font-weight: lighter;
  outline: none;
  color: #fff;

  border: 0;
  border-bottom: solid 2px #113a65;

  margin-right: 1.25rem;
  padding-bottom: 4px;

  background-color: transparent;

  ::placeholder {
    font-size: 1rem;
    color: #adcbb8;
  }
`;

const Button = styled.button`
  opacity: 1;

  font-size: 1.5rem;

  padding: 8px 20px;
  margin: 0 2px;

  border: 2px solid #103a65;
  border-radius: 2px;

  cursor: pointer;

  background-color: #235d9c;
  color: #fff;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  height: 30%;
  width: 100%;
`;

const Input = props => (
  <Form onSubmit={props.weatherMethod}>
    <InputContent
      type="text"
      name="city"
      placeholder="Enter the name of the city"
    />
    <Button>Show weather</Button>
  </Form>
);

export default Input;
