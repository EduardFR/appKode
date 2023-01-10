import { useSelector } from "react-redux";
import styled from "styled-components";

import Tab from "./Tab";

const TabBarStyle = styled.div`
  display: flex;
  column-gap: 24px;
  margin-left: 28px;
  padding-right: 28px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function TabBar({ obj, selectTab }) {
  const selectedTab = useSelector((state) => state.selectedTab);

  return (
    <TabBarStyle>
      {obj.map((data) => (
        <Tab
          key={data["key"]}
          onClick={() => selectTab(data["key"])}
          name={data["name"]}
          id={data["key"]}
          active={selectedTab}
        />
      ))}
    </TabBarStyle>
  );
}

export default TabBar;
