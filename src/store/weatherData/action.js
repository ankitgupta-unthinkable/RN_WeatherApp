import getForcastWeather from "../../api/weather_repository";

const { WEATHER_LOADING, WEATHER_FAILURE, WEATHER_LOADED } = require("../../constants/action_constant");

const weatherLoading = () => {
    return {
        type: WEATHER_LOADING,
    };
}

const weatherLoaded = (weather) => {
    return {
        type: WEATHER_LOADED,
        payload: weather,
    };
}

const weatherFailure = () => {
    return {
        type: WEATHER_FAILURE,
    };
}

export const fetchWeather = (cityName, days = 1) => {
    return async (dispatch) => {
        dispatch(weatherLoading());
        try {
            console.log(cityName);
            const result = await getForcastWeather(cityName, days);
            console.log('Result', result.data);
            if (result.data) {
                dispatch(weatherLoaded(result.data));
            } else {
                dispatch(weatherFailure());
            }
        } catch (error) {
            dispatch(weatherFailure());
        }
    };
};