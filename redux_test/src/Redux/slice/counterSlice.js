import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // title: "",
    // images: "",
    // price: 0,
    // description: ""
    data: [],
    next: 0,
    previous: 0,
    index: 0
}

export const counterSlice = createSlice({
    name: "Phone_accessories",
    initialState,
    reducers: {
        // setTitle: (state, action)=> {
        //     state.title = action.payload
        // },
        // setImages: (state, action)=> {
        //     state.images = action.payload
        // },
        // setPrice: (state, action)=> {
        //     state.title = action.payload
        // },
        // setDescription: (state, action)=> {
        //     state.title = action.payload
        // }
        setData: (state, action)=> {
            state.data = action.payload
        },
        setNext: (state, action)=>{
            state.next = action.payload
        },
        setPrevious: (state, action)=> {
            state.previous = action.payload
        },
        setIndex: (state, action)=> {
            state.index = action.payload
        }

    }
})
export const {setData, setNext, setPrevious, setIndex} = counterSlice.actions;
export default counterSlice.reducer
