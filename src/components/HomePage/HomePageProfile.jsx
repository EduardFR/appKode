import styled from "styled-components";
import { ReactComponent as SearchMagnifer } from "../../assets/magnifying.svg";
import Avatar from "./Avatar";

const HomePageProfileStyle = styled.div`
  display: flex;
`;

const NoUsersPageStyle = styled.div`
  display: flex;
  flex-direction: column;

  margin: 140px auto 0;
`;

const NoUsersMagnifer = styled(SearchMagnifer)`
  margin: auto;
  margin-bottom: 8px;
`;

const NoUsersTitleStyle = styled.h2`
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  color: #050510;
  text-align: center;
  margin-bottom: 12px;
`;

const NoUsersContentStyle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #97979b;
`;

const NameStyle = styled.h2`
  display: flex;
  column-gap: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #050510;
`;
const TagStyle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #97979b;
`;

const DepartmentStyle = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #55555c;
`;

const UserStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 16px;
`;

function HomePageProfile({ users }) {
  return (
    <>
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <HomePageProfileStyle key={user.id}>
              <Avatar url={user.avatarUrl} />
              <UserStyle>
                <NameStyle>
                  {user.firstName} {user.lastName}
                  <TagStyle>{user.userTag}</TagStyle>
                </NameStyle>

                <DepartmentStyle>{user.department}</DepartmentStyle>
              </UserStyle>
            </HomePageProfileStyle>
          ))}
        </>
      ) : (
        <NoUsersPageStyle>
          <NoUsersMagnifer />
          <NoUsersTitleStyle>Мы никого не нашли</NoUsersTitleStyle>
          <NoUsersContentStyle>
            Попробуй скорректировать запрос
          </NoUsersContentStyle>
        </NoUsersPageStyle>
      )}
    </>
  );
}

export default HomePageProfile;
