import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchUsers } from "../asyncAction/users";
import HomePageProfile from "./HomePageProfile";

const HomePageProfileListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 22px 16px 0;
  row-gap: 20px;
`;

function HomePageProfileList() {
  const _ = require("lodash");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const searchInput = useSelector((state) => state.searchInput.value);
  const selectedTab = useSelector((state) => state.selectedTab.selectedTab);
  const value = useSelector((state) => state.popup.value);

  const sortUsersName = _.sortBy(users, ["firstName", "lastName"]);
  const sortUsersbirthbay = _.sortBy(users, ["birthday"]);

  let sortUsers = [];

  value === "alphabet"
    ? (sortUsers = sortUsersName)
    : (sortUsers = sortUsersbirthbay);

  const filterUsers = sortUsers.filter(
    (user) =>
      user.firstName.toLowerCase().match(searchInput.toLowerCase()) ||
      user.lastName.toLowerCase().match(searchInput.toLowerCase()) ||
      user.userTag.toLowerCase().match(searchInput.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchUsers(selectedTab));
  }, []);

  return (
    <HomePageProfileListStyle>
      <HomePageProfile users={filterUsers} />
    </HomePageProfileListStyle>
  );
}

export default HomePageProfileList;
