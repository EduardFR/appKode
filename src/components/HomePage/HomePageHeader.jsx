import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchUsers } from "../asyncAction/users";
import { addClassActiveAction } from "../store/activeReducer";
import SearchInputForm from "./SearchInputForm";
import TabBar from "./TabBar";
import Title from "./Title";

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px gray solid;
  row-gap: 20px;
`;

const tabs = [
  {
    key: "all",
    name: "Все",
  },
  {
    key: "design",
    name: "Designers",
  },
  {
    key: "analytics",
    name: "Analysts",
  },
  {
    key: "management",
    name: "Managers",
  },
  {
    key: "ios",
    name: "iOS",
  },
  {
    key: "android",
    name: "Android",
  },
];

function HomePageHeader() {
  const dispatch = useDispatch();
  const selectTab = (name) => {
    dispatch(addClassActiveAction(name));
    dispatch(fetchUsers(name));
  };

  return (
    <HeaderStyle>
      <Title />
      <SearchInputForm />
      <TabBar obj={tabs} selectTab={selectTab} />
    </HeaderStyle>
  );
}

export default HomePageHeader;
