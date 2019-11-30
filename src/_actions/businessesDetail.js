import { BUSINESSES_DETAIL_FULLFILLED, BUSINESSES_DETAIL_PENDING, BUSINESSES_DETAIL_REJECTED, RESET_BUSINESSES_DETAIL } from "../_types/businessesDetail"

export const businessesDetailPending = () => {
    return {
      type: BUSINESSES_DETAIL_PENDING
    }
  }
  export const businessesDetailFullfilled = (data) => {
    return {
      type: BUSINESSES_DETAIL_FULLFILLED,
      payload: data
    }
  }
  export const businessesDetailRejected = (data) => {
    return {
      type: BUSINESSES_DETAIL_REJECTED,
      payload: data
    }
  }
  
  export const resetBusinessesDetail = () => {
    return {
      type: RESET_BUSINESSES_DETAIL
    }
  }
