import { combineReducers } from '@reduxjs/toolkit'
import { mainReducer } from './main.slice'
import { contentAPI } from '@/entities/content/api/content.api'

export const rootReducer = combineReducers({
	main: mainReducer,
	[contentAPI.reducerPath]: contentAPI.reducer
})
