import axios from 'axios';
import env from './Env';

export default axios.create({
    baseURL: env.apiUrl,
    headers:{
        authorization: "Bearer dGMIUjpxyE7DZcwRYY4nFN1A_hTL1mFAVGD8eDF0j0f-VCsrnnpxKqCb2vg3xhKu2LhjF_2f-i21q0eSjAn_bBMhqGzAejY2u0_J6x12FKdeZeNadfD4_eG0H__hXXYx"
    }
});