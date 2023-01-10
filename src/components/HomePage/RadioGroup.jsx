import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  sortRadioValueAction,
  toggleTrueFalseAction,
} from "../../store/popupReducer";

const RadioGroupStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 35px;
  row-gap: 40px;
`;

const RadioLabelStyle = styled.label`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`;

const RadioButtonStyle = styled.input`
  -webkit-appearance: none;
  margin-right: 14px;
  border: 2px solid #6534ff;
  border-radius: 50%;
  padding: 10px;

  &:hover {
    outline: 8px solid #6534ff;
    outline-offset: -8px;
  }
  &:checked {
    outline: 8px solid #6534ff;
    outline-offset: -8px;
  }
`;

function RadioGroup() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.popup.value);

  return (
    <RadioGroupStyle>
      <RadioLabelStyle>
        <RadioButtonStyle
          onClick={() => dispatch(toggleTrueFalseAction(false))}
          onChange={() => dispatch(sortRadioValueAction("alphabet"))}
          checked={value === "alphabet"}
          type="radio"
          value="alphabet"
          name="sort"
        />
        По алфавиту
      </RadioLabelStyle>

      <RadioLabelStyle>
        <RadioButtonStyle
          onClick={() => dispatch(toggleTrueFalseAction(false))}
          onChange={() => dispatch(sortRadioValueAction("birthday"))}
          checked={value === "birthday"}
          type="radio"
          value="birthday"
          name="sort"
        />
        По дню рождения
      </RadioLabelStyle>
    </RadioGroupStyle>
  );
}

export default RadioGroup;
