import * as types from "./post.constants";
const initialState = {
  posts: null,
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_POST_REQUEST:
      return { ...state, loading: true };
    case types.GET_POST_SUCCESS:
      console.log("payload?", payload)
      return { ...state, loading: false, posts: payload };
    case types.GET_POST_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return { ...state };
  }
};

export default postReducer;
