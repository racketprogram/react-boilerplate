const home = (state = {}, action) => {
    switch (action.type) {
        case "INIT":
            return {
                ...state,
                init: action.init
            };
        default:
            return state;
    }
};

export default home;
