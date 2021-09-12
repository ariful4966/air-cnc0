export const ADULT_INCREMENT = 'ADULT_INCREMENT';
export const ADULT_DECREMENT = 'ADULT_DECREMENT';

export const adultIncrement = () => {
    return { type: ADULT_INCREMENT }
}
export const adultDecrement = () => {
    return { type: ADULT_DECREMENT }
}

export const CHILD_INCREMENT = 'CHILD_INCREMENT'
export const CHILD_DECREMENT = 'CHILD_DECREMENT'

export const childIncrement = () => {
    return { type: CHILD_INCREMENT }
}
export const childDecrement = () => {
    return { type: CHILD_DECREMENT }
}
export const BABY_INCREMENT = 'BABY_INCREMENT'
export const BABY_DECREMENT = 'BABY_DECREMENT'

export const babyIncrement = () => {
    return { type: BABY_INCREMENT }
}
export const babyDecrement = () => {
    return { type: BABY_DECREMENT }
}