import {configureStore, createSlice} from "@reduxjs/toolkit";

let user = createSlice({
    name: "user",
    initialState: {name: "kim", age: 30},
    reducers: {
        changeName(state) {
            state.name = "jonh " + state.name
        },
        ageUp(state, action){
            state.age += action.payload
        }
    }
})
export let {changeName, ageUp} = user.actions



let isLogin = createSlice({
    name: "isLogin",
    initialState: false,
    reducers: {
        TrueLogin() {
            return true
        },
        FalseLogin() {
            return false
        }
    }
})
export let {TrueLogin, FalseLogin} = isLogin.actions

export default configureStore({
    reducer: {
        user: user.reducer,
        isLogin: isLogin.reducer
    }
})