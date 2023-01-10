import { downloadUsersAction } from "../store/usersReducer";
import axios from "axios";

export const fetchUsers = (example = "all") => {
  return async (dispatch) => {
    if (window.navigator.onLine) {
      let cache = JSON.parse(localStorage.getItem("users_" + example));
      if (cache && new Date().getTime() <= cache.expiry) {
        let cachedUser = cache.data;

        dispatch(downloadUsersAction(cachedUser));
      } else {
        axios
          .get(
            "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=" +
              example
          )
          .then((response) => {
            dispatch(downloadUsersAction(response.data.items));
            return response;
          })
          .then((response) =>
            localStorage.setItem(
              "users_" + example,
              JSON.stringify({
                data: response.data.items,
                expiry: new Date().getTime() + 1000 * 60 * 5,
              })
            )
          )
          .catch((err) => console.error(err));
      }
    } else {
      let cache = JSON.parse(localStorage.getItem("users_" + example));

      if (cache && cache.data) {
        let cachedUser = cache.data;

        dispatch(downloadUsersAction(cachedUser));
      }
    }
  };
};
