import styled from "styled-components";

const TabStyle = styled.button`
  padding-bottom: 5px;

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
    font-weight: 600;
    color: black;
    border-bottom: solid #6534ff 2px;
  }
`;

function Tab({ onClick, name, active, id }) {
  return (
    <TabStyle
      disabled={active.selectedTab === id}
      className={active.selectedTab === id ? "active" : ""}
      onClick={onClick}
    >
      {name}
    </TabStyle>
  );
}

export default Tab;
