const { SET_CURRENT_POSITION } = require("../../constants/action_constant");

const setLocationCoOrdinate = (latitude, longitude) => {
    return {
        type: SET_CURRENT_POSITION,
        payload:{
            latitude: latitude,
            longitude: longitude,
        }
    };
}

export { setLocationCoOrdinate }