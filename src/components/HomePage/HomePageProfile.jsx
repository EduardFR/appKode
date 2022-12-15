import styled from "styled-components";
import Avatar from "./Avatar";

const HomePageProfileStyle = styled.div`
  display: flex;
`;
const NameStyle = styled.h2`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #050510;
`;
const TagStyle = styled.p`
  margin-left: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #97979b;
`;

function HomePageProfile() {
  return (
    <HomePageProfileStyle>
      <Avatar />
      <NameStyle>
        Имя Фамилия
        <TagStyle>tag</TagStyle>
      </NameStyle>
    </HomePageProfileStyle>
  );
}

export default HomePageProfile;
