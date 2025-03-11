"use client";
import { useEffect } from "react";
import { FailSafe } from "./functions/failsafe";

type propType ={
  date:string;
  daysBeforeTotalEffect: number
}

const DebugHUD = ({date, daysBeforeTotalEffect}:propType) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      FailSafe({date, daysBeforeTotalEffect})
    }
  }, [date, daysBeforeTotalEffect]);
  return <></>;
};

export default DebugHUD;
