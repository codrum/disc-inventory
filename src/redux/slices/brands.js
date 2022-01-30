import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const fetchBrands = createAsyncThunk('discs/fetchBrands', async () => {
	try {
		const response = await axios.get('http://localhost:8080/inventory/brands')
		return response.data
	} catch (error) {
		throw error
	}
})

const initialState = {
	brands: [],
	status: 'idle',
	currentRequestId: undefined,
	error: null,
}

const handleFetchBrandsFulfilled = (state, action) => {
	const { requestId } = action.meta
	if (state.status === 'pending' && state.currentRequestId === requestId) {
		state.status = 'fulfilled'
		state.brands = action.payload
		state.currentRequestId = undefined
	}
}

const handleFetchBrandsPending = (state, action) => {
	if (state.status === 'idle') {
		state.status = 'pending'
		state.currentRequestId = action.meta.requestId
	}
}
const handleFetchBrandsRejected = (state, action) => {
	const { requestId } = action.meta
	if (state.status === 'pending' && state.currentRequestId === requestId) {
		state.status = 'idle'
		state.error = action.error
		state.currentRequestId = undefined
	}
}
const brands = createSlice({
	name: 'discs',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchBrands.pending, handleFetchBrandsPending)
		builder.addCase(fetchBrands.fulfilled, handleFetchBrandsFulfilled)
		builder.addCase(fetchBrands.rejected, handleFetchBrandsRejected)
	},
})

export default brands.reducer
