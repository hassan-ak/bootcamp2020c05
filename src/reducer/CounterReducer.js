const numberReducer = (state, action) => {
    switch (action.type) {
        case "add":
            return state +1
        case "minus":
            return state -1
        case "addition":
            return state + action.value
        case "subtraction":
            return state - action.value
        case "multiplication":
            return state * action.value
        case "division":
            return state / action.value
        default:
            return state;
    }
}

export default numberReducer;