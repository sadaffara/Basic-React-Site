import {ADD, REMOVE} from '../type'
export default (state = {count:0}, action) =>{
    switch(action.type)
    {
        case ADD :
            return{
                ...state,
                count: action.count
            }
        case REMOVE:
            return{
                ...state,
                count: action.count
            }
        default:
            return state;
            

    }
}