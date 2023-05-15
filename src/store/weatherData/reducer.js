const { WEATHER_LOADING, WEATHER_LOADED, WEATHER_FAILURE } = require("../../constants/action_constant");

const initialState = {
    loading: true,
    error: false,
    weatherData: null,
};

const weatherReducer = (state = initialState, action) => {
    switch(action.type){
        case WEATHER_LOADING:
            return {
                ...state,
                loading: true,
            };
        case WEATHER_LOADED:
            return {
                ...state,
                weatherData: action.payload,
                loading: false,
                error: false,
            };
        case WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};

export default weatherReducer;