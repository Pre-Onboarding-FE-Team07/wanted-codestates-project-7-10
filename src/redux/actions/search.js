import axios from 'axios';
import { SEARCH_RESULT } from './types';

export const searchResult = async (value) => {
  // 채윤님이 작성하실 코드
  const request = await axios
    .get(
      `https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=${value}`
    )
    .then((response) => response.data)
    .catch((err) => console.log(err));

  return {
    type: SEARCH_RESULT,
    payload: request,
  };
};
