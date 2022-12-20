import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getSearchValueAction } from "../store/searchInputReducer";

const SearchStyle = styled.input`
  padding: 8px 12px;
  padding-left: 40px;
  width: 100%;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  border: none;
  background-color: #f7f7f8;
  border-radius: 16px;
  outline: none;
`;

function SearchInput() {
  const dispatch = useDispatch();

  return (
    <SearchStyle
      type="text"
      placeholder="введит имя, тег, почту..."
      onChange={(e) => dispatch(getSearchValueAction(e.target.value))}
    />
  );
}

export default SearchInput;
