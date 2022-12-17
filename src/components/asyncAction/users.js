import { useEffect } from "react";
import { addManyUsersAction } from "../store/usersReducer";

export const fetchUsers = () => {
  return function (dispatch) {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Prefer: "code=200, dynamic=true",
      },
    };

    useEffect(() => {
      fetch(
        "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users",
        options
      )
        .then((response) => response.json())
        .then((response) => dispatch(addManyUsersAction(response.items)))
        .catch((err) => console.error(err));
    }, []);
  };
};
