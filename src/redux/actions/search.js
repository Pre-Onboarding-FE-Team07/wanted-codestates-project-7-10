import axios from 'axios';
import { SEARCH_RESULT } from './types';

export const searchResult = async () => {
  const request = await axios
    .get(
      `https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=암`
    )
    .then((response) => response.data)
    .catch((err) => console.log(err));

  return {
    type: SEARCH_RESULT,
    payload: request,
  };
};
