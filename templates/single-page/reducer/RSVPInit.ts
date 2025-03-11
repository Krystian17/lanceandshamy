export const RSVPInitState: RSVPStateType = {
  rsvpDetails: {
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    areYouAttending: true,
    numberOfAttendees: "",
    guestNames: [],
  },
  invalid: {
    firstname: false,
    lastname: false,
    email: false,
    contact: false,
    nameLock: false
  },
  nameLock: "",
  submitKey: false,
  lockKey: false,
  formLock: true,
  modalKey: false,

};

export type RSVPStateType = {
  rsvpDetails: RSVPDetailsType;
  invalid: {
    firstname: boolean;
    lastname: boolean;
    email: boolean;
    contact: boolean;
    nameLock: boolean
  };
  nameLock: string;
  submitKey: boolean;
  lockKey: boolean;
  formLock: boolean;
  modalKey: boolean,
};

export type RSVPDetailsType = {
  firstname: string;
  lastname: string;
  email: string;
  contact: string;
  areYouAttending: boolean;
  numberOfAttendees: string;
  guestNames: GuestNameType[];
};

export type GuestNameType = {
  name: string;
};
