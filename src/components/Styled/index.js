import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(45, 176, 224, 1);
  background: -moz-linear-gradient(
    45deg,
    rgba(45, 176, 224, 1) 0%,
    rgba(96, 40, 168, 1) 100%
  );
  background: -webkit-gradient(
    left bottom,
    right top,
    color-stop(0%, rgba(45, 176, 224, 1)),
    color-stop(100%, rgba(96, 40, 168, 1))
  );
  background: -webkit-linear-gradient(
    45deg,
    rgba(45, 176, 224, 1) 0%,
    rgba(96, 40, 168, 1) 100%
  );
  background: -o-linear-gradient(
    45deg,
    rgba(45, 176, 224, 1) 0%,
    rgba(96, 40, 168, 1) 100%
  );
  background: -ms-linear-gradient(
    45deg,
    rgba(45, 176, 224, 1) 0%,
    rgba(96, 40, 168, 1) 100%
  );
  background: linear-gradient(
    45deg,
    rgba(45, 176, 224, 1) 0%,
    rgba(96, 40, 168, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2db0e0', endColorstr='#6028a8', GradientType=1 );
`;

const Main = styled.div`
  display: flex;

  height: 90vh;
  width: 90vw;

  margin: 0 auto;

  background-color: #2a6bb1;

  box-shadow: 0px 2px 80px -20px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 100%;
  width: 50%;

  border-top: 2px solid #113a65;
  border-bottom: 2px solid #113a65;
  border-right: 2px solid #113a65;

  @media screen and (max-width: 950px) {
    height: 50%;
    width: 100%;
  }
`;

export { Wrapper, Main, Form };
