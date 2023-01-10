import styled from "styled-components";
import { ReactComponent as PhoneSVG } from "../../assets/Phone.svg";

const PhoneStyle = styled(PhoneSVG)`
  margin-right: 14px;
`;

const PhoneNumberStyle = styled.div`
  display: flex;
  align-items: center;
`;

const PhoneLink = styled.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #050510;
  text-decoration: none;
  cursor: pointer;
`;

function PhoneNumber({ phone }) {
  return (
    <PhoneNumberStyle>
      <PhoneStyle />
      <PhoneLink href="#"> {phone} </PhoneLink>
    </PhoneNumberStyle>
  );
}

export default PhoneNumber;
