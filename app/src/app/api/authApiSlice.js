// import { login } from "../../../../server/controllers/homeControllers";
import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builders =>{
        login: builder.mutation({
            query: Credentials =>({
                url:'/auth',
                method:'POST',
                body :{ ...Credentials}
            })
        })
    }
})