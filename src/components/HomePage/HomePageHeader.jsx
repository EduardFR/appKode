import styled from "styled-components";
import SearchInput from "./SearchInput";
import TabBar from "./TabBar";
import Title from "./Title";

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px gray solid;
  margin: 15px 16px 0;
  row-gap: 20px;
  padding-bottom: 5px;
`;

function HomePageHeader() {
  return (
    <HeaderStyle>
      <Title />
      <SearchInput />
      <TabBar />
    </HeaderStyle>
  );
}

export default HomePageHeader;
