const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export async function getCurrentWeather(city: string) {
  const response = await fetch(
    `${BASE_URL}weather?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`
  );

  const json = await response.json();
  return json;
}
