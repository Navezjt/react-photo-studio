import React, { useState } from "react";
import styled from "styled-components";
import { FeatureRequest } from "../services/AnalyticsService";

type TabsProps = {
  height: string;
};

const StyledTabs = styled.div`
  width: 100%;
  height: ${(props: TabsProps) => props.height};
  display: flex;
  flex-direction: column;
  border: solid 1px var(--border);
  margin-bottom: 0.1rem;
  background-color: var(--panel);
  min-height: 3.2rem;
`;

const Header = styled.div`
  width: 100%;
  height: 2.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--expandable);
`;

type ItemProps = {
  active?: boolean;
};

const HeaderItem = styled.button`
  height: 100%;
  padding: 0 1.1rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${(props: ItemProps) =>
    props.active ? "var(--tab-text)" : "var(--tab-text-inactive)"};
  background-color: ${(props: ItemProps) =>
    props.active ? "var(--panel)" : "var(--expandable)"};
  border-right: solid 1px var(--border);
  border-bottom: solid 1px var(--border);
  border-bottom: ${(props: ItemProps) =>
    props.active ? "solid 1px var(--panel)" : "solid 1px var(--border)"};

  :hover {
    background-color: ${(props: ItemProps) =>
      props.active ? "var(--panel)" : "var(--tab-hover)"};
  }
`;

const MenuContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px var(--border);
`;

const Menu = styled.button`
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
  width: 1.76rem;
  margin-right: 0.3rem;
  border-radius: 0.1rem;

  border: solid 1px var(--expandable);
  :hover {
    background-color: var(--menu-hover-bg);
    border: solid 1px var(--close-hover);
  }
`;

const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: var(--menu-lines);
  margin-bottom: 0.1rem;
`;

export type TabType = {
  label: string;
  content: JSX.Element;
  implemented: boolean;
};

type Props = {
  tabs: TabType[];
  height: string;
};

const Tabs = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <StyledTabs height={props.height}>
      <Header>
        {props.tabs.map((tab: TabType, index: number) => (
          <HeaderItem
            onClick={() => {
              if (tab.implemented) setActiveIndex(index);
              else FeatureRequest("Windows/" + props.tabs[index].label);
            }}
            active={index === activeIndex}
          >
            {tab.label}
          </HeaderItem>
        ))}
        <MenuContainer>
          <div />
          <Menu onClick={() => FeatureRequest("Windows/Menu")}>
            <Line />
            <Line />
            <Line />
            <Line />
          </Menu>
        </MenuContainer>
      </Header>
      {props.tabs[activeIndex].content}
    </StyledTabs>
  );
};

export default Tabs;
