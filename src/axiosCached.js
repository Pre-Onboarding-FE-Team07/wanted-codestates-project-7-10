import * as axiosReal from 'axios';

const axios = {
  get: async (...args) => {
    // localStorage를 참조하여 동일한 요청이 있는지 확인합니다.
    // console.log('axios intercepted', args);
    const [url, options] = args;
    const request = { url, options };
    const cachedResponse = localStorage.getItem(JSON.stringify(request));
    if (cachedResponse) {
      return JSON.parse(cachedResponse);
    }

    /* 캐시에 없는 요청이면 debounce 패턴을 적용하여 요청합니다. */
    //TODO
    //const response = await axiosReal(...args);

    //요청을 마치면 해당 요청을 캐시에 저장합니다.
    //TODO

    return await axiosReal.get(...args);
  },
};

export default axios;
