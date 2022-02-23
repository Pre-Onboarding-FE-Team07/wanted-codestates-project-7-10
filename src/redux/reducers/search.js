import {
  IS_SEARCHING,
  SEARCH_RECOMMEND,
  SEARCH_RESULT,
} from '../actions/types';

export default function search(state = {}, action) {
  switch (action.type) {
    case SEARCH_RECOMMEND:
      return {
        ...state,
        success: action.payload,
      };
    case IS_SEARCHING:
      return {
        ...state,
        searching: action.payload,
      };
    case SEARCH_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
}
