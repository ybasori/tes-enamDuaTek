import { BUSINESSES_DETAIL_FULLFILLED, BUSINESSES_DETAIL_PENDING, BUSINESSES_DETAIL_REJECTED, RESET_BUSINESSES_DETAIL } from "../_types/businessesDetail"

const initialState = {
    isLoading: false,
    data: null,
    error: null
}

const businessesDetail = (state = initialState, action) => {
    switch (action.type) {
      case BUSINESSES_DETAIL_PENDING:
        return {
          ...state,
          isLoading: true,
          data:null,
          error: null
        } 
      
      case BUSINESSES_DETAIL_FULLFILLED:
        return {
          ...state,
          isLoading: false,
          data:action.payload,
          error: null
        } 
      
      case BUSINESSES_DETAIL_REJECTED:
        return {
          ...state,
          isLoading: false,
          data: null,
          error: action.payload
        } 
      case RESET_BUSINESSES_DETAIL:
          return {
            ...state,
            isLoading: false,
            data: null,
            error: null
          } 
      default:
        return state;
    }
  }
  
  export default businessesDetail;