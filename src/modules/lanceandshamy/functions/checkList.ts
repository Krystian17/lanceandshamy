import axios from "axios";
import { RSVPStateType } from "../reducer/RSVPInit";

export const CheckList = (state: RSVPStateType, dispatch: Function) => {
  dispatch({type:'validate', data: false, id: 'nameLock'})
  axios({
    method: "POST",
    url: "/api/check-list",
    data: {name: state.nameLock},
  })
    .then((res: any) => {
      //console.log(res.data);
      dispatch({ type: "lockKey", data: false });
      dispatch({ type: "formLock", data: false });
    })
    .catch((err: any) => {
      dispatch({ type: "lockKey", data: false });
      dispatch({type:'validate', data: true, id: 'nameLock'})
      console.log(err.response);
    });
};
