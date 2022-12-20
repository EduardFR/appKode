import styled from "styled-components";

const AvatarStyle = styled.img`
  background: linear-gradient(90deg, #f3f3f6 0%, #fafafa 100%);
  border-radius: 200px;
`;

function Avatar({ url }) {
  return (
    <AvatarStyle
      width="72"
      height="72"
      src={url}
      alt=""
      className=""
      loading="lazy"
    />
  );
}

export default Avatar;
