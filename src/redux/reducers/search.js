import { SEARCH_RESULT } from '../actions/types';

const initialState = {};

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RESULT:
      return {
        ...state,
        success: action.payload,
      };
    default:
      return state;
  }
}
