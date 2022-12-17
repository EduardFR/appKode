import styled from "styled-components";

const TabStyle = styled.button`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #97979b;
  cursor: pointer;
  background: none;
  border: none;
  &:hover {
    color: black;
  }
  &.active {
    text-decoration: underline #6534ff;
  }
`;

function Tab() {
  return <TabStyle>Кнопка</TabStyle>;
}

export default Tab;
