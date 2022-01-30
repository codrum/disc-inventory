import { createSlice } from '@reduxjs/toolkit'

export const filter = createSlice({
	name: 'filters',
	initialState: {
		brand: [],
		color: [],
		stampColor: [],
		weight: [],
		price: [],
		flatness: [],
		stiffness: [],
		type: [],
	},
	reducers: {
		setBrandFilter(state, action) {
			state.brand = action.payload
		},
		setColorFilter(state, action) {
			state.color = action.payload
		},
		setStampColorFilter(state, action) {
			state.stampColor = action.payload
		},
		setWeightFilter(state, action) {
			state.weight = action.payload
		},
		setPriceFilter(state, action) {
			state.price = action.payload
		},
		setFlatnessFilter(state, action) {
			state.flatness = action.payload
		},
		setStiffnessFilter(state, action) {
			state.stiffness = action.payload
		},
		setTypeFilter(state, action) {
			state.type = action.payload
		},
	},
})

const { actions, reducer } = filter

export const {
	setBrandFilter,
	setColorFilter,
	setStampColorFilter,
	setWeightFilter,
	setPriceFilter,
	setFlatnessFilter,
	setStiffnessFilter,
	setTypeFilter,
} = actions

export default reducer
