import styled from "styled-components";
import RadioGroup from "./RadioGroup";
import { ReactComponent as ExitSVG } from "../../assets/ExitSVG.svg";
import { useDispatch } from "react-redux";
import { toggleTrueFalseAction } from "../../store/popupReducer";

const ExitSvgStyle = styled(ExitSVG)`
  margin-left: auto;
  padding: 6px;
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
  margin-left: auto;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

const PopupHeaderStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const SortPopupStyle = styled.div`
  display: inline-block;
  position: relative;
  min-width: 330px;
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
        <PopupHeaderStyle>
          <PopupText>Сортировка</PopupText>
          <ExitSvgStyle
            onClick={() => dispatch(toggleTrueFalseAction(false))}
          />
        </PopupHeaderStyle>
        <RadioGroup />
      </SortPopupStyle>
    </FoggingStyle>
  );
}

export default SortPopup;
