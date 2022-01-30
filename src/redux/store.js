import { configureStore } from '@reduxjs/toolkit'
import brands from './slices/brands'
import discs from './slices/discs'
import discTypes from './slices/discTypes'
import statuses from './slices/statuses'
import authorization from './reducers/authReducer'
import filter from './reducers/filterSlice'

const reducer = {
	discTypes,
	discs,
	brands,
	statuses,
	authorization,
	filter,
}

export const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV !== 'production',
})
