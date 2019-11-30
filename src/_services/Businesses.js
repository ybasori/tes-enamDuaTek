import axios from "../_utils/Api";

import { businessesSearchFullfilled, businessesSearchPending, businessesSearchRejected, resetbusinessesSearch} from "../_actions/businessesSearch"
import { businessesDetailFullfilled, businessesDetailPending, businessesDetailRejected, resetbusinessesDetail} from "../_actions/businessesDetail"

class Businesses {
    search = (objQuery) => {
        let query= "";
        for(let key in objQuery){
            query = `${query}${key}=${objQuery[key]}&`;
        }
        return dispatch => {
            dispatch(businessesSearchPending());
            axios({
                method: 'GET',
                headers: { 'content-type': 'application/json' },
                url: `/businesses/search?${query}`
            }).then(result=>{
                dispatch(businessesSearchFullfilled(result.data.businesses));
            }).catch(err=>{
                if(typeof err.response !== "undefined"){
                    dispatch(businessesSearchRejected(err.response));
                }
                else{
                    dispatch(businessesSearchRejected(err));
                }
            });
        }
    }
    detail = (id) => {
        return dispatch => {
            dispatch(businessesDetailPending());
            axios({
                method: 'GET',
                headers: { 'content-type': 'application/json' },
                url: `/businesses/${id}`
            }).then(result=>{
                dispatch(businessesDetailFullfilled(result.data));
            }).catch(err=>{
                if(typeof err.response !== "undefined"){
                    dispatch(businessesDetailRejected(err.response));
                }
                else{
                    dispatch(businessesDetailRejected(err));
                }
            });
        }
    }

   
}

export default new Businesses;