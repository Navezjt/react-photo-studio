import React from "react";
import styled from "styled-components";
import arrow from "../../assets/svgs/navigation/arrow.svg";

const StyledDocumentFooter = styled.div`
  width: 100%;
  height: 1.6rem;
  display: flex;
  background-color: var(--sidebar);
`;

const Zoom = styled.div`
  height: 100%;
  width: 6.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--hover-bg);
  border-top: solid 1px var(--expandable);
  border-right: solid 1px var(--expandable);
  color: var(--input-text);
  font-size: 1rem;
`;

const DetailsContainer = styled.div`
  height: 100%;
  width: 17.4rem;
  display: flex;
  align-items: center;
  background-color: var(--panel);
  border-top: solid 1px var(--expandable);
  border-right: solid 1px var(--expandable);
`;

const Details = styled.button`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--label);
`;

const Button = styled.button`
  height: 100%;
  width: 1.3rem;
  border-top: solid 1px var(--panel);
  border-left: solid 1px var(--panel);

  :hover {
    background-color: var(--expandable);
    border-top: solid 1px var(--footer-button-border);
    border-left: solid 1px var(--footer-button-border);
  }
`;

const Arrow = styled.img`
  height: 0.5rem;
  transform: rotate(-90deg) translate(0.1rem, -0.1rem);
`;

const DocumentFooter = () => {
  return (
    <StyledDocumentFooter>
      <Zoom>100%</Zoom>
      <DetailsContainer>
        <Details>7009 px x 5009 px (300 ppi)</Details>
        <Button>
          <Arrow src={arrow} />
        </Button>
      </DetailsContainer>
    </StyledDocumentFooter>
  );
};

export default DocumentFooter;
