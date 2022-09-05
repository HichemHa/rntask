import {GET_USERS,GET_USERS_SUCCESS,GET_USERS_FAIL} from "../constants"

import axios from "axios";

export const getCharactesList = (param) => async (dispatch) => {
    await dispatch({ type: GET_USERS });
    let x = param || 0
    try {
      const reqResult = await axios.get(`https://dummyjson.com/users`);
      dispatch({ type: GET_USERS_SUCCESS, payload: {d:reqResult.data} });
  
    } catch (error) {
      dispatch({ type: GET_USERS_FAIL, payload: error })
    }
  }


