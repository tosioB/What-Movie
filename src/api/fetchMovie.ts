import { API_KEY, BASE_URL } from "../util/config";

export const fetchMovies = async (category: string, page: number = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/${category}?language=ko&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    }
  );

  if (!response.ok) {
    throw new Error(`${category} 데이터를 불러오는데 실패했습니다.`);
  }

  return response.json();
};
