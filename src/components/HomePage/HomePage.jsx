import HomePageHeader from "./HomePageHeader";
import HomePageProfileList from "./HomePageProfileList";
import styled from "styled-components";
import SortPopup from "./SortPopup";
import { useSelector } from "react-redux";

const HomeStyle = styled.div`
  padding-bottom: 22px;
`;

function HomePage() {
  const toggle = useSelector((state) => state.popup.toggle);

  return (
    <HomeStyle>
      {toggle ? <SortPopup /> : ""}
      <HomePageHeader />
      <HomePageProfileList />
    </HomeStyle>
  );
}

export default HomePage;
