import styled from "styled-components";
import SearchInputForm from "./SearchInputForm";
import TabBar from "./TabBar";
import Title from "./Title";

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px gray solid;
  row-gap: 20px;
  padding-bottom: 5px;
`;

function HomePageHeader() {
  return (
    <HeaderStyle>
      <Title />
      <SearchInputForm />
      <TabBar />
    </HeaderStyle>
  );
}

export default HomePageHeader;
