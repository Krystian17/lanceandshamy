import axios from "axios";
import { RSVPStateType } from "../reducer/RSVPInit";

export const SendRSVP = (client: string, state:RSVPStateType, dispatch: Function) => {
  const data = state.rsvpDetails
  axios({
    method: "POST",
    url: `/api/emailtest`,
    data
  })
    .then((res: any) => {
      dispatch({ type: "submitKey", data: false });
      dispatch({type:'modalKey', data: true})
      //console.log(res.data);
    })
    .catch((err: any) => {
      console.log(err);
    });
};
