import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchUsers } from "../asyncAction/users";
import HomePageProfile from "./HomePageProfile";

const HomePageProfileListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 22px 16px;
  row-gap: 20px;
`;

function HomePageProfileList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const searchInput = useSelector((state) => state.searchInput.value);
  // console.log(users.map((user) => user));
  // console.log(searchInput.value);
  const filterUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().match(searchInput.toLowerCase()) ||
      user.lastName.toLowerCase().match(searchInput.toLowerCase()) ||
      user.userTag.toLowerCase().match(searchInput.toLowerCase())
  );

  console.log(filterUsers);

  useEffect(() => {
    dispatch(fetchUsers("all"));
  }, []);

  return (
    <HomePageProfileListStyle>
      <HomePageProfile users={filterUsers} />
    </HomePageProfileListStyle>
  );
}

export default HomePageProfileList;
