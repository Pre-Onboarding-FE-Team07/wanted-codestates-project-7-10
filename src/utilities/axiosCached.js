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

    // 캐싱된 응답이 없다면 원본 요청을 실행합니다
    const response = await axiosReal.get(...args);

    // 캐싱된 응답을 localStorage에 저장합니다.
    localStorage.setItem(JSON.stringify(request), JSON.stringify(response));
    return response;
  },
};

export default axios;
