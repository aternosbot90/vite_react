import { createSlice } from '@reduxjs/toolkit'
import { toast,Zoom} from 'react-toastify';

const initialState = {
    items:JSON.parse(localStorage.getItem('colleciton')) || []
}

const collectionSlice = createSlice({
    name:'collection',
    initialState,
    reducers:{
        addCollection:(state,action)=>{
            console.log("hia hia");
          const alreadyExists = state.items.find(
          item => item.id === action.payload.id
          )
          if(!alreadyExists){
             state.items.push(action.payload)
           localStorage.setItem("collection",JSON.stringify(state.items))
           console.log("ha ha");
           
          }
          else{
            console.log("he he");
            
          }
        },
        removeCollection:(state,action)=>{
           state.items = state.items.filter(
            item => item.id !== action.payload
           )
           console.log(state.items)
           localStorage.setItem("collection",JSON.stringify(state.items));
        },
        clearCollection:(state)=>{
            state.items = []
            localStorage.removeItem("collection")
        },
        addedToast:()=>{
            toast.success("Added to Collection!",{
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            })
        },
        removeToast:()=>{
            toast.error('removed from collection', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
          });
        }
    }

})

export const {
    addCollection,
    removeCollection,
    clearCollection,
    addedToast,
    removeToast
} = collectionSlice.actions;

export default collectionSlice.reducer;