import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import postReducer from "./post/post.reducer";

const initialState = {};
const store = createStore(
  postReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
