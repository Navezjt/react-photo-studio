import React from "react";
import styled from "styled-components";
import { LayerType } from "../../state/layersSlice";

type OutlineProps = {
  active: boolean;
};

const Outline = styled.div`
  position: relative;
  border: solid 1px
    ${(props: OutlineProps) => (props.active ? "var(--white)" : "none")};
  padding: 1px;
`;

const BreakLeft = styled.div`
  background-color: var(--context-hover);
  position: absolute;
  left: -2px;
  height: 33%;
  width: 3px;
  top: 33%;
`;

const BreakRight = styled.div`
  background-color: var(--context-hover);
  position: absolute;
  right: -2px;
  height: 33%;
  width: 3px;
  top: 33%;
`;

const BreakTop = styled.div`
  background-color: var(--context-hover);
  position: absolute;
  top: -2px;
  width: 33%;
  height: 3px;
  left: 33%;
`;

const BreakBottom = styled.div`
  background-color: var(--context-hover);
  position: absolute;
  bottom: -2px;
  width: 33%;
  height: 3px;
  left: 33%;
`;

const Canvas = styled.div`
  height: 3rem;
  width: 3.8rem;
  background-color: white;
  border: solid 1px var(--layer-border);
`;

type Props = {
  layer: LayerType;
};

const LayerCanvas = (props: Props) => {
  return (
    <Outline active={props.layer.active}>
      {props.layer.active && (
        <>
          <BreakLeft />
          <BreakTop />
          <BreakRight />
          <BreakBottom />
        </>
      )}
      <Canvas />
    </Outline>
  );
};

export default LayerCanvas;
