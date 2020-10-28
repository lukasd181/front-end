import api from "../api";
import { toast } from "react-toastify";
import * as types from "./post.constants";

const getPosts = () => async (dispatch) => {
  dispatch({ type: types.GET_POST_REQUEST, payload: null });
  try {
    const res = await api.get("/post");
    dispatch({ type: types.GET_POST_SUCCESS, payload: res.data.data });
    
  } catch (err) {
    dispatch({ type: types.GET_POST_FAILURE, payload: err.message });
  }
};

const postPost = (postData) => async (dispatch) => {};

export const postAction = {
  getPosts,
  postPost,
};
