import axios from "axios";
import { FORCAST_END_POINT, KEY } from "./api_constants";
import { API_KEY, BASE_URL } from '@env';

const FORCAST_API_URL = `${BASE_URL}${FORCAST_END_POINT}?${KEY}=${API_KEY}&aqi=no&alerts=no`;

const getForcastWeather = async (cityName, days = 1) => {
    const URL = `${FORCAST_API_URL}&q=${cityName}&days=${days}`;
    try{
        const result = await axios.get(URL);
        return result;
    }catch(error){
        console.log(error);
        throw error;
    }
};

export default getForcastWeather;