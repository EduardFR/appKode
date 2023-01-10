import styled from "styled-components";

const AvatarStyle = styled.img`
  background: linear-gradient(90deg, #f3f3f6 0%, #fafafa 100%);
  border-radius: 50px;
  &:hover {
    outline: 3px solid #6534ff;
    outline-offset: -3px;
  }
`;

function Avatar({ url }) {
  return <AvatarStyle width="72" height="72" src={url} alt="" loading="lazy" />;
}

export default Avatar;
