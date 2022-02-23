import { IS_SEARCHING, SEARCH_RESULT } from '../actions/types';

export default function search(state = {}, action) {
  switch (action.type) {
    case SEARCH_RESULT:
      return {
        ...state,
        success: action.payload,
      };
    case IS_SEARCHING:
      return {
        ...state,
        searching: action.payload,
      };
    default:
      return state;
  }
}
