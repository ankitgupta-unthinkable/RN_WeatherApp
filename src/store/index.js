import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import locationReducer from "./geoLocation/reducer";
import weatherReducer from "./weatherData/reducer";

const reducers = combineReducers({
    location: locationReducer,
    weather: weatherReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;