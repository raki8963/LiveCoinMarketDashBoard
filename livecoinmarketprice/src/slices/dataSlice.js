import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    coin : 'BTC',
    data : []
}

const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers : {
        setCoin(state,action){
            state.coin = action.payload
        },
        setData(state,action){
            state.data = action.payload
        },
        addData(state,action){
            state.data = [...setData.data,...action.payload];
        }
    }
});

//export actions
export const {setCoin,setData,addData} = dataSlice.actions;

//export selectors
export const selectCoin = (state)=>state.data.coin;
export const selectData = (state)=>state.data.data;

//export reducer
export default dataSlice.reducer