import { addManyUsersAction } from "../store/usersReducer";

export const fetchUsers = (example) => {
  return function (dispatch) {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(
      "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=" +
        example,
      options
    )
      .then((response) => response.json())
      .then((response) => dispatch(addManyUsersAction(response.items)))
      .catch((err) => console.error(err));
  };
};
