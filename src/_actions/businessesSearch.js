import { BUSINESSES_SEARCH_FULLFILLED, BUSINESSES_SEARCH_PENDING, BUSINESSES_SEARCH_REJECTED, RESET_BUSINESSES_SEARCH } from "../_types/businessesSearch"

export const businessesSearchPending = () => {
    return {
      type: BUSINESSES_SEARCH_PENDING
    }
  }
  export const businessesSearchFullfilled = (data) => {
    return {
      type: BUSINESSES_SEARCH_FULLFILLED,
      payload: data
    }
  }
  export const businessesSearchRejected = (data) => {
    return {
      type: BUSINESSES_SEARCH_REJECTED,
      payload: data
    }
  }
  
  export const resetbusinessesSearch = () => {
    return {
      type: RESET_BUSINESSES_SEARCH
    }
  }
