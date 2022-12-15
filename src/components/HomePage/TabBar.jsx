import styled from "styled-components";
import Tab from "./Tab";

const TabBarStyle = styled.div`
  display: flex;
  column-gap: 24px;
`;

function TabBar() {
  return (
    <TabBarStyle>
      <Tab />
      <Tab />
      <Tab />
      <Tab />
      <Tab />
    </TabBarStyle>
  );
}

export default TabBar;
