"use client";
import { useEffect, useReducer, useState } from "react";
import RSVPReducer from "../../reducer/RSVPReducer";
import { RSVPInitState } from "../../reducer/RSVPInit";

import "../../styles/rsvp.scss";
import BasicForm from "./basic-form";
import GuestNames from "./guest-names";
import { Texts } from "../../lib/text";
import { Validator } from "../../functions/validator";
import { SendRSVP } from "../../functions/sendRSVP";
import FormLock from "./form-lock";
import ModalStatus from "./modal-status";
import { AnimatePresence } from "framer-motion";
import { Footer } from "../footer/footer";

type propType = {
  client: string;
};

const RSVP = ({ client }: propType) => {
  const [state, dispatch] = useReducer(RSVPReducer, RSVPInitState);

  const SubmitHandler = () => {
    console.log("Submitting...");
    Validator(state, dispatch);
  };

  useEffect(() => {
    const valid =
      !state.invalid.firstname &&
      !state.invalid.lastname &&
      !state.invalid.email &&
      !state.invalid.contact;

    const details =
      state.rsvpDetails.firstname != "" &&
      state.rsvpDetails.lastname !== "" &&
      state.rsvpDetails.email !== "" &&
      state.rsvpDetails.contact !== "";

    if (valid && details) {
      dispatch({ type: "submitKey", data: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.invalid]);

  useEffect(() => {
    if (state.submitKey) {
      SendRSVP(client, state, dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.submitKey]);

  //============================================
  // Remove Snackbar for 3 seconds
  //============================================
  useEffect(() => {
    if (state.modalKey) {
      setTimeout(() => {
        dispatch({ type: "modalKey", data: false });
      }, 3000);
    }
  }, [state.modalKey]);

  return (
    <section
      id="rsvp"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        width: "100%",
        height: `${state.formLock ? "100dvh" : "unset"}`,
        padding: "0.625rem 1.875rem",
      }}
    >
      <AnimatePresence>
        {state.modalKey && <ModalStatus state={state} dispatch={dispatch} />}
      </AnimatePresence>
      <div className="rsvp-container">
        <div className="rsvp-header">
          <h1>RSVP</h1>
          <h3>{Texts.rsvpDate}</h3>
        </div>
        {state.formLock ? (
          <>
            <h5 style={{ textAlign: "center" }}>
              {
                "If you're responding for you and a guest (or your family), you'll be able to RSVP for your entire group."
              }
            </h5>
            <FormLock state={state} dispatch={dispatch} />
          </>
        ) : (
          <>
            <BasicForm state={state} dispatch={dispatch} />
            <GuestNames state={state} dispatch={dispatch} />
            <button className="btn-secondary" onClick={SubmitHandler} disabled={state.submitKey}>
              {state.submitKey ? "SENDING..." : "SEND"}
            </button>

            <div
            className="contact"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
                alignItems: "center",
                marginBottom:'1.25rem'
              }}
            >
              <h6>Contact</h6>
              <p style={{textAlign:'center'}}>Shamy Fernandez 0968 637 7145 <br></br>
              Lance Chua 0927 671 8132</p>
            </div>

          </>
        )}
      </div>
    </section>
  );
};

export default RSVP;
