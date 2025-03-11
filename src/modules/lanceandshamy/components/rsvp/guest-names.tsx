import { RSVPStateType } from "../../reducer/RSVPInit";
import { ChangeEvent } from "react";

type propType = {
  state: RSVPStateType;
  dispatch: Function;
};

const GuestNames = ({ state, dispatch }: propType) => {
  const UpdateHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const data = e.currentTarget.value;
    dispatch({ type: "updateGuest", data,});
  };

  return (
    <div className="guest-form">
      <label>Guest Names</label>
      <div className="guest-container">
        <textarea
          onChange={UpdateHandler}
          name="guestNames"
          //placeholder="If you're going alone, just type none"
        />
      </div>
    </div>
  );
};

export default GuestNames;
