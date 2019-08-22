import { createStore } from "redux";
import rootReducer from "./reducers";
import bootstrap from "./bootstrap";
import orm from "./models";

const store = createStore(rootReducer, bootstrap(orm));

export default store;