import {
  UPLOAD_SWITCH_IMAGE,
  UPLOAD_LIMITER_IMAGE,
  UPLOAD_CO_LIMITER_IMAGE,
  UPLOAD_DRIVERS_IMAGE,
  UPLOAD_NEWS_IMAGE
} from "actions/types";

export const handleReducer = (type) => {
  switch (type) {
    case "switches":
      return UPLOAD_SWITCH_IMAGE;

    case "limiters":
      return UPLOAD_LIMITER_IMAGE;

    case "colimiters":
      return UPLOAD_CO_LIMITER_IMAGE;

    case "swdrivers":
      return UPLOAD_DRIVERS_IMAGE;
    case "news":
      return UPLOAD_NEWS_IMAGE;

    default:
      console.log("please check the reducer types");
  }
};
