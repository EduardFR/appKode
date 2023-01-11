import styled from "styled-components";

const AvatarStyle = styled.img`
  border-radius: 50px;
  padding: 3px;
  &:hover {
    background-color: #6534ff;
  }
`;

function Avatar({ url }) {
  return <AvatarStyle width="72" height="72" src={url} alt="" loading="lazy" />;
}

export default Avatar;
