import styled from "styled-components";
import ProfileAvatar from "./ProfileAvatar";
import { ReactComponent as Back } from "../../assets/Back.svg";
import { NavLink } from "react-router-dom";

const BackStyle = styled(Back)`
  position: absolute;
  top: 30px;
  left: 33px;
  font-size: 50px;
`;

const LinkStyle = styled(NavLink)`
  text-decoration: none;
`;

const PrifileHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;
  padding-bottom: 24px;
  background-color: #f7f7f8;
`;

const TagStyle = styled.div`
  align-self: center;
  ont-weight: 400;
  font-size: 17px;
  line-height: 22px;
  color: #97979b;
`;

const NameStyle = styled.h2`
  display: flex;
  column-gap: 4px;
  margin-top: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #050510;
`;

const DepartmentStyle = styled.div`
  margin-top: 12px;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #55555c;
`;

function ProfileHeader({ url, firstName, lastName, tag, department }) {
  return (
    <PrifileHeaderStyle>
      <LinkStyle to={"/"}>
        <BackStyle />
      </LinkStyle>
      <ProfileAvatar url={url} />
      <NameStyle>
        {firstName} {lastName}
        <TagStyle>{tag}</TagStyle>
      </NameStyle>
      <DepartmentStyle>{department}</DepartmentStyle>
    </PrifileHeaderStyle>
  );
}

export default ProfileHeader;
