import { SET_CURRENT_POSITION } from "../../constants/action_constant";

const initialState = {
    latitude: 37.0902,
    longitude: 95.7129,
}

const locationReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CURRENT_POSITION:
            return {
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
            };
        default:
            return state;
    }
};


export default locationReducer;