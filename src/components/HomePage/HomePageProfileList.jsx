import styled from "styled-components";
import HomePageProfile from "./HomePageProfile";

const HomePageProfileListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px 16px;
  row-gap: 20px;
  padding-bottom: 5px;
`;

function HomePageProfileList() {
  return (
    <HomePageProfileListStyle>
      <HomePageProfile />
    </HomePageProfileListStyle>
  );
}

export default HomePageProfileList;
