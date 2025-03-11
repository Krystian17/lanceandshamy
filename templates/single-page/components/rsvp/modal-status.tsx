import { RSVPStateType } from "../../reducer/RSVPInit";
import "../../styles/rsvp.scss";

import { motion } from "framer-motion";

type propType = {
  state: RSVPStateType;
  dispatch: Function;
};

const ModalStatus = ({ state, dispatch }: propType) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="modal-status"
    >
      <h3>Thank you for your response.</h3> <h3>See you there!</h3>
    </motion.div>
  );
};

export default ModalStatus;
