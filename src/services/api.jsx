import axios from 'axios';

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    console.log('API 요청:', config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API 에러:', error);
    return Promise.reject(error);
  }
);

// API 함수들
export const restaurantAPI = {
  // 맛집 목록 가져오기
  getRestaurants: async () => {
    return api.get('/api/restaurants');
  },

  // 맛집 상세 정보 가져오기
  getRestaurantById: async (id) => {
    return api.get(`/api/restaurants/${id}`);
  },

  // 인기 맛집 가져오기
  getPopularRestaurants: async () => {
    return api.get('/api/restaurants/popular');
  }
};

export default api;
