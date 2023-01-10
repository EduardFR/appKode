import styled from "styled-components";
import RadioGroup from "./RadioGroup";
import { ReactComponent as ExitSVG } from "../../assets/ExitSVG.svg";
import { useDispatch } from "react-redux";
import { toggleTrueFalseAction } from "../../store/popupReducer";

const ExitSvgStyle = styled(ExitSVG)`
  padding: 6px;
  margin-left: 80px;
  background-color: #f7f7f8;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: #6534ff;
  }
`;

const FoggingStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(5, 5, 16, 0.16);
`;

const PopupText = styled.div`
  display: inline-block;
  margin-left: 120px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

const SortPopupStyle = styled.div`
  position: absolute;
  left: calc(50% - 373px / 2 + 0.5px);
  top: calc(50% - 192px / 2);
  border-radius: 20px;
  padding: 24px 23px 28px 18px;
  background-color: white;
`;

function SortPopup() {
  const dispatch = useDispatch();

  return (
    <FoggingStyle>
      <SortPopupStyle>
        <PopupText>Сортировка</PopupText>
        <ExitSvgStyle onClick={() => dispatch(toggleTrueFalseAction(false))} />
        <RadioGroup />
      </SortPopupStyle>
    </FoggingStyle>
  );
}

export default SortPopup;
