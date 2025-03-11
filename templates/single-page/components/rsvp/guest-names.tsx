import { RSVPStateType } from "../../reducer/RSVPInit";
import MinusFillIcon from "@/Icons/MinusFill";
import AddIcon from "@/Icons/Add";
import GuestInput from "./guest-input";
import { ChangeEvent, MouseEventHandler, SyntheticEvent } from "react";

type propType = {
  state: RSVPStateType;
  dispatch: Function;
};

const GuestNames = ({ state, dispatch }: propType) => {
  const UpdateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const data = e.currentTarget.value;
    const rank = parseInt(e.target.getAttribute("data-customindex")!);

    dispatch({ type: "updateGuest", data, rank });
  };

  const AddHandler = () => {
    dispatch({ type: "addGuest" });
  };

  return (
    <div className="guest-form">
      <label>Guest Names</label>
      <div className="guest-container">
        {state.rsvpDetails.guestNames.map((guest, index) => (
          <GuestInput
            state={state}
            dispatch={dispatch}
            UpdateHandler={UpdateHandler}
            key={index}
            index={index}
          />
        ))}
      </div>
      <button onClick={AddHandler}>
        <AddIcon fill={"black"} height={"1.875rem"} width={"1.875rem"} /> ADD
        GUEST
      </button>
    </div>
  );
};

export default GuestNames;
