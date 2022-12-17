import styled from "styled-components";

const TitleStyle = styled.h1`
  font-size: 24px;
  line-height: 28px;
  margin-top: 15px;
  margin-left: 16px;
`;

function Title() {
  return <TitleStyle>Поиск</TitleStyle>;
}

export default Title;
