import HomePageHeader from "./HomePageHeader";
import HomePageProfileList from "./HomePageProfileList";
import styled from "styled-components";

const HomeStyle = styled.div`
  max-width: 85%;
  margin: 30px auto 0;
  border-radius: 20px;
`;

function HomePage() {
  return (
    <HomeStyle>
      <HomePageHeader />
      <HomePageProfileList />
    </HomeStyle>
  );
}

export default HomePage;
