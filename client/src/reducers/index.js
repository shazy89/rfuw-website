import { combineReducers } from "redux";
import alert from "./alert";
import table from "./table";
import auth from "./auth";
import news from "./news";
import switches from "./switches";
import limiters from "./limiters";
import swDrivers from "./swDrivers";
import featuredItems from "./featuredItems";
import coLimiters from "./coLimiters";
import events from "./events";

export default combineReducers({
  alert,
  table,
  auth,
  news,
  switches,
  limiters,
  swDrivers,
  featuredItems,
  coLimiters,
  events
});
