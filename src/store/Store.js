import { configureStore } from '@reduxjs/toolkit'
import  SidebarReducer  from './slices/SidebarSlice'

export default configureStore({
  reducer: {
    handleSidebar : SidebarReducer
  },
})