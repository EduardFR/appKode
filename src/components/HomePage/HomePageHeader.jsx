import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addClassActiveAction } from "../../store/selectedTabReducer";
import SearchInputForm from "./SearchInputForm";
import TabBar from "./TabBar";
import Title from "./Title";
import { tabs } from "../../helpers/constants/tabs";
import HomePageOffline from "./HomePageOffline";
import { useEffect, useState } from "react";

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px gray solid;
  row-gap: 20px;
`;

function HomePageHeader() {
  const dispatch = useDispatch();
  const selectTab = (name) => {
    dispatch(addClassActiveAction(name));
  };

  let [online, isOnline] = useState(navigator.onLine);

  const setOnline = () => {
    isOnline(true);
  };
  const setOffline = () => {
    isOnline(false);
  };

  useEffect(() => {
    window.addEventListener("offline", setOffline);
    window.addEventListener("online", setOnline);

    return () => {
      window.removeEventListener("offline", setOffline);
      window.removeEventListener("online", setOnline);
    };
  }, []);

  return (
    <HeaderStyle>
      {online ? (
        <>
          <Title /> <SearchInputForm />
        </>
      ) : (
        <HomePageOffline />
      )}
      <TabBar obj={tabs} selectTab={selectTab} />
    </HeaderStyle>
  );
}

export default HomePageHeader;
