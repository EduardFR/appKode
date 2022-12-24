import styled from "styled-components";
import { ReactComponent as PhoneSVG } from "../../assets/Phone.svg";

const PhoneStyle = styled(PhoneSVG)`
  margin-right: 14px;
`;

const PhoneNumberStyle = styled.div`
  align-self: center;
`;

function PhoneNumber({ phone }) {
  return (
    <PhoneNumberStyle>
      <PhoneStyle />
      {phone}
    </PhoneNumberStyle>
  );
}

export default PhoneNumber;
