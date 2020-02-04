import { combineReducers, createStore } from "redux";

import userReducer from "./reducers/user";
import proposteReducer from "./reducers/proposte";
import comunicazioniReducer from "./reducers/comunicazioni";
import assenzeReducer from "./reducers/assenze";

const rootReducer = combineReducers({
  user: userReducer,
  proposte: proposteReducer,
  comunicazioni: comunicazioniReducer,
  assenze: assenzeReducer
});

const store = createStore(rootReducer);

export default store;