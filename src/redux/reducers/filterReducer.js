import { createAction, createReducer } from '@reduxjs/toolkit'

export const brand = createAction('@discs/brand')
export const color = createAction('@discs/color')
export const stampColor = createAction('@discs/stampColor')
export const weight = createAction('@discs/weight')
export const price = createAction('@discs/price')
export const flatness = createAction('@discs/flatness')
export const stiffness = createAction('@discs/stiffness')
export const type = createAction('@discs/type')

const initialState = {
	brand: [],
	color: [],
	stampColor: [],
	weight: [],
	price: [],
	flatness: [],
	stiffness: [],
	type: [],
}

const filter = createReducer(initialState, builder => {
	builder
		.addCase(brand, (state, action) => {
			state.brand = action.payload
		})
		.addCase(color, (state, action) => {
			state.color = action.payload
		})
		.addCase(stampColor, (state, action) => {
			state.stampColor = action.payload
		})
		.addCase(weight, (state, action) => {
			state.weight = action.payload
		})
		.addCase(price, (state, action) => {
			state.price = action.payload
		})
		.addCase(flatness, (state, action) => {
			state.flatness = action.payload
		})
		.addCase(stiffness, (state, action) => {
			state.stiffness = action.payload
		})
		.addCase(type, (state, action) => {
			state.type = action.payload
		})
})

export default filter
