import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../../asyncAction/users";

import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";
import NotFoundProfile from "../NotFoundPage/NotFoundProfile";

const ProfileBorderStyle = styled.div``;

function ProfilePage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const selectedTab = useSelector((state) => state.selectedTab.selectedTab);

  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchUsers(selectedTab));
  }, [dispatch, selectedTab]);

  const user = users.find((user) => user.id.match(id));

  if (!user) {
    return <NotFoundProfile />;
  }

  return (
    <>
      {user && (
        <ProfileBorderStyle>
          <ProfileHeader
            url={user.avatarUrl}
            firstName={user.firstName}
            lastName={user.lastName}
            tag={user.userTag}
            department={user.department}
          />
          <ProfileBody birthday={user.birthday} phone={user.phone} />
        </ProfileBorderStyle>
      )}
    </>
  );
}

export default ProfilePage;
