import React from "react";
import styled from "styled-components";

const MaterialSelect = styled.input`
  width: 50px;
  height: 50px;
  border-radius: 200rem;
  pointer-events: auto;
  margin: 0 0.5rem;
  border: 2px solid ${props => (props.active ? "#fff" : "transparent")};

  :focus {
    outline: 0;
    border: 2px solid "#fff";
  }
`;

const Row = styled.div`
  text-align: center;

  :last-child {
    margin-bottom: 2rem;
  }
`;

const Info = styled.p`
  font-size: 1.6rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

export default function MaterialSelector({ materials, onUpdateMaterial }) {
  return (
    <div>
      {Object.values(materials).map(material => (
        <Row key={material.name}>
          <Info>{material.name}</Info>
          {material.values.map(option => (
            <MaterialSelect
              type="image"
              src={option.imageUrl}
              alt={option.key}
              key={option.key}
              active={option.key === material.value.key}
              onClick={evt => {
                evt.preventDefault();
                onUpdateMaterial(material.name, option.key);
              }}
            />
          ))}
        </Row>
      ))}
    </div>
  );
}
