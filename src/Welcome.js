import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  padding-top: 15%;
  text-align: center;
  height: 100%;
  pointer-events: none;
  font-family: Helvetica, Arial, sans-serif;
`;

const Button = styled.button`
  pointer-events: auto;
  background-color: #4d9cff;
  border: 1px solid #448ae2;
  border-radius: 2px;
  color: #fff;
  display: inline-block;
  font-size: 0.85rem;
  height: 2.2rem;
  line-height: 2.2rem;
  letter-spacing: 0.05rem;
  padding: 0 1.5rem;
  margin-top: 1rem;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
`;

const List = styled.ol`
  list-style-type: none;
  padding: 0;
`;

const Item = styled.li`
  margin-bottom: 0.6rem;
`;

export default function Welcome(props) {
  return (
    <Wrapper>
      <h2>Mammoth Chair</h2>
      <img
        width="256"
        height="256"
        src="https://api.viewar.com/model/downloadImage/display:1/size:large/id:65343"
      />
      <h3>Instructions</h3>
      <List>
        <Item>Start the AR Mode</Item>
        <Item>Scan the environment</Item>
        <Item>Move the chair</Item>
        <Item>Pick your favourite materials</Item>
      </List>
      <Button onClick={props.onClose}>Start AR Mode</Button>
    </Wrapper>
  );
}
