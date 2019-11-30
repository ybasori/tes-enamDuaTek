import { BUSINESSES_SEARCH_FULLFILLED, BUSINESSES_SEARCH_PENDING, BUSINESSES_SEARCH_REJECTED, RESET_BUSINESSES_SEARCH } from "../_types/businessesSearch"

const initialState = {
    isLoading: false,
    data: [],
    error: null
}

const businessesSearch = (state = initialState, action) => {
    switch (action.type) {
      case BUSINESSES_SEARCH_PENDING:
        return {
          ...state,
          isLoading: true,
          data:[],
          error: null
        } 
      
      case BUSINESSES_SEARCH_FULLFILLED:
        return {
          ...state,
          isLoading: false,
          data:action.payload,
          error: null
        } 
      
      case BUSINESSES_SEARCH_REJECTED:
        return {
          ...state,
          isLoading: false,
          data: [],
          error: action.payload
        } 
      case RESET_BUSINESSES_SEARCH:
          return {
            ...state,
            isLoading: false,
            data: [],
            error: null
          } 
      default:
        return state;
    }
  }
  
  export default businessesSearch;