// import axios from "axios";
import { SEARCH_RESULT } from './types';

export const searchResult = async () => {
  // 채윤님이 작성하실 코드

  return {
    type: SEARCH_RESULT,
    payload: ['data', '1', '2', '3'],
  };
};
