import {configureStore, createSlice} from "@reduxjs/toolkit";

// 로그인 여부상태 확인
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

// 로그인 되어있는 고유 번호
let UID = createSlice({
    name: "UID",
    initialState: {UID: ""},
    reducers: {
        changeUID(state, action) {
            state.UID = action;
        },
        clearUID(state) {
            state.UID = "";
        }
    }
})
export let {changeUID, clearUID} = UID.actions

export default configureStore({
    reducer: {
        isLogin: isLogin.reducer,
        UID: UID.reducer
    }
})