import { ADULT_DECREMENT, ADULT_INCREMENT, CHILD_DECREMENT, CHILD_INCREMENT, BABY_INCREMENT, BABY_DECREMENT } from "../Actions/bookingAction"


const initialState = {
    adult: 0,
    child: 0,
    baby: 0
}

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADULT_INCREMENT:
            return { ...state, adult: state.adult + 1 };
        case ADULT_DECREMENT:
            let adultPerson = 0;
            if (state.adult > 0) {
                adultPerson = 1
            }
            return { ...state, adult: state.adult - adultPerson };
        case CHILD_INCREMENT:
            return { ...state, child: state.child + 1 };
        case CHILD_DECREMENT:
            let childPerson = 0;
            if (state.child > 0) {
                childPerson = 1
            }
            return { ...state, child: state.child - childPerson }
        case BABY_INCREMENT:
            return { ...state, baby: state.baby + 1 };
        case BABY_DECREMENT:
            let babyPerson = 0;
            if (state.child > 0) {
                babyPerson = 1
            }
            return { ...state, baby: state.baby - babyPerson }
        default:
            return state;
    }
}

export default bookingReducer