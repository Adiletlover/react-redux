import { DECREMENT, INCREMENT, RANDOM_INCREMENT } from './types'

export const increment = () => {
    return {
        type: INCREMENT,
    }
}
export const decrement = () => {
    return {
        type: DECREMENT,
    }
}
export const randomINC = () => {
    return {
        type: RANDOM_INCREMENT,
        payload: Math.floor(Math.random() * 20)
    }
}