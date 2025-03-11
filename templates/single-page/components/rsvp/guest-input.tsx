import MinusFillIcon from "@/Icons/MinusFill";
import { RSVPStateType } from "../../reducer/RSVPInit";
import { ChangeEvent } from "react";

type propType = {
  state: RSVPStateType;
  dispatch: Function;
  UpdateHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  index: number;
};

const GuestInput = ({ state, UpdateHandler, index, dispatch }: propType) => {
  const RemoveHandler = ()=>{
    dispatch({type:'removeGuest', rank: index})
  }

  return (
    <div className="guest">
      <label>Guest Name</label>
      <div className="guest-input">
        <input
          data-customindex={index}
          type="text"
          value={state.rsvpDetails.guestNames[index].name}
          onChange={UpdateHandler}
        />
        <button onClick={RemoveHandler}>
          <MinusFillIcon
            fill={"#CBCBCB"}
            height={"1.625rem"}
            width={"1.625rem"}
          />
        </button>
      </div>
    </div>
  );
};

export default GuestInput;
