import styled from "styled-components";

export const Loader = styled.p`
  display: inline-block;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.4em;
  font-weight: 600;
  transform: scale(0.5);
  color: #121212;

  &:nth-child(1) {
    animation: hover 1s linear infinite;
  }

  &:nth-child(2) {
    animation: hover 1s linear infinite 0.125s;
  }

  &:nth-child(3) {
    animation: hover 1s linear infinite 0.25s;
  }

  &:nth-child(4) {
    animation: hover 1s linear infinite 0.375s;
  }

  &:nth-child(5) {
    animation: hover 1s linear infinite 0.5s;
  }

  &:nth-child(6) {
    animation: hover 1s linear infinite 0.675s;
  }

  &:nth-child(7) {
    animation: hover 1s linear infinite 0.75s;
  }

  @keyframes hover {
    0% {
      transform: scale(0.5);
      color: #121212;
      -webkit-text-stroke: 2px gray;
    }

    20% {
      transform: scale(1);
      color: pink;
      -webkit-text-stroke: 3px red;
      filter: drop-shadow(0 0 1px black) drop-shadow(0 0 1px black)
        drop-shadow(0 0 3px red) drop-shadow(0 0 5px red) hue-rotate(10turn);
    }

    50% {
      transform: scale(0.5);
      color: #121212;
      -webkit-text-stroke: 2px gray;
    }
  }
`;