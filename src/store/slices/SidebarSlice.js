import { createSlice } from '@reduxjs/toolkit'

export const SidebarSlice = createSlice({
  name: 'Sidebar',
  initialState: {
    active: false,
  },
  reducers: {
     toggleSidebar : (state, action)=>{
      console.log(action.payload);
      
        state.active = action.payload
     }
  },
})

export const {toggleSidebar } = SidebarSlice.actions

export default SidebarSlice.reducer