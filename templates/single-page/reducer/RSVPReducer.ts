import { Reducer } from "react";
import { RSVPStateType } from "./RSVPInit";

const RSVPReducer: Reducer<RSVPStateType, any> = (
  state: RSVPStateType,
  action: any
) => {
  switch (action.type) {
    case "addGuest": {
      return {
        ...state,
        rsvpDetails: {
          ...state.rsvpDetails,
          guestNames: [
            ...state.rsvpDetails.guestNames,
            {
              name: "",
            },
          ],
        },
      };
    }

    case "updateGuest": {
      const { data, rank } = action;
      const newList = [...state.rsvpDetails.guestNames];
      newList[rank] = { ...newList[rank], name: data };

      return {
        ...state,
        rsvpDetails: {
          ...state.rsvpDetails,
          guestNames: newList,
        },
      };
    }

    case "removeGuest": {
      const rank: number = action.rank;
      const newArray = state.rsvpDetails.guestNames.filter(
        (_, i) => i !== rank
      );

      return {
        ...state,
        rsvpDetails: {
          ...state.rsvpDetails,
          guestNames: newArray,
        },
      };
    }

    case "rsvpInput": {
      const data = action.data;
      const id = action.id;
      return {
        ...state,
        rsvpDetails: {
          ...state.rsvpDetails,
          [id]: data,
        },
      };
    }

    case "lockInput": {
      const nameLock = action.data;
      return {
        ...state,
        nameLock,
      };
    }

    case "formLock": {
      const formLock = action.data;
      return {
        ...state,
        formLock,
      };
    }

    case "validate": {
      const data = action.data;
      const id = action.id;

      //console.log(id, data)
      return {
        ...state,
        invalid: {
          ...state.invalid,
          [id]: data,
        },
      };
    }

    case "submitKey": {
      const submitKey = action.data;
      return {
        ...state,
        submitKey,
      };
    }

    case "lockKey": {
      const lockKey = action.data;
      return {
        ...state,
        lockKey,
      };
    }

    case "modalKey": {
      const modalKey = action.data;
      return {
        ...state,
        modalKey,
      };
    }

    default: {
      return state;
    }
  }
};

export default RSVPReducer;
