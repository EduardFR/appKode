import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getSearchValueAction,
  getStateValueAction,
} from "../../store/searchInputReducer";
import { useMemo } from "react";
import { debounce } from "lodash";

const SearchStyle = styled.input`
  padding: 8px 12px;
  padding-left: 40px;
  width: 100%;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  border: none;
  background-color: #f7f7f8;
  border-radius: 14px;
  outline: none;
  &::placeholder {
    font-weight: 500;
    color: #c3c3c6;
  }
`;

function SearchInput() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.searchInput.state);
  const updateSearchValue = useMemo(
    () =>
      debounce((e) => {
        dispatch(getSearchValueAction(e));
      }, 500),
    [dispatch]
  );

  const onChange = (e) => {
    dispatch(getStateValueAction(e.target.value));
    updateSearchValue(e.target.value);
  };

  return (
    <SearchStyle
      type="text"
      placeholder="Введите имя, тег, почту..."
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchInput;
