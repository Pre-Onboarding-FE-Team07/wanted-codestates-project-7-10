import axios from '../../utilities/axiosCached';
import { IS_SEARCHING, SEARCH_RECOMMEND, SEARCH_RESULT } from './types';

export const searchRecommend = async (searchValue) => {
  if (searchValue) {
    const request = await axios
      .get(
        `https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=${searchValue}`
      )
      .then((response) => response.data.slice(0, 7))
      .catch((err) => console.log(err));
    return {
      type: SEARCH_RECOMMEND,
      payload: request,
    };
  }
  else {
    return {
      type: SEARCH_RECOMMEND,
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

export const searchResult = async (result) => {
  return {
    type: SEARCH_RESULT,
    payload: result,
  };
};
