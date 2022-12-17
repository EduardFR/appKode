import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchUsers } from "../asyncAction/users";
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
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  console.log(users);

  dispatch(fetchUsers());

  return (
    <>
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <HomePageProfileStyle key={user.id}>
              <Avatar url={user.avatarUrl} />
              <NameStyle>
                {user.firstName} {user.lastName}
                <TagStyle>{user.userTag}</TagStyle>
              </NameStyle>
            </HomePageProfileStyle>
          ))}
        </>
      ) : (
        <div>пусто</div>
      )}
    </>
  );
}

export default HomePageProfile;
