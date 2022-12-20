import styled from "styled-components";

const TitleStyle = styled.h1`
  font-size: 24px;
  line-height: 28px;
  margin-top: 16px;
  margin-left: 24px;
  margin-right: auto;
`;

function Title() {
  return <TitleStyle>Поиск</TitleStyle>;
}

export default Title;
