import { SlMagnifier } from "react-icons/sl";
import { ReactComponent as ListUI } from "../../assets/ListUI.svg";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import { useDispatch } from "react-redux";
import { toggleTrueFalseAction } from "../../store/popupReducer";

const ListStyle = styled(ListUI)`
  fill: #c3c3c6;
`;

const ListBoxStyle = styled.button`
  align-self: center;
  padding: 8px 14px;
  background: none;
  border: none;
  cursor: pointer;
  &:hover svg {
    fill: #6534ff;
  }
`;

const SearchInputStyle = styled.div`
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
  background-color: #f7f7f8;
  border-radius: 16px;
`;
const Magnifier = styled.div`
  position: absolute;
  padding: 8px 14px;
  color: #c3c3c6;
  font-size: 20px;
`;

function SearchInputForm() {
  const dispatch = useDispatch();

  return (
    <SearchInputStyle>
      <Magnifier>
        <SlMagnifier />
      </Magnifier>
      <SearchInput />
      <ListBoxStyle onClick={() => dispatch(toggleTrueFalseAction(true))}>
        <ListStyle />
      </ListBoxStyle>
    </SearchInputStyle>
  );
}

export default SearchInputForm;
