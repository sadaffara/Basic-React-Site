import {ADD, REMOVE} from '../type'
export const add = (count) =>({
    type: ADD,
    count
})

export const remove = (count) =>({
    type: REMOVE,
    count
})