import axios from '../../utilities/axiosCached';
import { SEARCH_RESULT, IS_SEARCHING } from './types';

export const searchResult = async (searchValue) => {
  if (searchValue) {
    const request = await axios
      .get(
        `https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=${searchValue}`
      )
      .then((response) => response.data.slice(0, 7))
      .catch((err) => console.log(err));
    return {
      type: SEARCH_RESULT,
      payload: request,
    };
  }
  else {
    return {
      type: SEARCH_RESULT,
      payload: null,
    }
  }

};

export const isSearching = (state) => {
  return {
    type: IS_SEARCHING,
    payload: state,
  };
};
