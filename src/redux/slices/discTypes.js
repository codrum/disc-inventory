import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchDiscTypes = createAsyncThunk('discs/fetchDiscTypes', async () => {
	try {
		const response = await axios.get('http://localhost:8080/inventory/discTypes')
		return response.data
	} catch (error) {
		throw error
	}
})

const initialState = {
	types: [],
	status: 'idle',
	currentRequestId: undefined,
	error: null,
}

const discTypes = createSlice({
	name: 'discTypes',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchDiscTypes.pending, (state, action) => {
			if (state.status === 'idle') {
				state.status = 'pending'
				state.currentRequestId = action.meta.requestId
			}
		})
		builder.addCase(fetchDiscTypes.fulfilled, (state, action) => {
			const { requestId } = action.meta
			if (state.status === 'pending' && state.currentRequestId === requestId) {
				state.status = 'fulfilled'
				state.types = action.payload
				state.currentRequestId = undefined
			}
		})
		builder.addCase(fetchDiscTypes.rejected, (state, action) => {
			const { requestId } = action.meta
			if (state.status === 'pending' && state.currentRequestId === requestId) {
				state.status = 'idle'
				state.error = action.error
				state.currentRequestId = undefined
			}
		})
	},
})

// export const selectDiscTypes = createSelector(
// 	state => ({
// 		discTypes: state.discTypes,
// 		status: state.status,
// 	}),
// 	state => state
// )

export default discTypes.reducer
