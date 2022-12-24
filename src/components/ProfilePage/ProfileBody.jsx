import styled from "styled-components";
import Birthday from "./Birthday";
import PhoneNumber from "./PhoneNumber";
import YearsOld from "./YearsOld";

const ProfileBodyStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileStringStyle = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: solid #f7f7f8 1px;
  margin: 0 16px;
  height: 74px;
`;

function ProfileBody({ birthday, phone }) {
  return (
    <ProfileBodyStyle>
      <ProfileStringStyle>
        <Birthday birthday={birthday} /> <YearsOld birthday={birthday} />
      </ProfileStringStyle>
      <ProfileStringStyle>
        <PhoneNumber phone={phone} />
      </ProfileStringStyle>
    </ProfileBodyStyle>
  );
}

export default ProfileBody;
