const API_KEY = 'd401548668e9fff8c93c6c95c67d4da0';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export async function getCurrentWeather(city: string) {
  const response = await fetch(
    `${BASE_URL}weather?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`
  );

  const json = await response.json();
  return json;
}
