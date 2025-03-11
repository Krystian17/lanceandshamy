import { SyntheticEvent } from "react";
import { RSVPStateType } from "../../reducer/RSVPInit";

import "../../styles/rsvp.scss";

type propType = {
  state: RSVPStateType;
  dispatch: Function;
};

const BasicForm = ({ state, dispatch }: propType) => {
  const BasicHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    const id = e.currentTarget.id;
    const data = e.currentTarget.value;
    dispatch({ type: "rsvpInput", data, id });
  };

  return (
    <div className="basic-form">
      <div className="input-field">
        <label>
          First Name <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          onChange={BasicHandler}
        />
        {state.invalid.firstname && <p className="warn">Invalid Name</p>}
      </div>
      <div className="input-field">
        <label>
          Last Name <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          onChange={BasicHandler}
        />
        {state.invalid.lastname && <p className="warn">Invalid Name</p>}
      </div>
      <div className="input-field">
        <label>
          Email Address <span style={{ color: "red" }}>*</span>
        </label>
        <input type="text" name="email" id="email" onChange={BasicHandler} />
        {state.invalid.email && <p className="warn">Invalid Email</p>}
      </div>
      <div className="input-field">
        <label>
          Contact Number <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="tel"
          name="contact"
          id="contact"
          onChange={BasicHandler}
          inputMode="numeric"
        />
        {state.invalid.contact && (
          <p className="warn">Invalid Contact Number</p>
        )}
      </div>
      <div className="radioForm">
        <div className="radioField">
          <input
            type="radio"
            id="areYouAttending"
            name="areYouAttending"
            value="true"
            defaultChecked={state.rsvpDetails.areYouAttending}
            onChange={BasicHandler}
          />
          <p>{"I'm Going"}</p>
        </div>
        <div className="radioField">
          <input
            type="radio"
            id="areYouAttending"
            name="areYouAttending"
            value="false"
            defaultChecked={!state.rsvpDetails.areYouAttending}
            onChange={BasicHandler}
          />
          <p>Not going</p>
        </div>
      </div>
      <div className="input-field">
        <label>
          Number of people attending <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="number"
          name="numberOfAttendees"
          id="numberOfAttendees"
          min={0}
          defaultValue={0}
          onChange={BasicHandler}
          inputMode="numeric"
        />
      </div>
    </div>
  );
};

export default BasicForm;
