"use client";
import { SyntheticEvent, useEffect } from "react";
import { RSVPStateType } from "../../reducer/RSVPInit";
import { CheckList } from "../../functions/checkList";

type propType = {
  state: RSVPStateType;
  dispatch: Function;
};

const FormLock = ({ state, dispatch }: propType) => {
  const LockHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    const id = e.currentTarget.id;
    const data = e.currentTarget.value;
    dispatch({ type: "lockInput", data, id });
  };

  const UnlockHandler = () => {
    dispatch({ type: "lockKey", data: true });
  };

  useEffect(() => {
    if (state.lockKey) {
      CheckList(state, dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, state.lockKey]);

  return (
    <>
      <div className="input-field">
        <label>Full name</label>
        <input
          type="text"
          name="rsvpname"
          id="rsvpname"
          onChange={LockHandler}
        />
       {state.invalid.nameLock &&  <p style={{color: 'red'}}>{"Looks like we can't find your name. Please make sure that you entered your full name."}</p>}
      </div>
      <button onClick={UnlockHandler} disabled={state.lockKey}>
        {state.lockKey ? "Checking..." : "Find your invitation"}
      </button>
    </>
  );
};

export default FormLock;
