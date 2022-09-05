import {GET_USERS,GET_USERS_SUCCESS,GET_USERS_FAIL} from "../constants"


const initialChar = {
    users: [],
    loading: false,
    errors: null,
    
}

const userReducer = (state = initialChar, { type, payload }) => {
    switch (type) {
        case GET_USERS:
            return {
                ...state,
                loading : true
            };
        case GET_USERS_SUCCESS :
            return{
                ...state,
                loading: false,
                users : payload.d,
                
                
            }
        case GET_USERS_FAIL:
            return{
                ...state,
                loading: false,
                errors:payload
            }
        
            default:
                return state;
    
        }
    }
    
export default userReducer;