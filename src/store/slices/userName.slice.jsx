import { createSlice } from "@reduxjs/toolkit"

export const userNameSlice = createSlice({
    name: "userName",
    initialState: "",
    reducers: {
        newUser : (state, action) => {
            return action.payload
        }
    }
})

export const { newUser } = userNameSlice.actions

export default userNameSlice.reducer