import { SEARCH_RESULT } from '../actions/types';

// const initialState = {
//     search: []
// };

export default function search(state = {}, action) {
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
