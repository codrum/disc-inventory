import { createAction, createReducer } from '@reduxjs/toolkit'

export const authorized = createAction('discs/authorized')
export const unauthorized = createAction('discs/unauthorized')

const initialState = { authorized: false }

const authorization = createReducer(initialState, builder => {
	builder
		.addCase(authorized, (state, action) => {
			state.authorized = true
		})
		.addCase(unauthorized, (state, action) => {
			state.authorized = false
		})
})

export default authorization
