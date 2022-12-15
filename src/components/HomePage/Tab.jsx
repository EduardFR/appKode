import styled from "styled-components";

const TabStyle = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #97979b;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

function Tab() {
  return <TabStyle>Кнопка</TabStyle>;
}

export default Tab;
