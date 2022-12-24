import styled from "styled-components";

const AvatarStyle = styled.img`
  border-radius: 64px;

  filter: drop-shadow(0px 1px 5px rgba(22, 30, 52, 0.039))
    drop-shadow(0px 8px 12px rgba(22, 30, 52, 0.08));
`;

function ProfileAvatar({ url }) {
  return (
    <AvatarStyle
      width="104"
      height="104"
      src={url}
      alt=""
      className=""
      loading="lazy"
    />
  );
}

export default ProfileAvatar;
