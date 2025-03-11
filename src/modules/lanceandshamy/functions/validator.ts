import { RSVPStateType } from "../reducer/RSVPInit";

export const Validator = (state: RSVPStateType, dispatch: Function) => {
  console.log("Validating...");
  if (
    /\d/.test(state.rsvpDetails.firstname) ||
    state.rsvpDetails.firstname.length === 0
  ) {
    dispatch({ type: "validate", id: "firstname", data: true });
  } else {
    dispatch({ type: "validate", id: "firstname", data: false });
  }

  if (
    /\d/.test(state.rsvpDetails.lastname) ||
    state.rsvpDetails.lastname.length === 0
  ) {
    dispatch({ type: "validate", id: "lastname", data: true });
  } else {
    dispatch({ type: "validate", id: "lastname", data: false });
  }

  if (
    !/\S+@\S+\.\S+/.test(state.rsvpDetails.email) ||
    state.rsvpDetails.email === ""
  ) {
    dispatch({ type: "validate", id: "email", data: true });
  } else {
    dispatch({ type: "validate", id: "email", data: false });
  }

  if (
    /[a-zA-Z]/.test(state.rsvpDetails.contact) ||
    state.rsvpDetails.contact.length === 0
  ) {
    dispatch({ type: "validate", id: "contact", data: true });
  } else {
    dispatch({ type: "validate", id: "contact", data: false });
  }
};
